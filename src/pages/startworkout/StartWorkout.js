import React, { useContext, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import MainImg from "../../../assets/svg/startWorkoutImg.svg";
import BackButton from "../../../assets/svg/BackButton";
import LikeIcon from "../../../assets/svg/heartIcon.svg";
import {
  exercisesData,
  exercisesDataSet2,
  fullBodyWorkoutData,
  youWillNeedData,
} from "../../constants/Constants";
import MoreIcon from "../../../assets/svg/greaterThanIcon.svg";
import Carousel from "react-native-snap-carousel";
import PlayBtn from "../../../assets/svg/exercisePlayBtn.svg";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const StartWorkout = () => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const navigation = useNavigation();

  const theme = useContext(themeContext);

  renderItem = ({ item }) => {
    return (
      <View style={styles.slides}>
        <View style={styles.slideImg}>{item.image}</View>
        <Text style={{color:theme.color}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <ScrollView
        style={[CommonStyles.container, { backgroundColor: "#C1063D" }]}
      >
        {/* <StatusBar backgroundColor="#C1063D" /> */}
        <BackButton />
        <View style={styles.startWorkout}>
          <MainImg />
        </View>
      </ScrollView>
      <View style={[styles.poppedUpContainer , {backgroundColor:theme.background}]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: "2%",
          }}
        >
          <View style={{ gap: 6 }}>
            <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Fullbody Workout</Text>
            <Text style={[CommonStyles.innerParagraphs , {color:theme.color}]}>
              11 Exercises | 32mins | 320 Calories Burn
            </Text>
          </View>
          <LikeIcon />
        </View>
        <View style={{ marginTop: "8%" }}>
          {fullBodyWorkoutData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.singleContainer,
                {
                  backgroundColor: selectedItem === item ? "#FFE4EC" : "white",
                  borderColor: selectedItem === item ? "#C1063D" : "#888888",
                  borderWidth: selectedItem === item ? 1.5 : 0.5,
                },
              ]}
              onPress={() => handleSelect(item)}
            >
              <View style={styles.endSpace}>
                {item.icon}
                <Text>{item.title}</Text>
              </View>
              <View style={styles.endSpace}>
                <Text>{item.para}</Text>
                <MoreIcon />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[CommonStyles.headingFour , {color:theme.color}]}>You’ll Need</Text>
          <Text style={[styles.stepsFont , {color:theme.color}]}>5 Items</Text>
        </View>
        <Carousel
          loop={true}
          data={youWillNeedData}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={100}
        ></Carousel>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "5%",
          }}
        >
          <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Exercises</Text>
          <Text style={[styles.stepsFont , {color:theme.color}]}>3 Sets</Text>
        </View>
        <View>
          <Text style={{marginBottom:15 , fontWeight:"500" , color:theme.color}}>Set 1</Text>
          {exercisesData.map((item) => (
            <View key={item.id} style={styles.exercises}>
              <View style={{ flexDirection: "row", gap: 15 , alignItems:"center"}}>
                {item.image}
                <View>
                  <Text style={[CommonStyles.headingSix , {color:theme.color}]}>{item.title}</Text>
                  <Text style={{color:theme.color}}>{item.para}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <PlayBtn />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <Text style={{marginBottom:15, marginTop:10 , fontWeight:"500" , color:theme.color}}>Set 2</Text>
          {exercisesDataSet2.map((item) => (
            <View key={item.id} style={styles.exercises}>
              <View style={{ flexDirection: "row", gap: 15 , alignItems:"center"}}>
                {item.image}
                <View>
                  <Text style={[CommonStyles.headingSix , {color:theme.color}]}>{item.title}</Text>
                  <Text style={{color:theme.color}}>{item.para}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <PlayBtn />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={{marginBottom:"5%"}}>
          <CommonButton label="Start Workout" onPress={() => navigation.navigate("Mealplanner")}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  startWorkout: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "8%",
  },
  poppedUpContainer: {
    paddingTop: "10%",
    backgroundColor: "white",
    paddingHorizontal: "5%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: "-35%",
  },
  singleContainer: {
    borderWidth: 0.5,
    padding: "5%",
    borderRadius: 10,
    marginBottom: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  endSpace: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  stepsFont: {
    color: "#888888",
  },
  slides: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 120,
    marginBottom: "20%",
  },
  slideImg: {
    backgroundColor: "#EEEEEE",
    padding: "5%",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: "10%",
    marginBottom: "10%",
  },
  exercises: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    marginBottom:"5%"
  },
});

export default StartWorkout;
