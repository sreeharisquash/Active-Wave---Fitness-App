import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const PrivacyIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M11.9851 21.606C11.9851 21.606 19.6571 19.283 19.6571 12.879C19.6571 6.474 19.9351 5.974 19.3201 5.358C18.7041 4.742 12.9911 2.75 11.9851 2.75C10.9791 2.75 5.26605 4.742 4.65105 5.358C4.03505 5.974 4.31305 6.474 4.31305 12.879C4.31305 19.283 11.9851 21.606 11.9851 21.606Z" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M9.38623 11.8746L11.2782 13.7696L15.1762 9.86957" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default PrivacyIcon;
