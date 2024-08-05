import { FC } from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { FormFields } from '@/components/ReactForm';

export interface InputType {
  label: string;
  name: keyof FormFields;
  placeholder: string;
  control: Control<FormFields>;
  required: boolean;
  disabled: boolean;
}

const TextInput: FC<InputType> = ({ control, name, placeholder, label, required, disabled }) => {
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
