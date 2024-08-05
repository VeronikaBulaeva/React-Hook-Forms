import { FC } from 'react';
import { Checkbox, FormControl, FormHelperText, Typography } from '@mui/material';
import { FlexBox, FlexCheckBox, FormBox, GridContainer } from '@/components/style';
import { Control, Controller } from 'react-hook-form';
import { FormFields } from '@/components/ReactForm';
import TextInput from '@/components/FormInputs/TextInput';
import PhoneInput from '@/components/PhoneInput/PhoneInput';

export interface UseFormType {
  control: Control<FormFields>;
  disabled: boolean;
}

const UserForm: FC<UseFormType> = ({ control, disabled }) => {
  return (
    <FormBox>
      <FormControl>
        <GridContainer>
          <Typography variant="h1" color="text.primary">
            Общая информация
          </Typography>
          <FlexBox>
            <TextInput
              required={true}
              label={'Фамилия'}
              name={'surname'}
              placeholder={'Иванов'}
              control={control}
              disabled={disabled}
            />
            <TextInput
              required={true}
              label={'Имя'}
              name={'name'}
              placeholder={'Иван'}
              control={control}
              disabled={disabled}
            />
            <TextInput
              required={false}
              label={'Отчество'}
              name={'lastName'}
              placeholder={'Иванович'}
              control={control}
              disabled={disabled}
            />
          </FlexBox>
          <Typography variant="h1" color="text.primary">
            Контакты
          </Typography>
          <FlexBox>
            <PhoneInput
              label={'Телефон'}
              name={'phone'}
              placeholder={'+7 (999) 999 99 99'}
              control={control}
              required={true}
              disabled={disabled}
            />

            <TextInput
              required={false}
              label={'E-mail'}
              name={'email'}
              placeholder={'E-mail'}
              control={control}
              disabled={disabled}
            />
          </FlexBox>
          <Typography variant="h1" color="text.primary">
            Другоe
          </Typography>
          <FlexCheckBox>
            <Controller
              name="checkbox"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormControl>
                  <Typography variant="h1" color="text.primary">
                    <Checkbox {...field} name="checkbox" required disabled={disabled} />
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
          </FlexCheckBox>
        </GridContainer>
      </FormControl>
    </FormBox>
  );
};

export default UserForm;
