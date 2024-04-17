import MaleImg from "../../assets/svg/male.svg";
import FemaleImg from "../../assets/svg/female.svg";
import LooseWeight from "../../assets/svg/loose-weight.svg";
import BuildMuscle from "../../assets/svg/build-muscle.svg";
import KeepFit from "../../assets/svg/keep-fit.svg";
import FitImg from "../../assets/svg/fit_img.svg";
import BulkImg from "../../assets/svg/bulk_img.svg";
import FatImg from "../../assets/svg/fat_img.svg";
import StretchImg from "../../assets/svg/stretch_training_level.svg";
import PowerImg from "../../assets/svg/power_training_level.svg";
import ZumbaImg from "../../assets/svg/zumba_training_level.svg";
import YogaImg from "../../assets/svg/yoga_training_level.svg";
import FullBodyWorkoutIcon from "../../assets/svg/fullbodyWorkout.svg";
import AbsWorkoutIcon from "../../assets/svg/absWorkout.svg";
import HomeIcon from "../../assets/svg/HomeIcon";
import ReelIcon from "../../assets/svg/ReelsIcon";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import CameraIcon from "../../assets/svg/CameraIcon";
// import ProfileIcon from "../../assets/svg/profileIcon.svg";
import ProfileIcon from "../../assets/svg/ProfieIcon";
import SelectedHome from "../../assets/svg/selectedHome.svg";
import SelectedReel from "../../assets/svg/selectedReel.svg";
import SelectedCamera from "../../assets/svg/selectedCamera.svg";
import SelectedProfile from "../../assets/svg/selectedProfile.svg";
import ResultIcon from "../../assets/svg/ResultIcon";
import ActivityIcon from "../../assets/svg/ActivityHistoryIcon";
import WorkoutProgressIcon from "../../assets/svg/WorkOutProgressIcon";
import ContactIcon from "../../assets/svg/ContactIcon";
import PrivacyIcon from "../../assets/svg/PrivacyIcon";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import GlassIcon from "../../assets/svg/glassImg.svg";
import ShoeIcon from "../../assets/svg/shoeImg.svg";
import DrinkingWaterIcon from "../../assets/svg/drinkingWaterIcon.svg";
import EatSnackIcon from "../../assets/svg/eatSnackIcon.svg";
import FullBodyWorkoutImg from "../../assets/svg/fullBodyimages.svg";
import UpperBodyWorkout from "../../assets/svg/upperbodyWorkout.svg";
import LowerBodyWorkout from "../../assets/svg/lowerBodyWorkout.svg";
import AbsWorkoutImg from "../../assets/svg/absWorkout2.svg";
import CalenderIcon from "../../assets/svg/Calendar.svg";
import DifficultyIcon from "../../assets/svg/difficultyIcon.svg";
import DumbellImg from "../../assets/svg/dumbell.svg";
import SkipRope from "../../assets/svg/skippingRope.svg";
import BottleImg from "../../assets/svg/bottle.svg";
import WarmUpImg from "../../assets/svg/warmupImg.svg";
import ArmRiseImg from "../../assets/svg/armriseImg.svg";
import SkippingImg from "../../assets/svg/skippingImg.svg";
import SquatsImg from "../../assets/svg/squatsImg.svg";
import TakeBreakImg from "../../assets/svg/takebreakImg.svg";
import PushupImg from "../../assets/svg/pushUpImg.svg";
import MuscleImg from "../../assets/svg/muscleImg.svg";
import AbWorkoutImg from "../../assets/svg/abWorkoutImg.svg";
import MealsIcon1 from "../../assets/svg/mealsIcon1.svg";
import MealsIcon2 from "../../assets/svg/mealsIcon2.svg";
import FireIcon from "../../assets/svg/fireIcon.svg";
import EggIcon from "../../assets/svg/eggsIcon.svg";
import ProteinIcon from "../../assets/svg/proteinsIcon.svg";
import GrassIcon from "../../assets/svg/grassIcon.svg";
import WheatIcon from "../../assets/svg/wheatIcon.svg";
import SugarIcon from "../../assets/svg/sugarIcon.svg";
import BakingSodaIcon from "../../assets/svg/bakingsodaIcon.svg";
import EggIngredientIcon from "../../assets/svg/eggIcon.svg";
import BedIcon from "../../assets/svg/bedIcon.svg";
import AlarmIcon from "../../assets/svg/alarmIcon.svg";
import FacebookIcon from "../../assets/svg/Facebook.svg";
import InstagramIcon from "../../assets/svg/Instagram.svg";
import NotificationIcon from "../../assets/svg/SimpleNotificationIcon";
import DarkmodeIcon from "../../assets/svg/DarkModeIcon";
import FbLogin from'../../assets/svg/facebookLogo.svg'
import GoogleIcon from '../../assets/svg/googleLogo.svg'

