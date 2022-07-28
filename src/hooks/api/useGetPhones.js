import axios from 'axios'
import { useContext, useEffect } from 'react'
import { ContextStore } from '../../store/Context'
import { useAlertSnackbar } from '../useAlertSnackbar'

export const useGetPhones = () => {
  const { setState } = useContext(ContextStore)
  const { addAlert } = useAlertSnackbar()

  const getPhones = useEffect(() => {
    axios
      .get('https://js-test-api.etnetera.cz/api/v1/phones')
      .then(response => {
        setState(old => ({ ...old, phones: response.data }))
      })
      .catch(response => addAlert({ message: `${response.response.data.error}`, severity: 'error' }))
  }, [addAlert, setState])

  return getPhones
}
