import axios from 'axios'
import { useCallback, useContext } from 'react'
import { ContextStore } from '../../store/Context'
import { useAlertSnackbar } from '../useAlertSnackbar'

export const usePostLogin = () => {
  const { addAlert } = useAlertSnackbar()
  const { setState } = useContext(ContextStore)

  const postLogin = useCallback(
    ({ loginDetails }) =>
      axios
        .post('https://js-test-api.etnetera.cz/api/v1/login', loginDetails)
        .then(response => {
          setState(old => ({
            ...old,
            userData: response.data,
          }))
          addAlert({ message: 'Succesful login!', severity: 'success' })
        })
        .catch(response => {
          addAlert({ message: `${response.response.data.error}`, severity: 'error' })
        }),
    [setState, addAlert]
  )

  return postLogin
}
