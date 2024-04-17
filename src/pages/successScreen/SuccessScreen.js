import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import Header from "../../components/header/Header";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const SuccessScreen = () => {
  const navigation = useNavigation();

  const handleProfileSetup = () => {
    navigation.navigate("ProfileSetup");
  };

  const theme = useContext(themeContext);

  return (
    <View style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Header title="Password Updated" />
      <View style={styles.contents}>
        <Image
          source={require("../../../assets/png/success.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.underContents}>
        <Text style={[CommonStyles.headingFive ,{color:theme.color}]}>
          Password Updated Successfully
        </Text>
        <Text style={[CommonStyles.paragraph, { textAlign: "center" , color:theme.color}]}>
          Your password has been updated.
        </Text>
        <CommonButton label="Sign in" onPress={handleProfileSetup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "69%",
    height: "60%",
    alignSelf: "center",
  },
  contents: {
    paddingTop: "20%",
  },
  underContents: {
    marginTop: -100,
    gap: 30,
  },
});

export default SuccessScreen;
