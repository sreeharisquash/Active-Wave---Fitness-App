import React, { useContext, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Switch,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import Header from "../../components/header/Header";
import { LineChart } from "react-native-gifted-charts";
import { TrainData, upcomingWorkoutData } from "../../constants/Constants";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const WorkOutTracker = () => {
  const [selectedItem, setSelelectedItem] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const [switchStates, setSwitchStates] = useState({});

  const navigation = useNavigation();

  const data1 = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
  ];

  const data2 = [
    { value: 30 },
    { value: 60 },
    { value: 40 },
    { value: 70 },
    { value: 50 },
    { value: 40 },
    { value: 60 },
    { value: 50 },
  ];

  const handleSelect = (item) => {
    setSelelectedItem(item);
  };

  const toggleSwitch = (id) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const theme = useContext(themeContext);

  return (
    <ScrollView style={{ backgroundColor: "#C1063D" }}>
      <ScrollView
        style={[CommonStyles.container, { backgroundColor: "#C1063D" }]}
      >
        <StatusBar backgroundColor="#C1063D" />
        <Header title="Workout Tracker" color="white" />
        <View style={{ paddingTop: "15%", flex: 1 }}>
          <LineChart
            data={data1}
            data2={data2}
            isAnimated={true}
            showPointerStrip={false}
            color1="white"
            color2="lightgrey"
            hideDataPoints1={true}
            hideDataPoints2={true}
            curved={true}
            hideRules={true}
            xAxisLabelTexts={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
            xAxisLabelTextStyle={{ color: "white" }}
            hideOrigin={true}
            yAxisTextStyle={{ color: "white" }}
            xAxisThickness={0}
            yAxisThickness={0}
            yAxisSide="right"
          />
        </View>
      </ScrollView>
      <View style={[styles.whiteBg , {backgroundColor:theme.background}]}>
        <View style={styles.redContainer}>
          <Text style={[CommonStyles.headingMain, { fontSize: 17 }]}>
            Daily Workout Schedule
          </Text>
          <TouchableOpacity>
            <Text style={styles.checkContainer}>Check</Text>
          </TouchableOpacity>
        </View>
        <Text style={[CommonStyles.headingFour , {color:theme.color}]}>What Do You Want to Train</Text>
        <View style={{marginTop:"6%"}}>
          {TrainData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.trainingData,
                { borderColor: selectedItem === item ? "#C1063D" : "#888888" },
                {
                  backgroundColor: selectedItem === item ? "#FFE4EC" : "white",
                },
                { borderWidth: selectedItem === item ? 1.5 : 0.5 },
              ]}
              onPress={() => handleSelect(item)}
            >
              <View style={{ gap: 5 }}>
                <Text style={CommonStyles.headingSix}>{item.title}</Text>
                <Text style={{ marginBottom: "10%" }}>{item.para}</Text>
                <CommonButton label="View more" onPress={() => navigation.navigate(item.page)}/>
              </View>
              {item.icon}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.seeMore}>
        <Text style={[CommonStyles.headingFive ,  {color:theme.color}]}>Upcoming Workout</Text>
        <View>
          <CommonButton label="See more"/>
        </View>
      </View>
      <View style={{ marginBottom: "20%" }}>
        {upcomingWorkoutData.map((item) => (
          <View key={item.id} style={[styles.WorkoutTypes , {backgroundColor:theme.grey}]}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              {item.image}
              <View>
                <Text style={[CommonStyles.headingSix , {color:theme.color}]}>{item.title}</Text>
                <Text style={{color:theme.color}}>{item.time}</Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: "grey", true: "#C1063D" }}
              thumbColor={isEnabled ? "white" : "white"}
              onValueChange={() => toggleSwitch(item.id)}
              value={switchStates[item.id] || false}
            />
          </View>
        ))}
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  redContainer: {
    backgroundColor: "#C1063D",
    paddingHorizontal: "5%",
    paddingVertical: "7%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10%",
  },
  checkContainer: {
    backgroundColor: "white",
    color: "#C1063D",
    padding: "3%",
    borderRadius: 15,
  },
  trainingData: {
    borderWidth: 0.5,
    padding: "5%",
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    alignItems: "center",
  },
  whiteBg: {
    paddingTop: "10%",
    backgroundColor: "white",
    paddingHorizontal: "5%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  seeMore: {
    paddingTop: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%",
  },
  WorkoutTypes: {
    backgroundColor: "#EEEEEE",
    marginBottom: "5%",
    padding: "5%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default WorkOutTracker;
