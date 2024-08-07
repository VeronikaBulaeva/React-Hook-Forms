import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel: FC<PropsWithChildren<TabPanelProps>> = ({ children, index, value, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabPanel;
