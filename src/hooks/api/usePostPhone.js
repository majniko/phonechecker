import axios from 'axios'
import { useContext } from 'react'
import { ContextStore } from '../../store/Context'
import { useAlertSnackbar } from '../useAlertSnackbar'

export const usePostPhone = () => {
  const { addAlert } = useAlertSnackbar()
  const { phones, setState } = useContext(ContextStore)

  const postPhone = ({ newPhone }) => {
    axios
      .post('https://js-test-api.etnetera.cz/api/v1/phones', newPhone)
      .then(response => {
        setState(old => ({ ...old, phones: [...old.phones, { ...response.data }] }))
        addAlert({ message: 'Phone sucessfully submited!', severity: 'success' })
      })
      .catch(response => {
        addAlert({ message: `${response.response.data.error}`, severity: 'error' })
      })
  }

  return postPhone
}
