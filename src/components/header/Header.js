import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../../assets/svg/BackButton";
import { CommonStyles } from "../commonstyles/CommonStyles";
import ShareIcon from "../../../assets/svg/shareIcon.svg";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../theme/themeContext";

const Header = ({ title, color, showShareIcon = false }) => {

  const navigation = useNavigation();

  const theme = useContext(themeContext);
  
  return (
    <View style={styles.header}>
      <BackButton color={color} />
      <View style={styles.titleContainer}>
        <Text
          style={[CommonStyles.headingFive, styles.title, { color: theme.color }]}
        >
          {title}
        </Text>
      </View>
      {showShareIcon ? (
        <TouchableOpacity onPress={() => navigation.navigate("Findfriends")}>
          <ShareIcon />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 50 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});

export default Header;
