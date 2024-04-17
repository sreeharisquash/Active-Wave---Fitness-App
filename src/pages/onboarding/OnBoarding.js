import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
// import themeContext from "../../components/theme/themeContext";
import { CommonStyles } from "../../components/commonstyles/CommonStyles";
import { OnBoardingData } from "../../constants/Constants";
import themeContext from "../../components/theme/themeContext";

const OnBoarding = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const handleSkip = () => {
    navigation.navigate("Signup");
  };

  const theme = useContext(themeContext);

  const Slide = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image
          source={item.image}
          style={{ height: "75%", width: "80%", resizeMode: "contain" }}
        />
        <Text style={[CommonStyles.headingFive , {color:theme.color}]}>{item.title}</Text>
        <Text style={[CommonStyles.paragraph, { textAlign: "center" , color:theme.color}]}>
          {item.para}
        </Text>
      </View>
    );
  };

  const handleNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
  };
  return (
    <View style={[styles.container , {backgroundColor:theme.background}]}>
      <TouchableOpacity onPress={handleSkip} style={styles.skipbtn}>
        <Text style={[styles.skiptologin, CommonStyles.fontRed , {color:theme.redorWhite}]}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={ref}
        data={OnBoardingData}
        contentContainerStyle={styles.flatListContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0) {
            setCurrentSlideIndex(viewableItems[0].index || 0);
          }
        }}
      />
      <View style={{ flexDirection: "row", gap: 2 }}>
        {OnBoardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicators,
              currentSlideIndex == index && { backgroundColor: "#C1063D" },
            ]}
          />
        ))}
      </View>
      {currentSlideIndex === OnBoardingData.length - 1 ? (
        <View style={{ width: "90%" }}>
          <CommonButton
            label="Get Started"
            style={styles.buttonCls}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      ) : (
        <View style={{ width: "90%" }}>
          <CommonButton
            label="Next"
            color="white"
            style={styles.buttonCls}
            onPress={handleNext}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%",
    // paddingLeft:"4%",
    // paddingRight:"4%"
  },
  slideContainer: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    padding: "10%",
  },
  //   buttonCls: {
  //     marginTop: 100,
  //   },
  flatListContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  indicators: {
    width: 7,
    height: 7,
    backgroundColor: "lightgrey",
    borderRadius: 100,
    marginTop: -100,
  },
  skipbtn: {
    paddingTop: "20%",
    alignSelf: "flex-end",
    marginRight: "5%",
  },
  skiptologin: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: "right",
  },
});

export default OnBoarding;
