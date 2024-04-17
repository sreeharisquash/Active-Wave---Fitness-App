import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import Header from "../../components/header/Header";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const Verification = () => {
  const navigation = useNavigation();

  const handleResetPass = () => {
    navigation.navigate("Resetpassword");
  };

  const theme = useContext(themeContext);

  return (
    <View style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Header title="Verification" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/png/verification.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          left={<TextInput.Icon icon="email" />}
          underlineColor="transparent"
          theme={{
            colors: {
              primary: "transparent",
              underlineColor: "transparent",
            },
          }}
        />
        <CommonButton label="Send" onPress={handleResetPass} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingTop: "10%",
  },
  image: {
    width: "50%",
    height: "50%",
    aspectRatio: 1,
  },
  input: {
    width: "100%",
    borderWidth: 0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "grey",
    marginBottom: "5%",
    backgroundColor: "white",
  },
});

export default Verification;
