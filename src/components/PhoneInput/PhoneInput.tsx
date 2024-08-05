import { FC } from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { InputType } from '@/components/FormInputs/TextInput';
import { formatPhoneNumber } from '@/components/PhoneInput/PhoneMask';

const PhoneInput: FC<InputType> = ({ control, name, label, required, placeholder, disabled }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <TextField
            {...field}
            name={name}
            label={label}
            type="text"
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            error={Boolean(error)}
            value={formatPhoneNumber(String(field.value))}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormHelperText
            sx={{
              color: 'error.main',
            }}
          >
            {error?.message ?? ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default PhoneInput;
