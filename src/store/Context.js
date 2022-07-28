import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EMPTY } from '../constants/constants'

export const initialStore = {
  userData: { id: '', login: '', name: '', token: '', type: '' },
  alerts: [],
  phones: [{}],
  filters: {
    os: EMPTY,
    vendor: EMPTY,
  },
}

export const ContextStore = React.createContext({})

export const Store = ({ children }) => {
  const [state, setState] = useState(initialStore)

  useEffect(() => {
    if (state.userData.token) axios.defaults.headers.common['Auth-Token'] = state.userData.token
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  }, [state.userData])

  return <ContextStore.Provider value={{ ...state, setState }}>{children}</ContextStore.Provider>
}
