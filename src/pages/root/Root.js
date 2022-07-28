import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar'
import { CustomAppBar } from '../../components/customAppBar/CustomAppBar'
import { ContextStore } from '../../store/Context'
import './root.css'

export const Root = () => {
  const { userData } = useContext(ContextStore)

  const navigate = useNavigate()

  useEffect(() => {
    if (userData.token === '') navigate('/login')
  }, [userData.token, navigate])

  return (
    <div className="root">
      <CustomAppBar userData={userData} />
      <div className="container">
        <Outlet />
      </div>
      <AlertSnackbar />
    </div>
  )
}
