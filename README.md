# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

---

# HACK X 2026 — Landing Page

## Configuration (`src/config.ts`)

Everything configurable lives in one file:

| Key | Purpose |
| --- | --- |
| `REGISTER_URL` | The Google Form link used by the "Register" buttons and QR code. Paste your real `forms.gle/...` URL here. |
| `STATS_API_URL` | Web App URL of your Apps Script counter. Leave empty to show `--` for teams. |
| `INSTAGRAM_HANDLE` | Instagram handle for the Content Wall (live embed) once the media team shares it. |
| `ORGANIZERS` | The partner logos shown in the header. Files are served from `public/logos/`. |
| `EVENT_START_ISO` | Countdown target date/time. |

## Live team counter (real data, no fakes)

The team counter in the hero fetches the **real** registration count once from
your linked Google Sheet via Apps Script. Until you wire it up, it shows `--`.

Setup:

1. In your **Google Form**, open the **Responses** tab → Sheets icon →
   **Create spreadsheet** (this links the form to a Sheet).
2. In that Sheet: **Extensions → Apps Script**, replace the default code with
   the contents of [`scripts/AppsScript.gs`](scripts/AppsScript.gs).
3. **Deploy → New deployment → Web app**, and set **"Who has access"** to
   **Anyone**.
4. Copy the deployment URL
   (`https://script.google.com/macros/s/.../exec`) and paste it into
   `STATS_API_URL` in `src/config.ts`.

Each row in the sheet's `Form Responses 1` tab = one successful registration.
The counter updates automatically on page load. The script also returns the
full `registrations` array (every stored form field) when you hit the URL
without `?action=count`.
