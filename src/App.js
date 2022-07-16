import { useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContext from './context/theme/ThemeContext';
import StoreProvider from './context/store/StoreState';
import AuthProvider from './context/auth/AuthState';
import Navigation from './routes/Navigation';

function App() {
  console.log(`Última actualización: ${ (JSON.stringify(new Date().toLocaleString())).replace(/\"/g, '') }`);
  const { theme } = useContext(ThemeContext);  
  
  const selectedTheme = createTheme({
    palette: {
      mode: (theme) ? 'light' : 'dark'
    }
  });

  return (
      <AuthProvider>
        <ThemeProvider theme={ selectedTheme }>
          <StoreProvider>
            <Navigation />
          </StoreProvider>
        </ThemeProvider>
      </AuthProvider>
  );
}

export default App;
