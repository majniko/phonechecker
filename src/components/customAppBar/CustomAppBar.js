import { Box } from '@mui/system'
import EtneteraLogo from '../../img/etnetera.png'
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './customAppBar.css'
import { useLogin } from '../../hooks/useLogin'

export const CustomAppBar = ({ userData }) => {
  const { handleLogout } = useLogin()
  const navigate = useNavigate()

  const handleClick = url => () => {
    navigate(url)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo" src={EtneteraLogo} alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneChecker
          </Typography>
          {userData.token !== '' && (
            <>
              <Typography>{userData.login}</Typography>
              <div className="space" />
              <ButtonGroup>
                <Button color="inherit" onClick={handleLogout}>
                  logout
                </Button>
                {userData.type === 'admin' && (
                  <>
                    <Button color="inherit" onClick={handleClick('/phone-list')}>
                      Phone list
                    </Button>
                    <Button color="inherit" onClick={handleClick('/add-phone')}>
                      Add phone
                    </Button>
                  </>
                )}
              </ButtonGroup>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
