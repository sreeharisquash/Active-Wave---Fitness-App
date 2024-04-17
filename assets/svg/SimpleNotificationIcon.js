import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const SimpleNotificationIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M14.3894 20.8572C13.0252 22.372 10.8972 22.3899 9.52002 20.8572" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default SimpleNotificationIcon;
