import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Svg, Circle, Path } from "react-native-svg";

const BackButton = ({ width, height , color}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Svg width="40" height="40" viewBox="0 0 40 40" fill={color ? color :"white"}>
        <Circle cx="20" cy="20" r="19.5" stroke="#888888" />
        <Path
          d="M22.7499 13.5833C22.6293 13.5826 22.5097 13.6057 22.398 13.6513C22.2863 13.697 22.1847 13.7642 22.0991 13.8491L16.5991 19.3491C16.4283 19.5209 16.3325 19.7532 16.3325 19.9954C16.3325 20.2376 16.4283 20.4699 16.5991 20.6416L22.0991 26.1416C22.2744 26.2918 22.5 26.3703 22.7307 26.3614C22.9614 26.3525 23.1803 26.2568 23.3435 26.0936C23.5068 25.9303 23.6024 25.7115 23.6113 25.4808C23.6202 25.2501 23.5418 25.0245 23.3916 24.8491L18.5424 20L23.3916 15.1508C23.5203 15.0231 23.6083 14.8602 23.6444 14.6825C23.6805 14.5049 23.6631 14.3205 23.5944 14.1527C23.5257 13.9849 23.4088 13.8413 23.2585 13.7399C23.1082 13.6386 22.9312 13.5841 22.7499 13.5833Z"
          fill="black"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default BackButton;
