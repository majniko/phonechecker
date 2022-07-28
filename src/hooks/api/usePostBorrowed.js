import axios from 'axios'
import { useContext } from 'react'
import { ContextStore } from '../../store/Context'
import { useAlertSnackbar } from '../useAlertSnackbar'

export const usePostBorrowed = () => {
  const { addAlert } = useAlertSnackbar()
  const { setState, phones } = useContext(ContextStore)

  const isBorrowed = phone => {
    if (phone.borrowed) return '/return'
    if (!phone.borrowed) return '/borrow'
  }

  const PostBorrowed = phone => {
    const url = 'https://js-test-api.etnetera.cz/api/v1/phones/' + phone.id + isBorrowed(phone)

    axios
      .post(url)
      .then(response => {
        const newPhones = phones.map(newPhone => {
          if (response.data.id === newPhone.id) return response.data
          return newPhone
        })
        setState(old => ({ ...old, phones: newPhones }))
      })
      .catch(response => {
        addAlert({ message: `${response.response.data.error}`, severity: 'error' })
      })
  }

  return PostBorrowed
}
