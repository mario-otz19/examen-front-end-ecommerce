import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Progress = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
      <CircularProgress size={ 100 } />
    </Box>
  );
}

export default Progress;