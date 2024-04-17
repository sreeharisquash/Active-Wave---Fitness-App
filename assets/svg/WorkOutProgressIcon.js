import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const WorkOutProgressIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M7.3717 10.2017V17.0619" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M12.0382 6.91913V17.0619" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M16.629 13.8268V17.0619" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path fillRule="evenodd" clipRule="evenodd" d="M16.6862 2H7.31477C4.04811 2 2.00049 4.31208 2.00049 7.58516V16.4148C2.00049 19.6879 4.03858 22 7.31477 22H16.6862C19.9624 22 22.0005 19.6879 22.0005 16.4148V7.58516C22.0005 4.31208 19.9624 2 16.6862 2Z" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default WorkOutProgressIcon;
