import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const MoreIcon = () => {

    const theme = useContext(themeContext);

  return (
    <Svg width="17" height="17" viewBox="0 0 17 17">
      <Path
        d="M8.34609 9.3479C8.70712 9.3479 8.99979 9.055 8.99979 8.6937C8.99979 8.33239 8.70712 8.03949 8.34609 8.03949C7.98506 8.03949 7.69238 8.33239 7.69238 8.6937C7.69238 9.055 7.98506 9.3479 8.34609 9.3479Z"
        fill="#474747"
        stroke={theme.color}
        strokeWidth="2.24127"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.34609 4.76843C8.70712 4.76843 8.99979 4.47554 8.99979 4.11423C8.99979 3.75292 8.70712 3.46002 8.34609 3.46002C7.98506 3.46002 7.69238 3.75292 7.69238 4.11423C7.69238 4.47554 7.98506 4.76843 8.34609 4.76843Z"
        fill="#474747"
        stroke={theme.color}
        strokeWidth="2.24127"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.34609 13.9273C8.70712 13.9273 8.99979 13.6344 8.99979 13.2731C8.99979 12.9118 8.70712 12.6189 8.34609 12.6189C7.98506 12.6189 7.69238 12.9118 7.69238 13.2731C7.69238 13.6344 7.98506 13.9273 8.34609 13.9273Z"
        fill="#474747"
        stroke={theme.color}
        strokeWidth="2.24127"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MoreIcon;
