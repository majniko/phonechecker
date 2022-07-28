import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import React from 'react'
import { useAlertSnackbar } from '../../hooks/useAlertSnackbar'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const AlertSnackbar = () => {
  const { alerts, removeAlert } = useAlertSnackbar()

  const handleClose = alert => (_, reason) => {
    if (reason === 'clickaway') return
    removeAlert(alert)
  }

  if (alerts.length === 0) return null

  return (
    <>
      {alerts.map(alert => (
        <Snackbar key={alert} open={true} autoHideDuration={6000} onClose={handleClose(alert)}>
          <Alert onClose={handleClose(alert)} severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  )
}
