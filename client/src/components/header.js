import React from 'react';
import { Typography } from '@material-ui/core';

const Header = ({ title }) => {
  return (
    <header style={{ marginBottom: 20 }}>
      <Typography align='center' variant="h3" component="h1" style={{ fontFamily: 'Open Sans', color: '#333' }}>
        {title}
      </Typography>
    </header>
  );
};

export default Header;
