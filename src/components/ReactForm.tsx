import { Box, Button, FormControl, styled, Tab, Tabs, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, SyntheticEvent, useState } from 'react';
import UserForm from '@/components/UserForm';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ProjectsForm from '@/components/ProjectsForm';
import TabPanel from '@/components/TabPanel/TabPanel';

const textSchema = z
  .string()
  .min(2, 'Значение не должно быть короче 2-х символов')
  .max(20, 'Значение не должно быть длиннее 20 символов')
  .regex(/^[-а-яА-ЯёЁ\s]+$/, 'Значение должно содержать только буквы');

const formSchema = z.object({
  surname: textSchema,
  name: textSchema,
  lastName: textSchema.or(z.literal('')),
  phone: z.string().min(12, 'Проверьте корректность номера телефона'),
  email: z.string().email('Проверьте корректность email-адреса').or(z.literal('')),
  checkbox: z.literal(true, {
    errorMap: () => ({ message: 'Примите условия движа' }),
  }),
  projectName: textSchema,
  skills: z.string().array().nonempty({
    message: 'Выберите хотя бы 1 навык',
  }),
  role: z.string().min(1, 'Выберите свою роль'),
});

export type FormFields = z.infer<typeof formSchema>;

const ReactForm: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState(0);
  const { control, handleSubmit } = useForm<FormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      surname: '',
      name: '',
      lastName: '',
      email: '',
      phone: '',
      projectName: '',
      skills: [],
      role: '',
    },
  });

  const a11yProps = (index: number) => {
    return {
      'id': `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    setIsDisabled(true);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
        <Tab label="Контактная информация" {...a11yProps(0)} />
        <Tab label="Проекты" {...a11yProps(1)} />
      </Tabs>
      <FormSection>
        <FormControl sx={{ display: 'grid' }}>
          <FormBox>
            <TabPanel index={0} value={value}>
              <UserForm control={control} disabled={isDisabled} />
            </TabPanel>
            <TabPanel index={1} value={value}>
              <ProjectsForm control={control} disabled={isDisabled} />
            </TabPanel>
          </FormBox>
          <Box display="flex" justifyContent="flex-end">
            {isDisabled && (
              <Button
                variant="contained"
                sx={{ p: 1, m: 1.5, maxWidth: 'max-content' }}
                onClick={() => {
                  setIsDisabled(false);
                }}
              >
                <ModeEditOutlineIcon />
              </Button>
            )}

            <Button
              onClick={() => {
                setIsDisabled(true);
              }}
              color="info"
              variant="contained"
              type="submit"
              sx={{ p: 2, m: 1.5, maxWidth: 'max-content' }}
            >
              <Typography variant="button" color="background.default">
                Сохранить
              </Typography>
            </Button>
          </Box>
        </FormControl>
      </FormSection>
    </form>
  );
};

const FormSection = styled('section')`
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
`;

const FormBox = styled('div')`
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
`;

export default ReactForm;
