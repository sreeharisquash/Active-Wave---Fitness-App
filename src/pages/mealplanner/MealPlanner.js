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
import { Dropdown } from "react-native-element-dropdown";
import DropdownOpenIcon from "../../../assets/svg/dropdownOpenIcon.svg";
import DropdownCloseIcon from "../../../assets/svg/dropdownCloseIcon.svg";
import {
  MealsData,
  filterData,
  filterMealsData,
} from "../../constants/Constants";
import { LineChart } from "react-native-gifted-charts";
import NotificationIcon from "../../../assets/svg/greynotification.svg";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const MealPlanner = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const navigation = useNavigation();

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Header title="Schedule Workout" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10%",
        }}
      >
        <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Meal Nutritions</Text>
        <View style={styles.Dropdown}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconColor="white"
            data={filterData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Week" : "Week"}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => {
              setIsFocus(true);
              setIsDropdownOpen(true);
            }}
            onBlur={() => {
              setIsFocus(false);
              setIsDropdownOpen(false);
            }}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
              setIsDropdownOpen(false);
            }}
            renderRightIcon={() =>
              isDropdownOpen ? <DropdownCloseIcon /> : <DropdownOpenIcon />
            }
          />
        </View>
      </View>
      <View style={{ paddingTop: "15%", flex: 1 }}>
        <LineChart
          data={data1}
          isAnimated={true}
          showPointerStrip={false}
          color1="#C1063D"
          dataPointsColor1="#C1063D"
          dataPointsRadius1={5}
          curved={true}
          xAxisLabelTexts={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          hideOrigin={true}
          xAxisThickness={0}
          yAxisThickness={0}
        />
      </View>
      <View style={styles.redContainer}>
        <Text style={[CommonStyles.headingMain, { fontSize: 17 }]}>
          Daily Workout Schedule
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Mealdetails")}>
          <Text style={styles.checkContainer}>Check</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10%",
        }}
      >
        <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Today Meals</Text>
        <View style={styles.Dropdown2}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconColor="white"
            data={filterMealsData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Breakfast" : "Breakfast"}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => {
              setIsFocus(true);
              setIsDropdownOpen(true);
            }}
            onBlur={() => {
              setIsFocus(false);
              setIsDropdownOpen(false);
            }}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
              setIsDropdownOpen(false);
            }}
            renderRightIcon={() =>
              isDropdownOpen ? <DropdownCloseIcon /> : <DropdownOpenIcon />
            }
          />
        </View>
      </View>
      <View style={{ paddingTop: "10%", marginBottom: "30%" }}>
        {MealsData.map((item) => (
          <View key={item.id} style={[styles.mealsContainer , {backgroundColor:theme.grey}]}>
            <View
              style={{
                flexDirection: "row",
                gap: 15,
                alignItems: "center",
              }}
            >
              {item.image}
              <View>
                <Text style={[CommonStyles.headingSix , {color:theme.color}]}>{item.title}</Text>
                <Text style={{color:theme.color}}>{item.para}</Text>
              </View>
            </View>
            <NotificationIcon />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Dropdown: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
  },
  Dropdown2: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "#C1063D",
    borderRadius: 30,
    paddingLeft: "20%",
    paddingRight: "10%",
    width: "100%",
  },
  placeholderStyle: {
    color: "white",
  },
  selectedTextStyle: {
    color: "white",
  },
  inputSearchStyle: {
    color: "white",
  },
  iconStyle: {
    color: "white",
  },
  redContainer: {
    backgroundColor: "#C1063D",
    paddingHorizontal: "5%",
    paddingVertical: "7%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10%",
    marginTop: "10%",
  },
  checkContainer: {
    backgroundColor: "white",
    color: "#C1063D",
    padding: "3%",
    borderRadius: 15,
  },
  mealsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
    width: "98%",
    paddingHorizontal: "5%",
    paddingVertical: "8%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: "5%",
  },
});
export default MealPlanner;
