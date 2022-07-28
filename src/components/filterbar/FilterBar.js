import { useContext, useMemo } from 'react'
import { ContextStore } from '../../store/Context'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { EMPTY, osList } from '../../constants/constants'
import './filterBar.css'

export const FilterBar = () => {
  const {
    setState,
    phones,
    filters: { os, vendor },
  } = useContext(ContextStore)

  const vendorList = useMemo(() => [...new Set(phones.map(phone => phone.vendor?.toUpperCase()))], [phones])

  const handleChange = name => event => {
    setState(old => ({ ...old, filters: { ...old.filters, [name]: event.target.value } }))
  }

  return (
    <div className="filterBar">
      <FormControl>
        <InputLabel id="os-label">OS</InputLabel>
        <Select labelId="os-label" label="OS" id="os" value={os} onChange={handleChange('os')}>
          <MenuItem value={EMPTY}>Prázdný</MenuItem>
          {osList.map(system => (
            <MenuItem key={system} value={system}>
              {system}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="vendor-label">Výrobce</InputLabel>
        <Select labelId="vendor-label" label="výrobce" id="vendor" value={vendor} onChange={handleChange('vendor')}>
          <MenuItem value={EMPTY}>Prázdný</MenuItem>
          {vendorList.map(vendor => (
            <MenuItem key={`key_${vendor}`} value={vendor}>
              {vendor}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
