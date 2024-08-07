import { FC } from 'react';
import ProjectsForm from '@/components/Forms/ProjectsForm.tsx';
import { FormBox } from '@/components/style.tsx';
import AddIcon from '@mui/icons-material/Add';
import { Button, styled } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormFields } from '@/components/schemas/Schemas.ts';

const ProjectFormsTab: FC = () => {
  const methods = useFormContext<FormFields>();

  const { fields, insert, remove } = useFieldArray({
    control: methods.control,
    name: 'projects',
  });

  const addProject = () => {
    insert(fields.length, {
      projectName: '',
      skills: [],
      role: '',
      beginDate: undefined,
      projectId: fields.length + 1,
    });
  };

  const deleteProject = (index: number) => {
    remove(index);
  };

  return (
    <ProjectBox>
      {fields.map((field, index) => (
        <ProjectsForm key={field.id} id={field.projectId} index={index} onPressDelete={deleteProject} />
      ))}
      <AddButton>
        <Button onClick={addProject} fullWidth>
          <AddIcon sx={{ fontSize: 34 }} />
        </Button>
      </AddButton>
    </ProjectBox>
  );
};

const ProjectBox = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AddButton = styled(FormBox)`
  display: flex;
  justify-content: center;
  max-width: 100%;
  min-height: 400px;
  height: auto;
  text-align: center;
`;

export default ProjectFormsTab;
