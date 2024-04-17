import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const CameraIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M18.2905 4.85984C19.4688 5.32884 19.8293 6.96218 20.3111 7.48718C20.793 8.01218 21.4825 8.19068 21.864 8.19068C23.8916 8.19068 25.5355 9.83451 25.5355 11.861V18.6218C25.5355 21.3402 23.3305 23.5452 20.6121 23.5452H8.87548C6.15598 23.5452 3.95215 21.3402 3.95215 18.6218V11.861C3.95215 9.83451 5.59598 8.19068 7.62365 8.19068C8.00398 8.19068 8.69348 8.01218 9.17648 7.48718C9.65832 6.96218 10.0176 5.32884 11.196 4.85984C12.3755 4.39084 17.1121 4.39084 18.2905 4.85984Z" stroke={theme.color} strokeWidth="1.34538" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M21.1552 11.2167H21.1657" stroke={theme.color} strokeWidth="1.34538" strokeLinecap="round" strokeLinejoin="round"/>
      <Path fillRule="evenodd" clipRule="evenodd" d="M18.4518 15.4493C18.4518 13.4007 16.7917 11.7405 14.743 11.7405C12.6943 11.7405 11.0342 13.4007 11.0342 15.4493C11.0342 17.498 12.6943 19.1582 14.743 19.1582C16.7917 19.1582 18.4518 17.498 18.4518 15.4493Z" stroke={theme.color} strokeWidth="1.34538" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default CameraIcon;
