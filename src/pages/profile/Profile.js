import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import ProfileIcon from "../../../assets/svg/profileImg.svg";
import Header from "../../components/header/Header";
import CommonButton from "../../components/commonbutton/CommonButton";
import {
  AccountDetailProfile,
  OtherDetailProfile,
  profileHeightAndWeight,
  tabData,
} from "../../constants/Constants";
import DetailIcon from "../../../assets/svg/GreaterThanIcon";
import { useNavigation } from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themeContext from "../../components/theme/themeContext";
import NotificationIcon from "../../../assets/svg/SimpleNotificationIcon";
import DarkModeIcon from "../../../assets/svg/DarkModeIcon";

const Profile = () => {
  const [selectedData, setSelectedData] = useState();

  const handleSelect = (item) => {
    setSelectedData(item);
  };

  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const [switchStates, setSwitchStates] = useState({});

  const toggleSwitch = () => {
    setSwitchStates(!switchStates);
  };

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          setDarkMode(JSON.parse(darkModeState));
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      }
    };

    loadDarkModeState();
  }, []);

  useEffect(() => {
    const saveDarkModeState = async () => {
      try {
        await AsyncStorage.setItem("darkMode", JSON.stringify(darkMode));
      } catch (error) {
        console.error("Error saving dark mode state:", error);
      }
    };

    saveDarkModeState();
  }, [darkMode]);

  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginBottom: "10%" }}>
      <View
        style={[CommonStyles.container, { backgroundColor: theme.background }]}
      >
        <Header title="Profile" />
        <View style={styles.profileContainer}>
          <View style={styles.nameImg}>
            <ProfileIcon />
            <View>
              <Text style={[CommonStyles.headingFour, { color: theme.color }]}>
                Satoru Gojo
              </Text>
              <Text style={[CommonStyles.paragraph, { color: theme.color }]}>
                Lose a Fat Program
              </Text>
            </View>
          </View>
          <View>
            <CommonButton label="Edit" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "10%",
            gap: 8,
            paddingBottom: "10%",
          }}
        >
          {profileHeightAndWeight.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.containPersonDetail,
                { borderColor: selectedData === item ? "#C1063D" : "#888888" },
                {
                  backgroundColor:
                    selectedData === item ? theme.color : theme.background,
                },
              ]}
              onPress={() => handleSelect(item)}
            >
              <Text
                style={[
                  CommonStyles.fontRed,
                  { fontWeight: "500", fontSize: 20, textAlign: "center" },
                ]}
              >
                {item.measure}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: selectedData === item ? theme.background : theme.color,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.shadowContainer, { backgroundColor: theme.grey }]}>
          <Text style={[CommonStyles.headingFour, { color: theme.color }]}>
            Account
          </Text>
          <View style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            {AccountDetailProfile.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.accountItems}
                onPress={() => navigation.navigate(item.page)}
              >
                <View style={styles.iconTitle}>
                  {item.icon}
                  <Text style={{ color: theme.color }}>{item.title}</Text>
                </View>
                <DetailIcon />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={[styles.shadowContainer, { backgroundColor: theme.grey }]}>
          <Text style={[CommonStyles.headingFour, { color: theme.color }]}>
            Notification
          </Text>
          <View style={styles.notificationIcon}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <NotificationIcon />
              <Text style={{ color: theme.color }}>Pop-up Notification</Text>
            </View>
            <Switch
              trackColor={{ false: "grey", true: "#C1063D" }}
              thumbColor={isEnabled ? "white" : "white"}
              value={switchStates}
              onValueChange={() => toggleSwitch()}
            />
          </View>
        </View>
        <View style={[styles.shadowContainer, { backgroundColor: theme.grey }]}>
          <Text style={[CommonStyles.headingFour, { color: theme.color }]}>
            Dark Mode
          </Text>
          <View style={styles.notificationIcon}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <DarkModeIcon />
              <Text style={{ color: theme.color }}>Enable Dark Mode</Text>
            </View>
            <Switch
              trackColor={{ false: "grey", true: "#C1063D" }}
              thumbColor={darkMode ? "white" : "white"}
              value={darkMode}
              onValueChange={(value) => {
                setDarkMode(value);
                EventRegister.emit("ChangeTheme", value);
              }}
            />
          </View>
        </View>

        <View style={[styles.shadowContainer, { backgroundColor: theme.grey }]}>
          <Text style={[CommonStyles.headingFour, { color: theme.color }]}>
            Other
          </Text>
          <View style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            {OtherDetailProfile.map((item) => (
              <TouchableOpacity key={item.id} style={styles.accountItems}>
                <View style={styles.iconTitle}>
                  {item.icon}
                  <Text style={{ color: theme.color }}>{item.title}</Text>
                </View>
                <DetailIcon />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameImg: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  containPersonDetail: {
    gap: 10,
    flex: 1,
    borderWidth: 1,
    padding: "7%",
    borderRadius: 5,
  },
  accountItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
  },
  iconTitle: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  shadowContainer: {
    padding: "5%",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 3,
    marginBottom: "5%",
  },
  notificationIcon: {
    paddingTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Profile;
