import { Checkbox, FormControl, FormHelperText, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { InputType } from '@/components/types.ts';

const CheckBoxField: FC<InputType> = ({ name, required, disabled }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <Typography variant="h1" color="text.primary">
            <Checkbox
              {...field}
              value={field.value}
              checked={field.value}
              onChange={(e) => {
                field.onChange(e.target.checked);
              }}
              name={name}
              required={required}
              disabled={disabled}
            />
            За любой движ
          </Typography>
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

export default CheckBoxField;
