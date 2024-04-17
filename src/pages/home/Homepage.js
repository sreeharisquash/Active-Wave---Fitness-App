import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import NotificationIcon from "../../../assets/svg/notificationIcon.svg";
import ProfileIcon from "../../../assets/svg/profileImg.svg";
import GirlIcon from "../../../assets/svg/homepageGirlImg.svg";
import HeartRateIcon from "../../../assets/svg/heartRateIcon.svg";
import LineChartComponent from "../../components/linechart/LineChartComponent";
import Calories from "../../components/calories/Calories";
import WaterIntake from "../../components/waterintake/WaterIntake";
import Sleep from "../../components/sleep/Sleep";
import CommonButton from "../../components/commonbutton/CommonButton";
import { upcomingWorkoutData } from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const Homepage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [switchStates, setSwitchStates] = useState({});
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const toggleSwitch = (id) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <ScrollView
      style={[
        CommonStyles.container,
        { paddingTop: "15%", backgroundColor: theme.background },
      ]}
    >
      <View style={styles.profileContainer}>
        <View style={styles.nameImg}>
          <ProfileIcon />
          <View>
            <Text style={[CommonStyles.paragraph, { color: theme.color }]}>
              Welcome Back,
            </Text>
            <Text style={[CommonStyles.headingFive, { color: theme.color }]}>
              Satoru Gojo
            </Text>
          </View>
        </View>
        <View style={styles.notificationIcon}>
          <NotificationIcon />
        </View>
      </View>
      <View style={styles.BMICalculator}>
        <View style={{ gap: 10, paddingBottom: "7%", paddingTop: "7%" }}>
          <Text style={styles.headingMain}>BMI (Body Mass Index)</Text>
          <Text style={[CommonStyles.paragraph, { color: "white" }]}>
            You have a normal weight
          </Text>
          <Text style={[CommonStyles.paragraph, { color: "white" }]}>
            Today, 8 Dec, <Text style={styles.headingMain}>64.9 Kg</Text>
          </Text>
          <TouchableOpacity style={styles.activityTracker}>
            <Text style={{ color: "#C1063D", fontWeight: "500" }}>
              Track your activity
            </Text>
          </TouchableOpacity>
        </View>
        <GirlIcon />
      </View>

      <Text style={[CommonStyles.headingFive, { color: theme.color }]}>
        Activity Status
      </Text>
      <View style={styles.activityStatus}>
        <View style={styles.heartRateHead}>
          <View>
            <Text style={[CommonStyles.paragraph, { color: "white" }]}>
              Heart Rate
            </Text>
            <Text style={styles.headingMain}>78 BPM</Text>
          </View>
          <HeartRateIcon />
        </View>
        <LineChartComponent />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View style={styles.caloriesSleepContain}>
          <Calories />
          <Sleep />
        </View>
        <WaterIntake />
      </View>
      <View style={styles.seeMore}>
        <Text style={[CommonStyles.headingFive, { color: theme.color }]}>
          Upcoming Workout
        </Text>
        <View>
          <CommonButton
            label="See more"
            onPress={() => navigation.navigate("WorkoutTracker")}
          />
        </View>
      </View>
      <View style={{ marginBottom: "50%" }}>
        {upcomingWorkoutData.map((item) => (
          <View key={item.id} style={styles.WorkoutTypes}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              {item.image}
              <View>
                <Text style={CommonStyles.headingSix}>{item.title}</Text>
                <Text>{item.time}</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameImg: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  notificationIcon: {
    marginTop: "5%",
  },
  BMICalculator: {
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#C1063D",
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    marginBottom: "12%",
  },
  headingMain: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
  activityTracker: {
    backgroundColor: "white",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderRadius: 30,
    // paddingRight:"5%",
  },
  activityStatus: {
    marginTop: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    // paddingLeft: "5%",
    // paddingRight: "5%",
    backgroundColor: "#C1063D",
    // flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    marginBottom: "12%",
  },
  heartRateHead: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "space-between",
  },
  caloriesSleepContain: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
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
export default Homepage;
