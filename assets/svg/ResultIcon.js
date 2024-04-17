import React, { useContext } from "react";
import Svg, { Path } from "react-native-svg";
import themeContext from "../../src/components/theme/themeContext";

const ResultIcon = () => {
  const theme = useContext(themeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.7171 16.2234H8.49707"
        stroke={theme.color}
        strokeWidth="1.34476"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.7171 12.0369H8.49707"
        stroke={theme.color}
        strokeWidth="1.34476"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2521 7.86011H8.49707"
        stroke={theme.color}
        strokeWidth="1.34476"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.91 2.74982C15.91 2.74982 8.23295 2.75382 8.22095 2.75382C5.46095 2.77082 3.75195 4.58682 3.75195 7.35682V16.5528C3.75195 19.3368 5.47395 21.1598 8.25795 21.1598C8.25795 21.1598 15.934 21.1568 15.947 21.1568C18.707 21.1398 20.417 19.3228 20.417 16.5528V7.35682C20.417 4.57282 18.694 2.74982 15.91 2.74982Z"
        stroke={theme.color}
        strokeWidth="1.34476"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ResultIcon;
