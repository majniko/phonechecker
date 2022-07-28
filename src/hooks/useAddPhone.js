import { useContext, useState, useCallback, useMemo } from 'react'
import { ContextStore } from '../store/Context'
import { usePostPhone } from './api/usePostPhone'

const initialErrorState = {}
const initialPhoneState = {
  code: '',
  os: '',
  vendor: '',
  model: '',
  osVersion: '',
  image: '',
}

export const useAddPhone = () => {
  const { userData } = useContext(ContextStore)
  const [newPhone, setNewPhone] = useState(initialPhoneState)
  const [validationError, setValidationError] = useState(initialErrorState)
  const postPhone = usePostPhone()

  const handleChange = inputName => event => setNewPhone({ ...newPhone, [inputName]: event.target.value })

  const handlePhoneSubmit = useCallback(() => {
    const error = { ...initialErrorState }

    if (newPhone.code === '') error.code = 'Prosím vyplňte kód zařízení.'
    if (newPhone.model === '') error.model = 'Prosím vyplňte model telefonu.'
    if (newPhone.os === '') error.os = 'Prosím vyplňte operační systém.'
    if (newPhone.vendor === '') error.vendor = 'Prosím vyplňte správně výrobce telefonu.'

    setValidationError(error)
    if (Object.keys(error).length !== 0) return
    postPhone({ newPhone })
  }, [postPhone, setValidationError, newPhone])

  const hasAccess = useMemo(() => userData.type === 'admin', [userData.type])

  return {
    newPhone,
    validationError,
    handleChange,
    handlePhoneSubmit,
    hasAccess,
  }
}
