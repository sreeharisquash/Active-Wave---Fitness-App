import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import Header from "../../components/header/Header";
import { findFriendsData } from "../../constants/Constants";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const FindFriends = () => {

    const navigation = useNavigation();

    const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
      <Header title="Find Friends" />
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/png/friends.png")} />
      </View>
      <Text
        style={[
          CommonStyles.headingFour,
          { textAlign: "center", width: "70%", alignSelf: "center" },
        ]}
      >
        Best Fitness app to make Closest Friends
      </Text>
      <View style={{marginBottom:"15%" , paddingTop:"7%"}}>
      {findFriendsData.map((item) => (
        <TouchableOpacity key={item.id} style={[styles.buttons , {borderColor:theme.color}]}>
          {item.icon}
          <Text style={{color:theme.color}}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      </View>
      <View style={styles.absoluteContainer}>
      <CommonButton label="Back to Home" onPress={() => navigation.navigate("Pagewrapper")}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: "15%",
    alignItems: "center",
  },
  buttons: {
    borderWidth: 0.3,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:"5%",
    marginBottom:"5%",
    borderRadius:12,
    gap:15
  },
  absoluteContainer:{
    position:"absolute",
    bottom:0,
    width:"100%",
  }
});
export default FindFriends;
