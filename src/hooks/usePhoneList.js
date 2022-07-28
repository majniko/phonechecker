import { useContext, useMemo } from 'react'
import { EMPTY } from '../constants/constants'
import { ContextStore } from '../store/Context'
import { usePostBorrowed } from './api/usePostBorrowed'

export const usePhoneList = () => {
  const {
    phones,
    userData,
    filters: { os, vendor },
  } = useContext(ContextStore)
  const PostBorrowed = usePostBorrowed()

  const handleBorrowSubmit = phone => () => PostBorrowed(phone)

  const filteredPhones = useMemo(
    () =>
      phones.filter(phone => {
        let isPhoneAvailable = true

        if (os !== EMPTY) isPhoneAvailable = isPhoneAvailable && phone.os === os
        if (vendor !== EMPTY) isPhoneAvailable = isPhoneAvailable && phone.vendor?.toUpperCase() === vendor

        return isPhoneAvailable
      }),

    [os, vendor, phones]
  )

  const hasAccess = useMemo(() => userData.type === 'user' || userData.type === 'admin', [userData.type])

  return { filteredPhones, handleBorrowSubmit, hasAccess }
}
