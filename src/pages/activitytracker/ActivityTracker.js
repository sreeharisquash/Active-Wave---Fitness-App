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
import PlusIcon from "../../../assets/svg/plusIcon.svg";
import { TodayTargetData, filterData, latestActivityData } from "../../constants/Constants";
import { Dropdown } from "react-native-element-dropdown";
import DropdownOpenIcon from "../../../assets/svg/dropdownOpenIcon.svg";
import DropdownCloseIcon from "../../../assets/svg/dropdownCloseIcon.svg";
import BarChart from "../../components/barchart/BarChart";
import BarChartComponent from "../../components/barchart/BarChart";
import CommonButton from "../../components/commonbutton/CommonButton";
import MoreIcon from "../../../assets/svg/moreIcon.svg";
import themeContext from "../../components/theme/themeContext";

const ActivityTracker = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container, { marginBottom: "20%" ,  backgroundColor:theme.background }]}>
      <Header title="ActivityTracker" />
      <View style={styles.targetContainer}>
        <View style={styles.headIcon}>
          <Text style={[CommonStyles.headingMain, { fontSize: 15 }]}>
            Today Target
          </Text>
          <PlusIcon />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {TodayTargetData.map((item) => (
            <View key={item.id} style={styles.targetData}>
              {item.icon}
              <View>
                <Text
                  style={[
                    CommonStyles.fontRed,
                    { fontWeight: "500", fontSize: 15 },
                  ]}
                >
                  {item.title}
                </Text>
                <Text>{item.para}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Activity Progress</Text>
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
      <BarChartComponent />
      <View style={styles.latestActivity}>
        <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Latest Activity</Text>
        <View>
          <CommonButton label="See more" />
        </View>
      </View>
      <View style={{ marginBottom: "30%" }}>
        {latestActivityData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.latestActivityContainer}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {item.icon}
              <View>
                <Text style={CommonStyles.headingSix}>{item.title}</Text>
                <Text>{item.para}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <MoreIcon />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  targetContainer: {
    backgroundColor: "#C1063D",
    padding: "7%",
    borderRadius: 10,
    marginTop: "12%",
    marginBottom: "10%",
  },
  headIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "7%",
  },
  targetData: {
    backgroundColor: "white",
    padding: "5%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderRadius: 5,
  },
  Dropdown: {
    width: "30%",
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
  latestActivity: {
    paddingTop: "10%",
    paddingBottom: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  latestActivityContainer: {
    backgroundColor: "#EEEEEE",
    padding: "5%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ActivityTracker;
