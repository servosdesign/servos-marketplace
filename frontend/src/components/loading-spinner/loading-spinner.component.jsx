import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { SpinnerPositioning } from './loading-spinner.styles';

const LoadingSpinner = () => {
 
  return (
    <SpinnerPositioning>
      <CircularProgress color="inherit" />
    </SpinnerPositioning>
  );
};

export default LoadingSpinner;