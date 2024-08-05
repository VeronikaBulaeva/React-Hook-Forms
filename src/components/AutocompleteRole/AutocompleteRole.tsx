import { FC } from 'react';
import { Autocomplete, FormControl, FormHelperText, TextField } from '@mui/material';
import { InputType } from '@/components/FormInputs/TextInput';
import { Controller } from 'react-hook-form';

const AutocompleteRole: FC<InputType> = ({ control, name, placeholder, label, required, disabled }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
        <FormControl>
          <Autocomplete
            disablePortal
            id="rolesLabel"
            options={Roles}
            sx={{ maxWidth: '500px' }}
            disabled={disabled}
            onChange={(_event: unknown, item: string | null) => {
              onChange(item);
            }}
            value={value as string}
            renderInput={(params) => (
              <TextField
                {...params}
                onBlur={onBlur}
                inputRef={ref}
                name={name}
                label={label}
                required={required}
                disabled={disabled}
                error={Boolean(error)}
                placeholder={placeholder}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
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

export const Roles = ['Разработчик', 'Тестировщик', 'Аналитик', 'Менеджер проектов'] as const;

export default AutocompleteRole;
