import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnBoarding from "../pages/onboarding/OnBoarding";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Verification from "../pages/verification/Verification";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import SuccessScreen from "../pages/successScreen/SuccessScreen";
import ProfileSetup from "../pages/profilesetup/ProfileSetup";
import ProfileSetupDone from "../pages/profilesetupdone/ProfileSetupDone";
import Homepage from "../pages/home/Homepage";
import PageWrapper from "../pages/pagewrapper/PageWrapper";
import ActivityTracker from "../pages/activitytracker/ActivityTracker";
import WorkOutTracker from "../pages/workouttracker/WorkOutTracker";
import FullBodyWorkout from "../pages/fullbodyworkout/FullBodyWorkout";
import StartWorkout from "../pages/startworkout/StartWorkout";
import MealPlanner from "../pages/mealplanner/MealPlanner";
import MealDetails from "../pages/mealdetails/MealDetails";
import SleepTracker from "../pages/sleeptracker/SleepTracker";
import Result from "../pages/result/Result";
import FindFriends from "../pages/findfriends/FindFriends";

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Resetpassword" component={ResetPassword} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        <Stack.Screen name="ProfileSetupDone" component={ProfileSetupDone} />
        <Stack.Screen name="Pagewrapper" component={PageWrapper} />
        <Stack.Screen name="WorkoutTracker" component={WorkOutTracker} />
        <Stack.Screen name="Fullbodyworkout" component={FullBodyWorkout} />
        <Stack.Screen name="Startworkout" component={StartWorkout} />
        <Stack.Screen name="Mealplanner" component={MealPlanner} />
        <Stack.Screen name="Mealdetails" component={MealDetails} />
        <Stack.Screen name="Sleeptracker" component={SleepTracker} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Findfriends" component={FindFriends} />
      </Stack.Navigator>
    </>
  );
};

export default Router;
