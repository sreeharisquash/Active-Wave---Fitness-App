import React, { useContext } from "react";
import themeContext from "../../src/components/theme/themeContext";
import { Path, Svg } from "react-native-svg";

const ProfileIcon = () => {
  const theme = useContext(themeContext);

  return (
    <Svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2376 18.0372C9.7254 18.0372 5.87207 18.7194 5.87207 21.4517C5.87207 24.1839 9.70096 24.8906 14.2376 24.8906C18.7498 24.8906 22.6021 24.2072 22.6021 21.4761C22.6021 18.745 18.7743 18.0372 14.2376 18.0372Z"
        stroke={theme.color}
        strokeWidth="1.34538"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2382 14.1402C17.1993 14.1402 19.5993 11.7391 19.5993 8.778C19.5993 5.81689 17.1993 3.41689 14.2382 3.41689C11.2771 3.41689 8.87601 5.81689 8.87601 8.778C8.86601 11.7291 11.2505 14.1302 14.2005 14.1402H14.2382Z"
        stroke={theme.color}
        strokeWidth="1.34538"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
