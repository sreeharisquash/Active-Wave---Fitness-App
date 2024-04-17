import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import BackButton from "../../../assets/svg/BackButton";
import { LoginMethods, SignInInput } from "../../constants/Constants";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const Login = () => {
  const navigation = useNavigation();

  const handleForgotPass = () => {
    navigation.navigate("Verification");
  };

  const theme = useContext(themeContext);

  return (
    <ScrollView
      style={[CommonStyles.container, { backgroundColor: theme.background}]}
    >
      <BackButton color="white" />
      <View style={styles.container}>
        <Image source={require("../../../assets/logo/logo.png")} />
        <Text
          style={[
            CommonStyles.headingFive,
            { marginTop: "3%", color: theme.color },
          ]}
        >
          Welcome Back
        </Text>
        <View style={{ width: "100%", paddingTop: "10%" }}>
          {SignInInput.map((item) => (
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
              />
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.forgotpass} onPress={handleForgotPass}>
          <Text style={[CommonStyles.paragraph, { color: theme.color }]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <CommonButton label="Login" onPress={() => navigation.navigate("Pagewrapper")}/>
      </View>
      <View style={[styles.liningcontainer, { borderColor: theme.color }]}>
        <View style={styles.lining} />
        <Text>Or</Text>
        <View style={styles.lining} />
      </View>
      <View style={styles.icons}>
        {LoginMethods.map((item) => (
          <TouchableOpacity style={[styles.iconContainer , {borderColor:theme.color}]} key={item.id}>
            {item.icon}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.absoluteContainer}>
      <Text
        style={[
          CommonStyles.paragraph,
          { marginTop: "5%", color: theme.color ,},
        ]}
      >
        Don’t have an account yet?{' '}
        <Text style={CommonStyles.fontRed}>Register</Text>
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
  forgotpass: {
    alignSelf: "flex-end",
    marginBottom: "6%",
  },
  liningcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    alignSelf: "center",
    paddingVertical: "5%",
  },
  lining: {
    borderWidth: 0.5,
    width: "50%",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    gap: 15,
    paddingTop: "5%",
  },
  iconContainer: {
    borderWidth: 0.4,
    padding: "3%",
    borderRadius: 12,
  },
  absoluteContainer:{
    paddingTop:"20%",
    alignSelf:"center",
  }
});

export default Login;
