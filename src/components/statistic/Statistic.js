import React, { useRef, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { CommonStyles } from "../commonstyles/CommonStyles";
import CommonButton from "../commonbutton/CommonButton";
import { resultProgressBarData } from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../theme/themeContext";

const Statistic = () => {
    const theme = useContext(themeContext);

  const data1 = [
    { value: 10 },
    { value: 80 },
    { value: 20 },
    { value: 30 },
    { value: 50 },
    { value: 30 },
    { value: 70 },
    { value: 50 },
  ];

  const data2 = [
    { value: 40 },
    { value: 50 },
    { value: 20 },
    { value: 50 },
    { value: 10 },
    { value: 20 },
    { value: 20 },
    { value: 50 },
  ];

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView style={[CommonStyles.container, { marginBottom: "6%" , backgroundColor: theme.background }]}>
      <View>
        <LineChart
          data={data1}
          data2={data2}
          isAnimated={true}
          showPointerStrip={false}
          color1="#C1063D"
          color2="#FFC0CB"
          hideDataPoints2={true}
          dataPointsColor1="#C1063D"
          dataPointsRadius1={5}
          curved={true}
          xAxisLabelTextStyle={{color:theme.color}}
          yAxisTextStyle={{color:theme.color}}
          xAxisLabelTexts={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          hideOrigin={true}
          highlightedRange={10}
          xAxisThickness={0}
          yAxisThickness={0}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: "10%",
        }}
      >
        <Text style={[CommonStyles.headingSix , {color:theme.color}]}>May</Text>
        <Text style={[CommonStyles.headingSix , {color:theme.color}]}>June</Text>
      </View>

      {resultProgressBarData.map((item) => {
        const interpolatedWidth = progress.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", `${item.start}%`],
        });

        return (
          <>
            <Text
              style={[
                CommonStyles.headingSix,
                { textAlign: "center", marginBottom: -10 , color:theme.color},
              ]}
            >
              {item.title}
            </Text>
            <View
              key={item.id}
              style={[
                styles.progressContainer,
                { marginBottom: item.marginbottom },
              ]}
            >
              <Text style={{color:theme.color}}>{item.start}%</Text>
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBackground}>
                  <Animated.View
                    style={[
                      styles.progressBar,
                      {
                        width: interpolatedWidth,
                      },
                    ]}
                  />
                </View>
              </View>
              <Text style={{color:theme.color}}>{item.end}%</Text>
            </View>
          </>
        );
      })}
      <View style={styles.absoluteContainer}>
        <CommonButton label="Back To Home" onPress={() => navigation.navigate("Pagewrapper")}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    bottom: 0,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    height: 10,
    width: "60%",
  },
  progressBar: {
    backgroundColor: "#C1063D",
    height: "100%",
  },
  progressBackground: {
    backgroundColor: "#CCCCCC",
    flex: 1,
    height: "100%",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});

export default Statistic;
