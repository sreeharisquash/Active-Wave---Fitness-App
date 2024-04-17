import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const HomeIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width={28} height={29} viewBox="0 0 28 29" fill="none">
      <Path
        d="M10.6837 25.1666V21.5888C10.6837 20.6787 11.4256 19.9393 12.3448 19.9332H15.7119C16.6355 19.9332 17.3842 20.6744 17.3842 21.5888V25.1777C17.384 25.9504 18.007 26.5819 18.7872 26.6H21.0319C23.2696 26.6 25.0837 24.8041 25.0837 22.5888V12.4108C25.0717 11.5393 24.6584 10.7209 23.9613 10.1885L16.2843 4.06619C14.9394 3.00016 13.0276 3.00016 11.6826 4.06619L4.03935 10.1997C3.33963 10.7299 2.92561 11.5496 2.91699 12.4219V22.5888C2.91699 24.8041 4.73101 26.6 6.96872 26.6H9.21345C10.0131 26.6 10.6613 25.9583 10.6613 25.1666V25.1666"
        stroke={theme.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
