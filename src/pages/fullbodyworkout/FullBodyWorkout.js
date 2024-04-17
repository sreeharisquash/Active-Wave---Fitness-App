import React, { useContext } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import Header from "../../components/header/Header";
import MainImg from "../../../assets/svg/fullbodyWorkoutMainImg.svg";
import PlayButton from "../../../assets/svg/playButton.svg";
import { fullBodyWorkoutTimeline } from "../../constants/Constants";
import Timeline from "react-native-timeline-flatlist";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const FullBodyWorkout = () => {
  const navigation = useNavigation();

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <StatusBar backgroundColor="white" />
      <Header title="Full Body Workout" />
      <View style={styles.MainImgContainer}>
        <MainImg />
        <TouchableOpacity style={styles.playButton}>
          <PlayButton />
        </TouchableOpacity>
      </View>
      <View style={styles.skipping}>
        <Text style={[CommonStyles.headingSix , {color:theme.color}]}>Skipping</Text>
        <Text style={[CommonStyles.innerParagraphs , {color:theme.color}]}>
          Easy | 390 Calories Burn
        </Text>
      </View>
      <Text style={[CommonStyles.headingSix , {color:theme.color}]}>Descriptions</Text>
      <Text style={[CommonStyles.innerParagraphs, { marginTop: "2%" , color:theme.color}]}>
        A Jumping Jacks, also known as a star jump and called a side-straddle
        hop in the US military, is a physical jumping exercise performed by
        jumping to a position with the legs spread wide{" "}
        <Text style={CommonStyles.fontRed}>Read More...</Text>
      </Text>
      <View style={styles.howToDoIt}>
        <Text style={[CommonStyles.headingSix , {color:theme.color}]}>How To Do It </Text>
        <Text style={[styles.stepsFont , {color:theme.color}]}>4 Steps</Text>
      </View>
      <View style={{ marginTop: "8%", marginBottom: "50%" }}>
        <Timeline
          data={fullBodyWorkoutTimeline}
          circleColor="#C1063D"
          lineColor="lightgrey"
          titleStyle={{color:theme.color}}
          descriptionStyle={{color:theme.color}}
          eventContainerStyle={{
            borderStyle: "dashed",
          }}
          timeStyle={CommonStyles.fontRed}
        />
      </View>
      <View style={styles.absoluteContainer}>
        <CommonButton
          label="Save"
          onPress={() => navigation.navigate("Startworkout")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainImgContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  playButton: {
    position: "absolute",
    alignSelf: "center",
  },
  skipping: {
    paddingTop: "8%",
    paddingBottom: "8%",
    gap: 7,
  },
  howToDoIt: {
    marginTop: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepsFont: {
    color: "#888888",
  },
  absoluteContainer: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
});
export default FullBodyWorkout;
