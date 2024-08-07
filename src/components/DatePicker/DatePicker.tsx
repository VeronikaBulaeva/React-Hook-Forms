import { InputType } from '@/components/types.ts';
import { FC } from 'react';
import { FormControl, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';

const DatePickerForm: FC<InputType> = ({ disabled, name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <DatePicker
            {...field}
            name={name}
            value={field?.value ?? null}
            label={label}
            disabled={disabled}
            sx={{ minWidth: { xs: 'none', md: 242 } }}
            format="DD.MM.YYYY"
            slotProps={{
              textField: {
                required,
                placeholder: 'дд.мм.гггг',
                InputLabelProps: { shrink: true },
                error: Boolean(error),
              },
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

export default DatePickerForm;
