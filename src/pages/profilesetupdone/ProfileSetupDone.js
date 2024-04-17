import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CommonButton from "../../components/commonbutton/CommonButton";
import HeartIcon from "../../../assets/svg/heart_icon.svg";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const ProfileSetupDone = () => {
  const [fill, setFill] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fill, {
      toValue: 65,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const theme = useContext(themeContext);

  return (
    <View style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Text
        style={[
          CommonStyles.headingFive,
          { textAlign: "center" },
          { marginTop: "15%" },
          { width: "80%" },
          { alignSelf: "center" },
          {color:theme.color}
        ]}
      >
        We create your training plan
      </Text>
      <View style={styles.progressBar}>
        <AnimatedCircularProgress
          size={170}
          width={20}
          fill={fill}
          lineCap="round"
          tintColor="#C1063D"
          backgroundColor="#D9D9D9"
        >
          {(percentage) => (
            <Text style={[CommonStyles.headingFive ,  {color:theme.color}]}>{`${Math.round(
              percentage
            )}%`}</Text>
          )}
        </AnimatedCircularProgress>
        <View style={styles.absoluteHeartIcon}>
          <HeartIcon />
        </View>
      </View>
      <Text style={[CommonStyles.paragraph, { textAlign: "center" , color:theme.color}]}>
        atis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
        tincidunt.
      </Text>
      <View style={styles.absoluteButton}>
        <CommonButton
          label="Start Training"
          onPress={() => navigation.navigate("Pagewrapper")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    position: "relative",
    alignSelf: "center",
    paddingTop: "20%",
    paddingBottom: "20%",
  },
  absoluteButton: {
    position: "absolute",
    bottom: "6%",
    width: "100%",
    alignSelf: "center",
  },
  absoluteHeartIcon: {
    position: "absolute",
    right: -15,
    bottom: "58%",
  },
});

export default ProfileSetupDone;
