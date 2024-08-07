import { FC } from 'react';
import { Autocomplete, FormControl, FormHelperText, TextField } from '@mui/material';
import { InputType } from '@/components/types.ts';
import { Controller, useFormContext } from 'react-hook-form';

const SkillSelect: FC<InputType> = ({ name, placeholder, label, required, disabled }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
        <FormControl>
          <Autocomplete
            multiple
            limitTags={3}
            options={Skills}
            sx={{ maxWidth: '500px' }}
            filterSelectedOptions
            disabled={disabled}
            autoFocus={false}
            onChange={(_event: unknown, item: string[]) => {
              onChange(item);
            }}
            value={value as string[]}
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

export const Skills = ['react-hook-form', 'React', 'node.js', 'TypeScript', 'Redux', 'RTK', 'Python', 'Git', 'C++'];
export default SkillSelect;