export const OnBoardingData = [
  {
    id: 1,
    image: require("../../assets/onboardingimages/amico.png"),
    title: "Track Your Goal",
    para: "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals.",
  },
  {
    id: 2,
    image: require("../../assets/onboardingimages/pana.png"),
    title: "Get Burn",
    para: "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals.",
  },
  {
    id: 3,
    image: require("../../assets/onboardingimages/rafiki.png"),
    title: "Eat Well",
    para: "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals.",
  },
];

export const SignUpInput = [
  { id: 1, placeholder: "Full Name", icon: "account", securetext: false },
  { id: 2, placeholder: "Phone Number", icon: "phone", securetext: false },
  { id: 3, placeholder: "Email", icon: "email", securetext: false },
  { id: 4, placeholder: "Password", icon: "lock", securetext: true },
];

export const SignInInput = [
  { id: 1, placeholder: "Email", icon: "account" },
  { id: 2, placeholder: "Password", icon: "lock" },
];

export const ResetPassData = [
  { id: 1, placeholder: "Password", icon: "lock", securetext: true },
  {
    id: 2,
    placeholder: "Confirm Password",
    icon: "lock",
    righticon: "eye",
    securetext: true,
  },
];

export const GenderImages = [
  { id: 1, image: <MaleImg /> },
  { id: 2, image: <FemaleImg /> },
];

export const MainGoalData = [
  { id: 1, image: <LooseWeight />, title: "Loose Weight" },
  { id: 2, image: <BuildMuscle />, title: "Build Muscle" },
  { id: 3, image: <KeepFit />, title: "Keep Fit" },
];

export const BodyTypeData = [
  { id: 1, image: <FitImg />, type: "Fit" },
  { id: 2, image: <BulkImg />, type: "Bulk" },
  { id: 3, image: <FatImg />, type: "Fat" },
];

export const ActivityLevelData = [
  { id: 1, title: "Beginner", subtitle: "I want to start training" },
  { id: 2, title: "Intermediate", subtitle: "I train 1-2 times a week" },
  { id: 3, title: "Advanced", subtitle: "I train more than 5 times a week" },
];

export const TrainingLevelData = [
  { id: 1, title: "Stretch", image: <StretchImg /> },
  { id: 2, title: "Power Training", image: <PowerImg /> },
  { id: 3, title: "Zumba", image: <ZumbaImg /> },
  { id: 4, title: "Yoga", image: <YogaImg /> },
];

export const HomeTimeLineData = [
  { id: 1, title: "6am - 8am", description: "600ml" },
  { id: 2, title: "9am - 11am", description: "500ml" },
  { id: 3, title: "11am - 2pm", description: "1000ml" },
  { id: 4, title: "2pm - 4pm", description: "700ml" },
  { id: 5, title: "4pm - now", description: "900ml" },
];

export const upcomingWorkoutData = [
  {
    id: 1,
    image: <FullBodyWorkoutIcon />,
    title: "Fullbody Workout",
    time: "Today, 03:00pm",
  },
  {
    id: 2,
    image: <AbsWorkoutIcon />,
    title: "ABS Workout",
    time: "Today, 05:00pm",
  },
];

