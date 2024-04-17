import React, { useContext, useState } from "react";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BodyTypeData } from "../../constants/Constants";
import SelectIcon from "../../../assets/svg/selectionIcon.svg";
import themeContext from "../../components/theme/themeContext";

const BodyType = () => {
  const [selectedType, setSelectedType] = useState();

  const handleType = (item) => setSelectedType(item);

  const theme = useContext(themeContext);

  return (
    <View style={styles.contents}>
      <Text style={[CommonStyles.headingFive , {color:theme.color}]}>Set your body type</Text>
      <Text
        style={[
          CommonStyles.paragraph,
          { textAlign: "center", marginTop: "5%" , color:theme.color},
        ]}
      >
        varius laoreet. Quisque rutrum. Aenean ma
      </Text>
      <View style={styles.typeContainer}>
        {BodyTypeData.map((item) => (
          <View style={styles.mainContain} key={item.id}>
            <TouchableOpacity  onPress={() => handleType(item)}>
              <View
                style={[
                  styles.bodyType,
                  {
                    borderColor: selectedType === item ? "#C1063D" : "#888888",
                  },
                  {
                    backgroundColor:
                      selectedType === item ? "#FFE4EC" : "white",
                  },
                ]}
              >
                <View style={styles.typeSelect}>
                  {selectedType === item ? <SelectIcon /> : ""}
                </View>

                {item.image}
              </View>
            </TouchableOpacity>
            <Text style={[CommonStyles.headingSix, { textAlign: "center" , color:theme.color}]}>
              {selectedType === item ? item.type : ""}
            </Text>
          </View>
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
  typeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: "4%",
    paddingRight: "4%",
    marginTop: "20%",
  },
  bodyType: {
    borderWidth: 1.5,
    borderColor: "#888888",
    paddingLeft: "5%",
    paddingRight: "5%",
    alignItems: "center",
    paddingBottom: "15%",
    paddingTop: "7%",
    borderRadius: 15,
  },
  typeSelect: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  mainContain: {
    height: "60%",
  },
});
export default BodyType;
