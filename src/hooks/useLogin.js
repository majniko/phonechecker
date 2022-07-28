import { useContext, useState } from 'react'
import { ContextStore, initialStore } from '../store/Context'
import { validateEmail } from '../utils/validation'
import { usePostLogin } from './api/usePostLogin'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialErrorState = {}

export const useLogin = () => {
  const { userData, setState } = useContext(ContextStore)
  const [validationError, setValidationError] = useState(initialErrorState)
  const [loginDetails, setLoginDetails] = useState({
    login: '',
    password: '',
  })
  const postLogin = usePostLogin()
  const navigate = useNavigate()

  const handleLoginDetailsChange = fieldName => event => {
    setLoginDetails({ ...loginDetails, [fieldName]: event.target.value })
  }

  const handleLoginSubmit = () => {
    const error = { ...initialErrorState }

    if (!validateEmail(loginDetails.login)) error.login = true
    if (loginDetails.password.length < 7) error.password = true

    setValidationError(error)
    if (Object.keys(error).length !== 0) return
    postLogin({ loginDetails })
  }

  const handleLogout = () => {
    setState(initialStore)
    axios.defaults.headers.common['Auth-Token'] = ''
    navigate('/login')
  }

  return {
    userData,
    loginDetails,
    validationError,
    handleLoginDetailsChange,
    handleLoginSubmit,
    handleLogout,
  }
}
