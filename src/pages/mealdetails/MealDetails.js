import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import BackButton from "../../../assets/svg/BackButton";
import MainImg from "../../../assets/svg/mainImg.svg";
import LikeIcon from "../../../assets/svg/heartIcon.svg";
import {
  MealDetailTimeline,
  ingredientsData,
  mealsDetailData,
} from "../../constants/Constants";
import Carousel from "react-native-snap-carousel";
import Timeline from "react-native-timeline-flatlist";
import CommonButton from "../../components/commonbutton/CommonButton";
import themeContext from "../../components/theme/themeContext";

const MealDetails = () => {
  renderItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.containItems}>
        {item.icon}
        <Text>{item.title}</Text>
      </View>
    );
  };
  const theme = useContext(themeContext);

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
            <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Blueberry Pancake</Text>
            <Text style={[CommonStyles.innerParagraphs , {color:theme.color}]}>by Saturo Gojo</Text>
          </View>
          <LikeIcon />
        </View>
        <Text
          style={[
            CommonStyles.headingSix,
            { marginTop: "5%", marginBottom: "5%" , color:theme.color},
          ]}
        >
          Nutrition
        </Text>
        <Carousel
          loop={true}
          data={mealsDetailData}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={120}
        ></Carousel>
        <View style={{ marginVertical: "10%" }}>
          <Text style={[CommonStyles.headingSix , {color:theme.color}]}>Descriptions</Text>
          <Text style={[CommonStyles.innerParagraphs, { marginTop: "3%" , color:theme.color}]}>
            Pancakes are some people's favorite breakfast, who doesn't like
            pancakes? Especially with the real honey splash on top of the
            pancakes, of course everyone loves that! besides being{" "}
            <Text style={CommonStyles.fontRed}>Read More...</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[CommonStyles.headingFour, {color:theme.color}]}>
            Ingredients That You Will Need
          </Text>
          <Text style={{color:theme.color}}>6 Items</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "6%",
          }}
        >
          {ingredientsData.map((item) => (
            <View key={item.id} style={styles.ingredients}>
              <View style={styles.imageContainer}>{item.icon}</View>
              <Text style={{ textAlign: "center" , color:theme.color}}>{item.title}</Text>
              <Text style={styles.paragraphFont}>{item.para}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            marginTop: "5%",
            marginBottom: "5%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[CommonStyles.headingFour , {color:theme.color}]}>Step by Step</Text>
          <Text style={{color:theme.color}}>8 Steps</Text>
        </View>
        <View style={{ marginBottom: "8%" }}>
          <Timeline
            data={MealDetailTimeline}
            circleColor="#C1063D"
            lineColor="lightgrey"
            titleStyle={{color:theme.color}}
            descriptionStyle={{color:theme.color}}
            eventContainerStyle={{
              borderStyle: "dashed",
            }}
            timeStyle={CommonStyles.fontRed}
          />
        </View>
        <View style={{marginBottom:"5%"}}>
            <CommonButton label="Add To Breakfast Meal"/>
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
    marginTop: "-25%",
  },
  containItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#FFE4EC",
    paddingHorizontal: "6%",
    paddingVertical: "8%",
    borderRadius: 12,
  },
  ingredients: {},
  imageContainer: {
    backgroundColor: "#FFE4EC",
    // width:"200%",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    // paddingVertical:"20%",
    paddingHorizontal: "6%",
    borderRadius: 12,
    marginBottom: "5%",
  },
  paragraphFont: {
    textAlign: "center",
    color: "grey",
    marginTop: "5%",
  },
});

export default MealDetails;
