import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { GenderImages } from "../../constants/Constants";
import SelectedIcon from "../../../assets/svg/selectIconBig.svg";
import NonSelectedIcon from "../../../assets/svg/nonselectIcon.svg";
import themeContext from "../../components/theme/themeContext";

const GenderPage = () => {
  const [selectGender, setSelectedGender] = useState();

  const handleGenderSelect = (item) => {
    setSelectedGender(item);
  };

  const theme = useContext(themeContext);

  return (
    <View style={styles.contents}>
      <Text style={[CommonStyles.headingFive, { color: theme.color }]}>
        Choose gender
      </Text>
      <Text
        style={[
          CommonStyles.paragraph,
          { textAlign: "center", marginTop: "5%", color: theme.color },
        ]}
      >
        To give you a better experience we need to know your gender
      </Text>
      <View style={styles.images}>
        {GenderImages.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleGenderSelect(item)}
            key={item.id}
            style={[
              styles.genderImages,
              { borderColor: selectGender === item ? "#C1063D" : "#888888" },
            ]}
          >
            <View style={styles.selectIcon}>
              {selectGender === item ? <SelectedIcon /> : <NonSelectedIcon />}
            </View>
            <View>{item.image}</View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  progressContain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  images: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    gap: 10,
    justifyContent: "space-between",
    paddingTop: "20%",
  },
  genderImages: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1.5,
    paddingTop: 25,
    paddingBottom: 40,
    borderRadius: 30,
  },
  selectIcon: {
    position: "absolute",
    left: "8%",
    top: "10%",
  },
});

export default GenderPage;
