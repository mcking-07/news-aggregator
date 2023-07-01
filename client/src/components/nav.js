import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Devices, LocalHospital, Movie, Public, SettingsApplications, SportsBasketball, Work } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 9999
  },
});

const Navbar = ({ onCategoryChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('general');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onCategoryChange(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="General" value="general" icon={<Public />} />
      <BottomNavigationAction label="Business" value="business" icon={<Work />} />
      <BottomNavigationAction label="Entertainment" value="entertainment" icon={<Movie />} />
      <BottomNavigationAction label="Health" value="health" icon={<LocalHospital />} />
      <BottomNavigationAction label="Science" value="science" icon={<SettingsApplications />} />
      <BottomNavigationAction label="Sports" value="sports" icon={<SportsBasketball />} />
      <BottomNavigationAction label="Technology" value="technology" icon={<Devices />} />
    </BottomNavigation>
  );
};

export default Navbar;
