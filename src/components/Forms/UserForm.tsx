import { FC } from 'react';
import { FormControl, Typography } from '@mui/material';
import { FlexBox, FlexCheckBox, FormBox, GridContainer } from '@/components/style.tsx';
import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/FormInputs/TextInput.tsx';
import PhoneInput from '@/components/PhoneInput/PhoneInput.tsx';
import CheckBoxField from '@/components/CheckBox/CheckBox.tsx';

const UserForm: FC = () => {
  const {
    formState: { isSubmitted: disabled },
  } = useFormContext();

  return (
    <>
      <FormBox>
        <FormControl fullWidth>
          <GridContainer>
            <Typography variant="h1" color="text.primary">
              Общая информация
            </Typography>
            <FlexBox>
              <TextInput required={true} label="Фамилия" name="surname" placeholder="Иванов" disabled={disabled} />
              <TextInput required={true} label="Имя" name="name" placeholder="Иван" disabled={disabled} />
              <TextInput required={false} label="Отчество" name="lastName" placeholder="Иванович" disabled={disabled} />
            </FlexBox>
            <Typography variant="h1" color="text.primary">
              Контакты
            </Typography>
            <FlexBox>
              <PhoneInput
                label="Телефон"
                name="phone"
                placeholder="+7 (999) 999 99 99"
                required={true}
                disabled={disabled}
              />

              <TextInput required={false} label="E-mail" name="email" placeholder="E-mail" disabled={disabled} />
            </FlexBox>
            <Typography variant="h1" color="text.primary">
              Другоe
            </Typography>
            <FlexCheckBox>
              <CheckBoxField disabled={disabled} required={true} name="checkbox" />
            </FlexCheckBox>
          </GridContainer>
        </FormControl>
      </FormBox>
    </>
  );
};

export default UserForm;
