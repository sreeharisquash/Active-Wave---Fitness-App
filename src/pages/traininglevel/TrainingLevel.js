import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { TrainingLevelData } from "../../constants/Constants";
import SelectedIcon from '../../../assets/svg/selectIconBig.svg'
import NonSelectedIcon from '../../../assets/svg/nonselectIcon.svg'
import themeContext from "../../components/theme/themeContext";


const TrainingLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState();

  const handleLevel = (item) => {
    setSelectedLevel(item);
  };

  const theme = useContext(themeContext);

  return (
    <View style={styles.contents}>
      <Text style={[CommonStyles.headingFive , {color:theme.color}]}>Choose Training level</Text>
      <Text
        style={[
          CommonStyles.paragraph,
          { textAlign: "center", marginTop: "5%" , color:theme.color },
        ]}
      >
        varius laoreet. Quisque rutrum. Aenean imperdiet
      </Text>
      <View style={{ marginTop: "15%" , width:"90%" }}>
        {TrainingLevelData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.trainingLevel,
              { borderColor: selectedLevel === item ? "#C1063D" : "#888888" },
              { backgroundColor: selectedLevel === item ? "#FFE4EC" : "white" },
            ]}
            onPress={() => handleLevel(item)}
          >
            {selectedLevel === item ? <SelectedIcon/> : <NonSelectedIcon/>}
            <View style={{flexDirection:"row" , justifyContent:"space-between" , width:"80%" , alignItems:"center"}}>
            <Text style={CommonStyles.headingSix}>{item.title}</Text>
            {item.image}
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
  trainingLevel: {
    flexDirection:"row",
    alignItems:"center",
    gap:20,
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "5%",
    // paddingRight: "5%",
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: "5%",
  },
});
export default TrainingLevel;
