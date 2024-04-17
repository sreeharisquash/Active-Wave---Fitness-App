import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import themeContext from "../../components/theme/themeContext";

const HeightPage = () => {
  const [unit, setUnit] = useState("cm");
  const [height, setHeight] = useState(160);
  const [selectedIndex, setSelectedIndex] = useState(60);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollViewRef.current.scrollTo({
      y: selectedIndex * 40,
      animated: true,
    });
  }, [selectedIndex]);

  const renderPickerItems = () => {
    const items = [];
    for (let i = 100; i <= 200; i++) {
      items.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            setHeight(i);
            setSelectedIndex(i - 100);
          }}
          style={[
            selectedIndex === i - 100
              ? styles.selectedItem 
              : styles.pickerItemContainer
          ]}
        >
          <Text
            style={
              selectedIndex === i - 100
                ? [styles.pickerItem, styles.selectedItemText]
                : [styles.pickerItem , {color:theme.color}]
            }
          >
            {unit === "cm" ? `${i} cm` : `${convertToFeet(i)}`}
          </Text>
        </TouchableOpacity>
      );
    }
    return items;
  };

  const convertToFeet = (cm) => {
    const inches = cm * 0.393701;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}'${remainingInches}"`;
  };

  const theme = useContext(themeContext);

  return (
    <View style={styles.contents}>
      <Text style={[CommonStyles.headingFive , {color:theme.color}]}>What’s your height?</Text>
      <Text
        style={[
          CommonStyles.paragraph,
          { textAlign: "center", marginVertical: "5%" , color:theme.color },
        ]}
      >
        It’ll help us adjust the workouts to best suit your physique.
      </Text>
      <View style={styles.heightPicker}>
        <TouchableOpacity onPress={() => setUnit("cm")}>
          <Text style={[unit === "cm" ? styles.selectedUnit  :  [styles.unit , {color:theme.color}]]}>
            cm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit("ft")}>
        <Text style={[unit === "ft" ? styles.selectedUnit:  [styles.unit , {color:theme.color}]]}>
            ft
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerContainer}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollView}
        >
          {renderPickerItems()}
        </ScrollView>
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
  heightPicker: {
    flexDirection: "row",
    marginTop: "5%",
  },
  selectedItem: {
    backgroundColor: "#C1063D",
    padding: 5,
    borderRadius: 30,
  },
  pickerItemContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    position: "relative",
    marginTop: "5%",
    height: 270,
    width: "100%",
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  pickerItem: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "#000",
    paddingVertical: 10,
  },
  unit: {
    fontSize: 18,
    marginHorizontal: 10,
    // color: "#000",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  selectedUnit: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C1063D",
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
  },
  selectedItemText: {
    color: "white",
  },
});

export default HeightPage;
