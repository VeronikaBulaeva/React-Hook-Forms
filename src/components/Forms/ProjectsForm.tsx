import { FC, useState } from 'react';
import { Box, Button, FormControl, Typography } from '@mui/material';
import SkillSelect from '@/components/SkillSelect/SkillSelect.tsx';
import { FlexBox, FormBox, GridContainer } from '@/components/style.tsx';
import TextInput from '@/components/FormInputs/TextInput.tsx';
import AutocompleteRole from '@/components/AutocompleteRole/AutocompleteRole.tsx';
import DatePickerForm from '@/components/DatePicker/DatePicker.tsx';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useFormContext } from 'react-hook-form';
import { FormFields } from '@/components/schemas/Schemas.ts';

interface ProjectFormType {
  id: number;
  index: number;
  onPressDelete: (index: number) => void;
}

const ProjectsForm: FC<ProjectFormType> = ({ id, index, onPressDelete }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    trigger,
    formState: { isSubmitted: disabled },
  } = useFormContext<FormFields>();

  const onSubmit = () => {
    trigger([
      `projects.${index}.projectName`,
      `projects.${index}.skills`,
      `projects.${index}.role`,
      `projects.${index}.beginDate`,
      `projects.${index}.endDate`,
    ]);
    setIsDisabled(true);
  };

  return (
    <>
      <FormBox>
        <FormControl fullWidth>
          <GridContainer>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h1" color="text.primary">
                {`Проект №${id}`}
              </Typography>
              <Button sx={{ justifyContent: 'flex-end' }} onClick={() => onPressDelete(index)}>
                <DeleteForeverOutlinedIcon sx={{ color: 'text.primary' }} />
              </Button>
            </Box>

            <TextInput
              label="Название"
              name={`projects[${index}].projectName`}
              placeholder="Название проекта"
              required={true}
              disabled={isDisabled || disabled}
            />

            <SkillSelect
              label="Навыки"
              name={`projects.${index}.skills`}
              placeholder="Навыки"
              required={true}
              disabled={isDisabled || disabled}
            />

            <AutocompleteRole
              label="Роль на проекте"
              name={`projects.${index}.role`}
              placeholder="Роль"
              required={true}
              disabled={isDisabled || disabled}
            />

            <FlexBox>
              <DatePickerForm
                label="Начало работы"
                name={`projects.${index}.beginDate`}
                required={true}
                disabled={isDisabled || disabled}
              />
              <DatePickerForm
                label="Окончание работы"
                name={`projects.${index}.endDate`}
                required={false}
                disabled={isDisabled || disabled}
              />
            </FlexBox>
            {(isDisabled || disabled) && (
              <Button
                variant="contained"
                sx={{ p: 1, m: 1.5, justifySelf: 'flex-end', maxWidth: 'max-content' }}
                onClick={() => {
                  setIsDisabled(false);
                }}
              >
                <ModeEditOutlineIcon />
              </Button>
            )}
            {isDisabled || disabled || (
              <Button
                onClick={onSubmit}
                color="info"
                variant="contained"
                sx={{ p: 2, m: 1.5, justifySelf: 'flex-end', maxWidth: 'max-content' }}
              >
                <Typography variant="button" color="background.default">
                  Добавить
                </Typography>
              </Button>
            )}
          </GridContainer>
        </FormControl>
      </FormBox>
    </>
  );
};

export default ProjectsForm;