export const TabIcons = [
  {
    id: 1,
    icon: <HomeIcon />,
    page: "Homepage",
    selectedIcon: <SelectedHome />,
  },
  {
    id: 2,
    icon: <ReelIcon />,
    page: "Activity Tracker",
    selectedIcon: <SelectedReel />,
  },
  { id: 3, icon: <SearchIcon />, page: "Search", selectedIcon: <SearchIcon /> },
  {
    id: 4,
    icon: <CameraIcon />,
    page: "Camera",
    selectedIcon: <SelectedCamera />,
  },
  {
    id: 5,
    icon: <ProfileIcon />,
    page: "Profile",
    selectedIcon: <SelectedProfile />,
  },
];

export const profileHeightAndWeight = [
  { id: 1, title: "Height", measure: "180cm" },
  { id: 2, title: "Weight", measure: "65kg" },
  { id: 3, title: "Age", measure: "22" },
];

export const AccountDetailProfile = [
  { id: 1, icon: <ProfileIcon />, title: "Personal Data", page: "" },
  { id: 2, icon: <ResultIcon />, title: "Result", page: "Result" },
  { id: 3, icon: <ActivityIcon />, title: "Activity History", page: "" },
  { id: 4, icon: <WorkoutProgressIcon />, title: "Workout Progress", page: "" },
];

export const OtherDetailProfile = [
  { id: 1, icon: <ContactIcon />, title: "Contact Us" },
  { id: 2, icon: <PrivacyIcon />, title: "Privacy Policy" },
  { id: 3, icon: <SettingsIcon />, title: "Settings" },
];

export const TodayTargetData = [
  { id: 1, icon: <GlassIcon />, title: "8L", para: "Water Intake" },
  { id: 2, icon: <ShoeIcon />, title: "2400", para: "Foot Steps" },
];

export const latestActivityData = [
  {
    id: 1,
    icon: <DrinkingWaterIcon />,
    title: "Drinking 300ml Water",
    para: "About 3 minutes ago",
  },
  {
    id: 2,
    icon: <EatSnackIcon />,
    title: "Eat Snack (Fitbar)",
    para: "About 10 minutes ago",
  },
];

export const TrainData = [
  {
    id: 1,
    icon: <FullBodyWorkoutImg />,
    title: "Full body Workout",
    para: "11 Exercises | 40mins",
    page: "Fullbodyworkout",
  },
  {
    id: 2,
    icon: <UpperBodyWorkout />,
    title: "Full body Workout",
    para: "11 Exercises | 40mins",
    page: "Fullbodyworkout",
  },
  {
    id: 3,
    icon: <LowerBodyWorkout />,
    title: "Full body Workout",
    para: "11 Exercises | 40mins",
    page: "Fullbodyworkout",
  },
  {
    id: 4,
    icon: <AbsWorkoutImg />,
    title: "Full body Workout",
    para: "11 Exercises | 40mins",
    page: "Fullbodyworkout",
  },
];

export const fullBodyWorkoutTimeline = [
  {
    id: 1,
    time: "01",
    title: "Spread Your Arms",
    description:
      "To make the gestures feel more relaxed, stretch your arms as you start this movement. No bending of hands.",
  },
  {
    id: 2,
    time: "02",
    title: "Rest at The Toe",
    description:
      "The basis of this movement is jumping. Now, what needs to be considered is that you have to use the tips of your feet",
  },
  {
    id: 3,
    time: "03",
    title: "Adjust Foot Movement",
    description:
      "Jumping Jack is not just an ordinary jump. But, you also have to pay close attention to leg movements.",
  },
  {
    id: 4,
    time: "04",
    title: "Clapping Both Hands",
    description:
      "This cannot be taken lightly. You see, without realizing it, the clapping of your hands helps you to keep your rhythm while doing the Jumping Jack",
  },
];

export const fullBodyWorkoutData = [
  {
    id: 1,
    icon: <CalenderIcon />,
    title: "Schedule Workout",
    para: "5/27, 09:00 AM",
  },
  { id: 2, icon: <DifficultyIcon />, title: "Difficulity", para: "Beginner" },
];

export const youWillNeedData = [
  { id: 1, image: <DumbellImg />, name: "Dumbells" },
  { id: 2, image: <SkipRope />, name: "Skipping Rope" },
  { id: 3, image: <BottleImg />, name: "Bottle 1 Liters" },
];

