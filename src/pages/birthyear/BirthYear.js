import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import themeContext from "../../components/theme/themeContext";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";

const ScrollingYearSelector = () => {
  const [years, setYears] = useState(generateYears());
  const [selectedYear, setSelectedYear] = useState(years[2]);
  const theme = useContext(themeContext);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const renderItem = (item) => {
    const yearStyles = [styles.yearItem];
    if (item === selectedYear) {
      yearStyles.push(styles.middleYear);
    }

    return (
      <TouchableOpacity onPress={() => handleYearSelect(item)}>
        <Text
          style={[
            yearStyles,
            { color: selectedYear === item ? "#C1063D" : theme.whiteorBlack },
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          CommonStyles.headingFive,
          { color: theme.color, marginTop: "10%" },
        ]}
      >
        What’s your birth year?
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
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <ScrollView
          contentContainerStyle={styles.yearsContainer}
          showsVerticalScrollIndicator={false}
          style={styles.yearsScroll}
        >
          {years.map((year) => renderItem(year))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = currentYear - 100; i <= currentYear + 100; i++) {
    years.push(i);
  }

  return years;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  yearsScroll: {
    maxHeight: 450,
  },
  yearsContainer: {
    alignItems: "center",
  },
  yearItem: {
    padding: 15,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    height: 70,
  },
  middleYear: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#FFE4EC",
    color: "#C1063D",
    borderWidth: 1,
    borderColor: "#C1063D",
    borderRadius: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default ScrollingYearSelector;
