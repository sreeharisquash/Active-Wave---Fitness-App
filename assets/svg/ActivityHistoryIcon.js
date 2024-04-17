import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import themeContext from '../../src/components/theme/themeContext';

const ActivityHistoryIcon = () => {
    const theme = useContext(themeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M17.2772 13.8891C17.9519 13.8891 18.5183 14.446 18.4151 15.1123C17.8098 19.0323 14.4541 21.9428 10.4067 21.9428C5.92879 21.9428 2.29932 18.3134 2.29932 13.8365C2.29932 10.1481 5.10142 6.7123 8.25616 5.93546C8.93405 5.76809 9.62879 6.24493 9.62879 6.94283C9.62879 11.6712 9.78774 12.8944 10.6856 13.5597C11.5835 14.2249 12.6393 13.8891 17.2772 13.8891Z" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
      <Path fillRule="evenodd" clipRule="evenodd" d="M21.6921 9.95157C21.7458 6.91368 18.0142 2.01684 13.4669 2.10105C13.1132 2.10736 12.83 2.4021 12.8142 2.75473C12.6995 5.25263 12.8542 8.48947 12.9406 9.95684C12.9669 10.4137 13.3258 10.7726 13.7816 10.7989C15.29 10.8853 18.6448 11.0032 21.1069 10.6305C21.4416 10.58 21.6869 10.2895 21.6921 9.95157Z" stroke={theme.color} strokeWidth="1.34476" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default ActivityHistoryIcon;
