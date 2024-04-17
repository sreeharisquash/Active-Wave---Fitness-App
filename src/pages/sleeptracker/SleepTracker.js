import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import Header from "../../components/header/Header";
import { LineChart } from "react-native-gifted-charts";
import MoonIcon from "../../../assets/svg/moonIcon.svg";
import { todaySchedule } from "../../constants/Constants";
import MoreIcon from "../../../assets/svg/MoreIcon";
import { Switch } from "react-native-gesture-handler";
import themeContext from "../../components/theme/themeContext";

const SleepTracker = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [switchStates, setSwitchStates] = useState({});

  const toggleSwitch = (id) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };
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

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Header title="Sleep Tracker" />
      <View style={{ paddingVertical: "8%" }}>
        <LineChart
          data={data1}
          isAnimated={true}
          showPointerStrip={false}
          color1="#C1063D"
          hideDataPoints1={true}
          xAxisLabelTextStyle={{color:theme.color}}
          yAxisTextStyle={{color:theme.color}}
          dataPointsRadius1={5}
          curved={true}
          xAxisLabelTexts={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          hideOrigin={true}
          highlightedRange={10}
          lineGradient={true}
          lineGradientDirection="vertical"
          lineGradientStartColor="red"
          lineGradientEndColor="green"
          xAxisThickness={0}
          yAxisThickness={0}
        />
      </View>
      <View style={styles.LastnightSleep}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: "5%",
          }}
        >
          <View>
            <Text style={CommonStyles.headingMain}>Last Night Sleep</Text>
            <Text style={{ color: "white", fontSize: 18 }}>8h 20m</Text>
          </View>
          <MoonIcon color="white" />
        </View>
        <LineChart
          data={sleepData1}
          data2={sleepData2}
          data3={sleepData3}
          data4={sleepData4}
          data5={sleepData5}
          isAnimated={true}
          showPointerStrip={false}
          color1="white"
          color2="white"
          color3="white"
          color4="white"
          color5="white"
          hideYAxisText={true}
          hideDataPoints={true}
          hideAxesAndRules={true}
          dataPointsRadius1={5}
          curved={true}
          height={150}
          width={400}
          hideOrigin={true}
          highlightedRange={10}
          xAxisThickness={0}
          yAxisThickness={0}
        />
      </View>
      <View style={styles.redContainer}>
        <Text style={[CommonStyles.headingMain, { fontSize: 17 }]}>
          Daily Sleep Schedule
        </Text>
        <TouchableOpacity>
          <Text style={styles.checkContainer}>Check</Text>
        </TouchableOpacity>
      </View>
      <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Today Schedule</Text>
      <View style={{ marginBottom: "30%", paddingTop: "5%" }}>
        {todaySchedule.map((item) => (
          <View key={item.id} style={[styles.scheduleContainer , {backgroundColor:theme.grey}]}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {item.icon}
              <View>
                <Text style={[CommonStyles.headingSix , {color:theme.color}]}>
                  {item.title}
                  <Text style={{ fontSize: 12, fontWeight: "400" , color:theme.color}}>
                    {item.time}
                  </Text>
                </Text>
                <Text style={{color:theme.color}}>
                  in <Text style={styles.bigFont}>{item.hours}</Text>hours{" "}
                  <Text style={styles.bigFont}>{item.minutes}</Text>minutes
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity>
                <MoreIcon />
              </TouchableOpacity>

              <Switch
                trackColor={{ false: "grey", true: "#C1063D" }}
                thumbColor={isEnabled ? "white" : "white"}
                onValueChange={() => toggleSwitch(item.id)}
                value={switchStates[item.id] || false}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  LastnightSleep: {
    backgroundColor: "#C1063D",
    // padding: "5%",
    borderRadius: 12,
  },
  redContainer: {
    backgroundColor: "#C1063D",
    paddingHorizontal: "5%",
    paddingVertical: "7%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "8%",
  },
  checkContainer: {
    backgroundColor: "white",
    color: "#C1063D",
    padding: "3%",
    borderRadius: 15,
  },
  scheduleContainer: {
    marginBottom: "5%",
    padding: "5%",
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 1,
    width: "98%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigFont: {
    fontSize: 18,
  },
});
export default SleepTracker;
