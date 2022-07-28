import { Button, MenuItem, TextField } from '@mui/material'
import { osList } from '../../constants/constants'
import { useAddPhone } from '../../hooks/useAddPhone'
import './addPhone.css'

export const AddPhone = () => {
  const { newPhone, validationError, handlePhoneSubmit, handleChange, hasAccess } = useAddPhone()

  if (!hasAccess) return <p>Na zobrazení této stránky nemáte oprávnění.</p>

  return (
    <div className="addPhoneBorder">
      <div className="addPhone">
        <TextField
          required
          id="code"
          label="Kódové označení (identifikátor)"
          value={newPhone.code}
          onChange={handleChange('code')}
          error={validationError.code}
          helperText={validationError.code || ' '}
        />
        <TextField
          required
          id="vendor"
          label="Výrobce"
          value={newPhone.vendor}
          onChange={handleChange('vendor')}
          error={validationError.vendor}
          helperText={validationError.vendor || ' '}
        />
        <TextField
          required
          id="model"
          label="Model"
          value={newPhone.model}
          onChange={handleChange('model')}
          error={validationError.model}
          helperText={validationError.model || ' '}
        />
        <TextField
          select
          id="os"
          label="Operační systém"
          value={newPhone.os}
          onChange={handleChange('os')}
          error={validationError.os}
          helperText={validationError.os || ' '}
        >
          {osList.map(system => (
            <MenuItem key={system} value={system}>
              {system}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="osVersion"
          label="Verze operačního systému"
          value={newPhone.osVersion}
          onChange={handleChange('osVersion')}
          helperText={' '}
        />
        <TextField
          id="image"
          label="Obrázek (URL)"
          value={newPhone.image}
          onChange={handleChange('image')}
          helperText={' '}
        />
        <Button variant="contained" onClick={handlePhoneSubmit}>
          Přidat zařízení
        </Button>
      </div>
    </div>
  )
}
