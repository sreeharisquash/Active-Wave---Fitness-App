import React, { useContext } from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const ReelsIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
      <Path d="M9.08594 17.3784L12.5779 12.8398L16.5611 15.9688L19.9784 11.5584" stroke={theme.color} strokeWidth="1.34538" strokeLinecap="round" strokeLinejoin="round"/>
      <Ellipse cx="23.9613" cy="5.03359" rx="2.24256" ry="2.24256" stroke={theme.color} strokeWidth="1.34538" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M18.0449 3.77349H9.56586C6.05251 3.77349 3.87402 6.26167 3.87402 9.77502V19.2045C3.87402 22.7178 6.0098 25.1953 9.56586 25.1953H19.604C23.1173 25.1953 25.2958 22.7178 25.2958 19.2045V10.9924" stroke={theme.color} strokeWidth="1.34538" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default ReelsIcon;
