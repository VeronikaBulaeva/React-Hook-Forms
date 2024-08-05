import ReactForm from '@/components/ReactForm';
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <ReactForm />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
