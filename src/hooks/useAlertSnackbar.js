import { useCallback, useContext } from 'react'
import { ContextStore } from '../store/Context'

export const useAlertSnackbar = () => {
  const { alerts, setState } = useContext(ContextStore)

  const addAlert = useCallback(alert => setState(old => ({ ...old, alerts: [...old.alerts, alert] })), [setState])
  const removeAlert = useCallback(
    alert => setState(old => ({ ...old, alerts: old.alerts.filter(a => a !== alert) })),
    [setState]
  )

  return { alerts, addAlert, removeAlert }
}
