import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import Backbutton from "../../../assets/svg/backbutton.svg";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import CommonButton from "../../components/commonbutton/CommonButton";
import GenderPage from "../genderselection/GenderPage";
import MainGoal from "../maingoal/MainGoal";
import { useNavigation } from "@react-navigation/native";
import BirthYear from "../birthyear/BirthYear";
import HeightPage from "../heightpage/HeightPage";
import WeightPage from "../weightpage/WeightPage";
import BodyType from "../bodytype/BodyType";
import ActivityLevel from "../activitylevel/ActivityLevel";
import TrainingLevel from "../traininglevel/TrainingLevel";
import ProfileSetupDone from "../profilesetupdone/ProfileSetupDone";
import themeContext from "../../components/theme/themeContext";

const ProfileSetup = () => {
  const [completedTasks, setCompletedTasks] = useState(1);
  const [currentComponent, setCurrentComponent] = useState("Gender");
  const [taskCompleted, setTaskCompleted] = useState(false);

  const navigation = useNavigation();

  const totalTasks = 8;

  const handleTaskCompletion = (action) => {
    if (action === "next" && completedTasks < totalTasks) {
      const updatedCompletedTasks = completedTasks + 1;
      setCompletedTasks(updatedCompletedTasks);

      switch (updatedCompletedTasks) {
        case 1:
          setCurrentComponent("Gender");
          break;
        case 2:
          setCurrentComponent("Goal");
          break;
        case 3:
          setCurrentComponent("Birthyear");
          break;
        case 4:
          setCurrentComponent("Height");
          break;
        case 5:
          setCurrentComponent("Weight");
          break;
        case 6:
          setCurrentComponent("Body Type");
          break;
        case 7:
          setCurrentComponent("Activity Level");
          break;
        case 8:
          setCurrentComponent("Training Level");
          setTaskCompleted(true);
          break;
        default:
          break;
      }
    } else if (action === "back" && completedTasks > 1) {
      const updatedCompletedTasks = completedTasks - 1;
      setCompletedTasks(updatedCompletedTasks);
      setTaskCompleted(false);

      switch (updatedCompletedTasks) {
        case 1:
          setCurrentComponent("Gender");
          break;
        case 2:
          setCurrentComponent("Goal");
          break;
        case 3:
          setCurrentComponent("Birthyear");
          break;
        case 4:
          setCurrentComponent("Height");
          break;
        case 5:
          setCurrentComponent("Weight");
          break;
        case 6:
          setCurrentComponent("Body Type");
          break;
        case 7:
          setCurrentComponent("Activity Level");
          break;
        case 8:
          setCurrentComponent("Training Level");
          break;
        default:
          break;
      }
    } else if (action === "back" && completedTasks === 1) {
      navigation.goBack();
    }
  };

  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case "Gender":
        return <GenderPage />;
      case "Goal":
        return <MainGoal />;
      case "Birthyear":
        return <BirthYear />;
      case "Height":
        return <HeightPage />;
      case "Weight":
        return <WeightPage />;
      case "Body Type":
        return <BodyType />;
      case "Activity Level":
        return <ActivityLevel />;
      case "Training Level":
        return <TrainingLevel />;
      default:
        return null;
    }
  };

  const progress = completedTasks / totalTasks;

  const handleSetupComplete = () => {
    navigation.navigate("ProfileSetupDone")
  };

  const renderButton = () => {
    if (taskCompleted) {
      return (
        <CommonButton
          label="Continue"
          onPress={() => handleSetupComplete()}
        />
      );
    } else {
      return (
        <CommonButton
          label="Continue"
          onPress={() => handleTaskCompletion("next")}
        />
      );
    }
  };

  const theme = useContext(themeContext);

  return (
    <View style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => handleTaskCompletion("back")}>
          <Backbutton color={theme.color}/>
        </TouchableOpacity>
        <View style={styles.progressContain}>
          <ProgressBar
            progress={progress}
            width={200}
            color="#C1063D"
            unfilledColor="#D9D9D9"
            borderColor="white"
            height={10}
            borderRadius={30}
          />

          <View />
        </View>
        <View />
        <Text style={ {color:theme.redorWhite}}>
          {completedTasks}/{totalTasks}
        </Text>
      </View>
      <View style={styles.absoluteButton}>{renderButton()}</View>

      {renderCurrentComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  absoluteButton: {
    position: "absolute",
    bottom: "6%",
    width: "100%",
    alignSelf: "center",
  },
});

export default ProfileSetup;
