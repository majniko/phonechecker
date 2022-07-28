import { TextField, Button } from '@mui/material'
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { useEffect } from 'react'

export const Login = () => {
  const { loginDetails, userData, validationError, handleLoginDetailsChange, handleLoginSubmit } = useLogin()
  const navigate = useNavigate()

  useEffect(() => {
    if (userData.token !== '') navigate('/phone-list')
  }, [userData.token, navigate])

  return (
    <div className="loginBorder">
      <div className="login">
        <TextField
          required
          id="username"
          variant="outlined"
          label="Username"
          value={loginDetails.login}
          onChange={handleLoginDetailsChange('login')}
          error={validationError.login}
          helperText={validationError.login ? 'Prosím vyplňte email ve správném tvaru.' : ' '}
        />
        <TextField
          required
          id="password"
          variant="outlined"
          label="Password"
          value={loginDetails.password}
          type="password"
          onChange={handleLoginDetailsChange('password')}
          error={validationError.password}
          helperText={validationError.password ? 'Heslo musí být dlouhé alepsoň sedm znaků.' : ' '}
        />
        <Button variant="contained" onClick={handleLoginSubmit}>
          Login
        </Button>
      </div>
    </div>
  )
}