export const exercisesData = [
  { id: 1, image: <WarmUpImg />, title: "Warm Up", para: "05:00 Mins" },
  { id: 2, image: <ArmRiseImg />, title: "Arm Raises", para: "00:59 Mins" },
  { id: 3, image: <SkippingImg />, title: "Skipping", para: "4x" },
  { id: 4, image: <SquatsImg />, title: "Squats", para: "20x" },
  { id: 5, image: <TakeBreakImg />, title: "Take a Break", para: "05:00 Mins" },
];

export const exercisesDataSet2 = [
  { id: 1, image: <PushupImg />, title: "Incline Push-Ups", para: "12x" },
  { id: 2, image: <MuscleImg />, title: "Muscle", para: "15x" },
  { id: 3, image: <AbWorkoutImg />, title: "AB Workout", para: "20x" },
];

export const filterData = [
  { label: "Day", value: "1" },
  { label: "Week", value: "2" },
  { label: "Month", value: "3" },
];

export const filterMealsData = [
  { label: "Breakfast", value: "1" },
  { label: "Lunch", value: "2" },
  { label: "Dinner", value: "3" },
];

export const MealsData = [
  { id: 1, image: <MealsIcon1 />, title: "Salmon Nigiri", para: "Today | 7am" },
  { id: 2, image: <MealsIcon2 />, title: "Lowfat Milk", para: "Today | 8am" },
];

export const mealsDetailData = [
  { id: 1, icon: <FireIcon />, title: "180kCal" },
  { id: 2, icon: <EggIcon />, title: "30g fats" },
  { id: 3, icon: <ProteinIcon />, title: "20g proteins" },
  { id: 4, icon: <GrassIcon />, title: "50g carbo" },
];

export const ingredientsData = [
  { id: 1, icon: <WheatIcon />, title: "Wheat Flour", para: "100gr" },
  { id: 2, icon: <SugarIcon />, title: "Sugar", para: "3tbsp" },
  { id: 3, icon: <BakingSodaIcon />, title: "Baking Soda", para: "2tbsp" },
  { id: 4, icon: <EggIngredientIcon />, title: "Eggs", para: "2 Items" },
];

export const MealDetailTimeline = [
  {
    id: 1,
    time: "01",
    title: "Step 1",
    description: "Prepare all of the ingredients that needed",
  },
  {
    id: 2,
    time: "02",
    title: "Step 2",
    description: "Mix flour, sugar, salt, and baking powder",
  },
  {
    id: 3,
    time: "03",
    title: "Step 3",
    description:
      "In a seperate place, mix the eggs and liquid milk until blended",
  },
  {
    id: 4,
    time: "04",
    title: "Step 4",
    description:
      "Put the egg and milk mixture into the dry ingredients, Stir untul smooth and smooth",
  },
  {
    id: 5,
    time: "05",
    title: "Step 5",
    description: "Prepare all of the ingredients that needed",
  },
];

export const todaySchedule = [
  {
    id: 1,
    icon: <BedIcon />,
    title: "Bedtime,",
    time: "09:00pm",
    hours: "6",
    minutes: "22",
  },
  {
    id: 21,
    icon: <AlarmIcon />,
    title: "Alarm,",
    time: "05:10am",
    hours: "14",
    minutes: "30",
  },
];

export const resultProgressBarData = [
  { id: 1, start: "67", end: "33", title: "Lose Weight" },
  { id: 2, start: "88", end: "12", title: "Height Increase" },
  { id: 3, start: "57", end: "43", title: "Muscle Mass Increase" },
  { id: 4, start: "89", end: "11", title: "ABS", marginbottom: "30%" },
];

export const findFriendsData = [
  { id: 1, icon: <FacebookIcon />, title: "Invite from Facebook" },
  { id: 2, icon: <InstagramIcon />, title: "Invite from Instagram" },
];

export const tabData = [
  {
    id: 1,
    icon: <NotificationIcon />,
    title: "Notification",
    sub: "Pop-up Notification",
  },
  {
    id: 2,
    icon: <DarkmodeIcon />,
    title: "Dark Mode",
    sub: "Turn on Dark Mode",
  },
];


export const LoginMethods = [
  {id:1 , icon: <FbLogin/>},
  {id:2 , icon: <GoogleIcon/>}
]