import { FC, useState } from 'react';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import SkillSelect from '@/components/SkillSelect/SkillSelect';
import { FlexBox, FormBox, GridContainer, InputBox } from '@/components/style';
import TextInput from '@/components/FormInputs/TextInput';
import { UseFormType } from '@/components/UserForm';
import AutocompleteRole from '@/components/AutocompleteRole/AutocompleteRole';

const ProjectsForm: FC<UseFormType> = ({ control, disabled }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <FormBox>
      <FormControl>
        <GridContainer>
          <Typography variant="h1" color="text.primary">
            Проект №1
          </Typography>

          <TextInput
            label="Название"
            name="projectName"
            placeholder="Название проекта"
            control={control}
            required={true}
            disabled={disabled || isDisabled}
          />

          <SkillSelect
            label="Навыки"
            name="skills"
            placeholder="Навыки"
            control={control}
            required={true}
            disabled={disabled || isDisabled}
          />

          <AutocompleteRole
            label="Роль на проекте"
            name="role"
            placeholder="Роль"
            control={control}
            required={true}
            disabled={disabled || isDisabled}
          />

          <FlexBox>
            <InputBox
              name="date"
              label="Начало работы"
              type="date"
              required
              placeholder="дд.мм.гггг"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ minWidth: { xs: 'none', md: 242 } }}
            />
            <TextField
              name="date"
              label="Окончание работы"
              type="date"
              placeholder="дд.мм.гггг"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ minWidth: { xs: 'none', md: 242 } }}
            />
          </FlexBox>
          <Button
            onClick={() => {
              setIsDisabled(true);
            }}
            color="info"
            variant="contained"
            type="submit"
            sx={{ p: 2, m: 1.5, justifySelf: 'flex-end', maxWidth: 'max-content' }}
          >
            <Typography variant="button" color="background.default">
              Добавить
            </Typography>
          </Button>
        </GridContainer>
      </FormControl>
    </FormBox>
  );
};

export default ProjectsForm;
