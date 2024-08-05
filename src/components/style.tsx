import { styled, TextField } from '@mui/material';

export const FormBox = styled('div')`
  box-shadow: ${({ theme }) => theme.palette.shadow.shadow};
  border-radius: 4px;
  max-width: max-content;
  margin: 16px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const GridContainer = styled('div')`
  display: grid;
  gap: 16px;
  align-items: flex-start;
  margin: 16px;
`;

export const FlexBox = styled('div')`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
`;

export const InputBox = styled(TextField)`
  color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 4px;

  &:hover {
    border-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const FlexCheckBox = styled('div')`
  display: flex;
  gap: 6px;
  justify-content: flex-start;
`;
