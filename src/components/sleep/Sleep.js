import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../commonstyles/CommonStyles";
import MoonIcon from '../../../assets/svg/moonIcon.svg';
import { LineChart } from 'react-native-gifted-charts';
import { useNavigation } from "@react-navigation/native";
import themeContext from "../theme/themeContext";

const Sleep = () => {

  const theme = useContext(themeContext);
  
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, 
        strokeWidth: 2,
      },
      {
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // green
        strokeWidth: 2,
      },
      {
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue
        strokeWidth: 2,
      },
      {
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const sleepData1 = [
    { value: 15 },
    { value: 10 },
    { value: 10 },
    { value: 15 },
    { value: 16 },
    { value: 14 },
    { value: 12 },
    { value: 15 },
  ];

  const sleepData2 = sleepData1.map((item) => ({
    value: item.value - 1,
  }));
  const sleepData3 = sleepData2.map((item) => ({
    value: item.value - 1,
  }));

  const sleepData4 = [
    { value: 8 },
    { value: 10 },
    { value: 12 },
    { value: 10 },
    { value: 9 },
    { value: 10 },
    { value: 12 },
    { value: 15 },
  ];

  const sleepData5 = sleepData4.map((item) => ({
    value: item.value - 1,
  }));
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.contain} onPress={() => navigation.navigate("Sleeptracker")}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: "7%",
        paddingBottom: "5%"
      }}>
        <View>
          <Text style={[CommonStyles.paragraph, { fontWeight: "500" , color:theme.color }]}>
            Sleep
          </Text>
          <Text style={[CommonStyles.headingMain, { color: "#C1063D" }]}>
            8h 20m
          </Text>
        </View>
        <MoonIcon color={theme.color}/>
      </View>
       <LineChart
          data={sleepData1}
          data2={sleepData2}
          data3={sleepData3}
          data4={sleepData4}
          data5={sleepData5}
          isAnimated={true}
          showPointerStrip={false}
          color1="#C1063D"
          color2="#C1063D"
          color3="#C1063D"
          color4="grey"
          color5="grey"
          hideYAxisText={true}
          hideDataPoints={true}
          hideAxesAndRules={true}
          dataPointsRadius1={5}
          curved={true}
          height={100}
          // width={0}
          hideOrigin={true}
          highlightedRange={10}
          xAxisThickness={0}
          yAxisThickness={0}
        />
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

export default Sleep;
