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
import Statistic from "../../components/statistic/Statistic";
import Photo from "../../components/photo/Photo";
import themeContext from "../../components/theme/themeContext";

const Result = () => {
  const [activeTab, setActiveTab] = useState(2);

  const switches = [
    { id: 1, title: "Photo", condition: false },
    { id: 2, title: "Statistics", condition: true },
  ];

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Header title="Result" showShareIcon={true} />
      <View style={{ paddingTop: "10%" }}>
        <View style={[styles.tabContainer , {backgroundColor:theme.greyTabs}]}>
          {switches.map((item) => (
            <TouchableOpacity
              onPress={() => setActiveTab(item.id)}
              key={item.id}
              style={[
                styles.tabItem,
                {
                  backgroundColor:
                    activeTab === item.id ? "#C1063D" : theme.greyTabs,
                },
              ]}
            >
              <Text
                style={[
                  CommonStyles.headingSix,
                  { color: activeTab === item.id ? "white" : theme.color },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {activeTab === 1 ? <Photo /> : <Statistic />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: "98%",
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    padding: "3%",
    borderRadius: 30,
    justifyContent: "space-around",
    alignSelf: "center",
  },
  tabItem: {
    padding: "3%",
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Result;
