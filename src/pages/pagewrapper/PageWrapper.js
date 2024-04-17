import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TabIcons } from "../../constants/Constants";
import Homepage from "../home/Homepage";
import Profile from "../profile/Profile";
import ActivityTracker from "../activitytracker/ActivityTracker";
import themeContext from "../../components/theme/themeContext";

const PageWrapper = () => {
  const [selectedPage, setSelectedPage] = useState("Homepage");

  const theme = useContext(themeContext);

  const renderPage = () => {
    switch (selectedPage) {
      case "Homepage":
        return <Homepage />;
      case "Activity Tracker":
        return <ActivityTracker />;
      case "Profile":
        return <Profile />;
      default:
        return <Homepage />;
    }
  };
  return (
    <>
      {renderPage()}
      <View style={[styles.container , {backgroundColor: theme.background}]}>
        {TabIcons.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedPage(item.page)}
          >
            {selectedPage === item.page ? item.selectedIcon : item.icon}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 1,
    shadowRadius: 90,
    elevation: 10,
  },
});
export default PageWrapper;
