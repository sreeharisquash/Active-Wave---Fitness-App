import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { MainGoalData } from "../../constants/Constants";
import SelectedIcon from "../../../assets/svg/selectIconBig.svg";
import NonSelectedIcon from "../../../assets/svg/nonselectIcon.svg";
import themeContext from "../../components/theme/themeContext";

const MainGoal = () => {
  const [selectedGoal, setSelectedGoal] = useState();

  const handleSelectedGoal = (item) => {
    setSelectedGoal(item);
  };

  const theme = useContext(themeContext);

  return (
    <View style={styles.contents}>
      <Text style={[CommonStyles.headingFive, { color: theme.color }]}>
        What’s your main goal?
      </Text>
      <Text
        style={[
          CommonStyles.paragraph,
          { textAlign: "center", marginTop: "5%", color: theme.color },
        ]}
      >
        We’ll tailor the best blend of strength and cardio training to align
        with your goal.
      </Text>
      <View style={{ width: "100%", gap: 20, paddingTop: 30 }}>
        {MainGoalData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.goalContain,
              { backgroundColor: selectedGoal === item ? "#FFE4EC" : "white" },
              { borderColor: selectedGoal === item ? "#C1063D" : "grey" },
              { borderWidth: selectedGoal === item ? 2 : 1 },
            ]}
            onPress={() => handleSelectedGoal(item)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 15,
              }}
            >
              {selectedGoal === item ? <SelectedIcon /> : <NonSelectedIcon />}
              <Text style={CommonStyles.headingSix}>{item.title}</Text>
            </View>
            {item.image}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  goalContain: {
    borderWidth: 1,
    // borderColor: "#C1063D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default MainGoal;
