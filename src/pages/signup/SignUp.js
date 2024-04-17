import React, { useContext, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { Checkbox, TextInput } from "react-native-paper";
import { SignUpInput } from "../../constants/Constants";
import CommonButton from "../../components/commonbutton/CommonButton";
import BackButton from "../../../assets/svg/BackButton";
import themeContext from "../../components/theme/themeContext";

const SignUp = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <TouchableOpacity onPress={handleGoBack}>
        <BackButton color="white"/>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={require("../../../assets/logo/logo.png")} />
        <Text style={[CommonStyles.headingFive, { marginTop: "3%" , color:theme.color}]}>
          Sign Up
        </Text>
        <View style={{ width: "100%", paddingTop: "10%" }}>
          {SignUpInput.map((item) => (
            <View key={item.id}>
              <TextInput
                placeholder={item.placeholder}
                style={styles.input}
                left={<TextInput.Icon icon={item.icon} />}
                underlineColor="transparent"
                theme={{
                  colors: {
                    primary: "transparent",
                    underlineColor: "transparent",
                  },
                }}
              secureTextEntry={item.securetext}
              />
            </View>
          ))}
        </View>
        <View style={styles.paracontain}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={handleToggle}
            uncheckedColor="#C1063D"
            color="#C1063D"
            uncheckedIcon="check"
          />
          <Text style={[CommonStyles.policyFont , {color:theme.color}]}>
            By continuing you accept our{" "}
            <Text style={CommonStyles.underlinedText}>Privacy Policy</Text> and{" "}
            <Text style={CommonStyles.underlinedText}>Term of Use</Text>
          </Text>
        </View>
        <CommonButton label="Sign Up" onPress={() => navigation.navigate("ProfileSetup")}/>
        <Text style={[CommonStyles.paragraph, { marginTop: "5%" , color:theme.color}]}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={CommonStyles.fontRed}>Log in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    // width:"100%",
    borderWidth: 0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "grey",
    marginBottom: "5%",
    backgroundColor: "white",
  },
  paracontain: {
    alignSelf: "flex-start",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingBottom: "5%",
  },
});

export default SignUp;
