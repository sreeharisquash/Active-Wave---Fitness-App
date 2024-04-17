import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const GreaterThanIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path d="M7.0835 4.16671L12.9168 10L7.0835 15.8334" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default GreaterThanIcon;
