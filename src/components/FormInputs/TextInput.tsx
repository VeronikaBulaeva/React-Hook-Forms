import { FC } from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { InputType } from '@/components/types.ts';

const TextInput: FC<InputType> = ({ name, placeholder, label, required, disabled }) => {
  const { control } = useFormContext();

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
            disabled={disabled}
            placeholder={placeholder}
            error={Boolean(error)}
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

export default TextInput;
