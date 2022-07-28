import { useGetPhones } from '../hooks/api/useGetPhones'
import { Grid } from '@mui/material'
import { PhoneGridItem } from '../components/phoneGridItem/PhoneGridItem'
import { usePhoneList } from '../hooks/usePhoneList'
import { FilterBar } from '../components/filterbar/FilterBar'

export const PhoneList = () => {
  const { filteredPhones, handleBorrowSubmit, hasAccess } = usePhoneList()
  useGetPhones()

  if (!hasAccess) return <p>Na zobrazení této stránky nemáte oprávnění.</p>

  return (
    <>
      <FilterBar />
      <div className="phoneList">
        <Grid container rowSpacing={2} columnSpacing={2}>
          {filteredPhones.map(phone => {
            return (
              <Grid item key={`key_${phone.id}`} xs={3}>
                <PhoneGridItem phone={phone} handleClick={handleBorrowSubmit} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}
