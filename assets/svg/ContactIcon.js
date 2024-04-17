import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const ContactIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M17.9028 8.85114L13.4596 12.4642C12.6201 13.1302 11.4389 13.1302 10.5994 12.4642L6.11865 8.85114" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path fillRule="evenodd" clipRule="evenodd" d="M16.9094 21C19.9507 21.0084 22.0005 18.5096 22.0005 15.4384V8.57001C22.0005 5.49883 19.9507 3 16.9094 3H7.09163C4.05028 3 2.00049 5.49883 2.00049 8.57001V15.4384C2.00049 18.5096 4.05028 21.0084 7.09163 21H16.9094Z" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default ContactIcon;
