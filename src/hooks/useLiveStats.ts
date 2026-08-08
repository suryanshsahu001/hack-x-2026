import { useCallback, useEffect, useState } from 'react'
import { STATS_API_URL } from '../config'

interface StatsResponse {
  teamCount?: number
  teams?: number
}

function payloadCount(data: StatsResponse): number | null {
  const raw = Number(data.teamCount ?? data.teams)
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : null
}

export function useLiveStats() {
  const [teamCount, setTeamCount] = useState<number | null>(null)

  const refresh = useCallback(async () => {
    if (!STATS_API_URL) {
      setTeamCount(null)
      return
    }
    try {
      const res = await fetch(STATS_API_URL, { method: 'GET' })
      if (!res.ok) {
        setTeamCount(null)
        return
      }
      const data = (await res.json()) as StatsResponse
      setTeamCount(payloadCount(data))
    } catch {
      setTeamCount(null)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { teamCount, refresh }
}