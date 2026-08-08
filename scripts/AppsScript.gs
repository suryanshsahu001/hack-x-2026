/**
 * HACK X 2026 — Registration Counter + Data Backend (Google Apps Script)
 *
 * Reads successful registrations directly from the Google Form itself, so it
 * works whether the script is standalone or bound to the response sheet.
 *
 * Deploy steps (one time):
 *   1. Copy this file into a Google Apps Script project
 *      (script.google.com/home → "+ New project", or Extensions → Apps Script
 *      inside the linked response spreadsheet).
 *   2. Paste, save, then Deploy → New deployment → type "Web app".
 *      Execute as: "Me", Who has access: "Anyone".
 *   3. Copy the Web App URL (https://script.google.com/macros/s/.../exec).
 *   4. Paste that URL into `STATS_API_URL` in src/config.ts.
 *
 * Usage:
 *   <url>                → JSON { teamCount, total, registrations: [...] }
 *   <url>?action=count   → JSON { teamCount } (smaller, for the hero counter)
 *
 * Notes:
 *   - Each submitted form response = one successful registration.
 *   - `getRespondentEmail()` only returns values if your form is set to
 *     collect email addresses (Form settings → Collect email addresses).
 */

const FORM_URL =
  'https://docs.google.com/forms/d/1cLNmhodPixaZwJdY-MGL9rAQlmIjazL58rI97tbeZkQ/viewform'

// Optional fallback: if the script IS bound to the form's response sheet,
// this tab name is used. Ignored when the form read succeeds.
const SHEET_NAME = 'Form Responses 1'

function doGet(e) {
  const params = (e && e.parameter) || {}
  const payload = readForm()

  if (payload.error) {
    // Fall back to the linked spreadsheet (only works if script is bound to it).
    const sheetFallback = readSheet()
    if (sheetFallback) return json(sheetFallback)
    return json(payload)
  }

  if (params.action === 'count') {
    return json({ teamCount: payload.teamCount })
  }
  return json(payload)
}

function readForm() {
  try {
    const form = FormApp.openByUrl(FORM_URL)
    const responses = form.getResponses()

    const registrations = responses.map(function (resp) {
      const record = {
        timestamp: resp.getTimestamp() ? resp.getTimestamp().toISOString() : null,
        email: resp.getRespondentEmail() || '',
      }
      resp.getItemResponses().forEach(function (itemResponse) {
        let answer = itemResponse.getResponse()
        if (Array.isArray(answer)) answer = answer.join(', ')
        record[itemResponse.getItem().getTitle()] = answer === undefined ? '' : answer
      })
      return record
    })

    return { teamCount: registrations.length, total: registrations.length, registrations }
  } catch (err) {
    return { teamCount: 0, total: 0, registrations: [], error: String(err) }
  }
}

function readSheet() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    if (!sheet) return null

    const lastRow = sheet.getLastRow()
    const teamCount = Math.max(lastRow - 1, 0)
    const headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const data = sheet
      .getRange(2, 1, Math.max(lastRow - 1, 0), sheet.getLastColumn())
      .getValues()

    const registrations = data.map(function (row) {
      const record = {}
      headerRow.forEach(function (key, col) {
        const label = String(key).trim()
        if (label) record[label] = row[col]
      })
      return record
    })

    return { teamCount, total: teamCount, registrations, source: 'sheet' }
  } catch (err) {
    return null
  }
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
