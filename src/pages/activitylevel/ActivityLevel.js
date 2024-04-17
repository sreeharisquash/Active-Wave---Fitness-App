import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { ActivityLevelData } from "../../constants/Constants";
import SelectedActivityIcon from "../../../assets/svg/selectIconBig.svg";
import NonSelectedActivityIcon from "../../../assets/svg/nonselectIcon.svg";
import themeContext from "../../components/theme/themeContext";

const ActivityLevel = () => {
  const [selectActivityLevel, setSelectActivityLevel] = useState();

  const handleActivityLevel = (item) => {
    setSelectActivityLevel(item);
  };
  const theme = useContext(themeContext);

  return (
    <View style={styles.contents}>
      <Text style={[CommonStyles.headingFive, { color: theme.color }]}>
        Choose Your activity level?
      </Text>
      <Text
        style={[
          CommonStyles.paragraph,
          { textAlign: "center", marginTop: "5%", color: theme.color },
        ]}
      >
        This helps us create your personalized plan
      </Text>
      <View style={{ marginTop: "20%" }}>
        {ActivityLevelData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.activityContain,
              {
                borderColor:
                  selectActivityLevel === item ? "#C1063D" : "#888888",
              },
              {
                backgroundColor:
                  selectActivityLevel === item ? "#FFE4EC" : "white",
              },
            ]}
            onPress={() => handleActivityLevel(item)}
          >
            {selectActivityLevel === item ? (
              <SelectedActivityIcon />
            ) : (
              <NonSelectedActivityIcon />
            )}
            <View>
              <Text style={CommonStyles.headingSix}>{item.title}</Text>
              <Text style={CommonStyles.paragraph}>{item.subtitle}</Text>
            </View>
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
  activityContain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    borderWidth: 1.5,
    paddingVertical: "5%",
    marginBottom: "5%",
    paddingHorizontal: "7%",
    borderRadius: 10,
  },
});

export default ActivityLevel;
