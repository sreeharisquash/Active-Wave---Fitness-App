import React, { useContext, useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../commonstyles/CommonStyles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CalorieIcon from "../../../assets/svg/caloriesIcon.svg";
import themeContext from "../theme/themeContext";

const Calories = () => {
  const [fill, setFill] = useState(new Animated.Value(0));
  const theme = useContext(themeContext);

  useEffect(() => {
    Animated.timing(fill, {
      toValue: 80,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <TouchableOpacity style={styles.contain}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: "7%",
          paddingBottom: "5%",
        }}
      >
        <View>
          <Text
            style={[
              CommonStyles.paragraph,
              { fontWeight: "500", color: theme.color },
            ]}
          >
            Calories
          </Text>
          <Text style={[CommonStyles.headingMain, { color: "#C1063D" }]}>
            760 kCal
          </Text>
        </View>

        <CalorieIcon />
      </View>

      <AnimatedCircularProgress
        size={120}
        width={20}
        fill={fill}
        lineCap="round"
        tintColor="#C1063D"
        backgroundColor="#D9D9D9"
      >
        {(percentage) => (
          <Text
            style={[
              CommonStyles.headingMain,
              {
                textAlign: "center",
                color: "black",
                fontSize: 15,
                color: theme.color,
              },
            ]}
          >
            230kCal left
          </Text>
        )}
      </AnimatedCircularProgress>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contain: {
    paddingTop: "5%",
    paddingBottom: "8%",
    borderWidth: 1,
    borderColor: "#888888",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Calories;
