import { Button } from '@mui/material'
import classNames from 'classnames'
import './phoneGridItem.css'

export const PhoneGridItem = ({ phone, handleClick }) => {
  if (!phone) return null
  const buttonText = () => {
    if (phone.borrowed) return 'Steal your Precious back'
    if (!phone.borrowed) return 'Take the Precious'
  }
  const borrowedText = () => {
    if (phone.borrowed) {
      const borrowedDate = new Date(phone.borrowed.date).toLocaleDateString()
      return phone.borrowed.user.name + ' took it on ' + borrowedDate
    }
    return 'I have my precious on so im invisible'
  }

  return (
    <div className="border">
      <div className="phone">
        <img className="phoneImage" src={phone.image} alt="cant be displayed" />
        <h2>{phone.model}</h2>
        <p>{phone.vendor}</p>
        <h3>
          {phone.os} / {phone.osVersion}
        </h3>
        <p className={classNames({ hidden: !phone.borrowed })}>{borrowedText()}</p>
        <Button variant="contained" onClick={handleClick(phone)}>
          {buttonText()}
        </Button>
      </div>
    </div>
  )
}
