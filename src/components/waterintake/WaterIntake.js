import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CommonStyles } from "../commonstyles/CommonStyles";
import { Svg, Rect } from "react-native-svg";
import Timeline from "react-native-timeline-flatlist";
import { HomeTimeLineData } from "../../constants/Constants";

const WaterIntake = () => {
  const [fillHeight, setFillHeight] = useState(0);
  const data = [50]; 
  const barWidth = 30; 
  const barSpacing = 10; 
  const chartHeight = 400; 

  const timelineData = HomeTimeLineData;
  const chartWidth = (barWidth + barSpacing) * data.length;

  const maxValue = Math.max(...data);

  useEffect(() => {
    const targetFillHeight = (0.6 * data[0] * chartHeight) / maxValue;

    const animationInterval = setInterval(() => {
      setFillHeight((prevHeight) => {
        if (prevHeight < targetFillHeight) {
          return prevHeight + 5;
        } else {
          clearInterval(animationInterval);
          return targetFillHeight;
        }
      });
    }, 10);

    return () => clearInterval(animationInterval);
  }, [data, maxValue, chartHeight]);

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={chartHeight}>
        <Rect
          x={0}
          y={0}
          width={barWidth}
          height={chartHeight}
          fill="#CCCCCC"
          rx={10}
          ry={10}
        />
        {/* Filled portion of the bar */}
        <Rect
          x={0}
          y={chartHeight - fillHeight}
          width={barWidth}
          height={fillHeight}
          rx={10}
          ry={10}
          fill="#C1063D"
        />
      </Svg>
      <View>
        <Text style={[CommonStyles.paragraph, { fontWeight: "500" }]}>
          Water Intake
        </Text>
        <Text style={[CommonStyles.headingMain, { color: "#C1063D" }]}>
          4 Liters
        </Text>
        <View>
          <Text style={CommonStyles.paragraph}>Real time updates</Text>
        </View>
        <View style={{ paddingTop: "10%" }}>
          <Timeline
            data={timelineData}
            circleColor="#C1063D"
            lineColor="lightgrey"
            eventContainerStyle={{
              borderStyle: "dashed",
            }}
            showTime={false}
            titleStyle={styles.titleStyles}
            descriptionStyle={styles.description}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    // width: "49%",
    paddingLeft: "2%",
    paddingRight: "2%",
    borderColor: "#888888",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleStyles: {
    color: "grey",
    fontSize: 12,
  },
  description: {
    color: "#C1063D",
    fontSize: 15,
  },
});

export default WaterIntake;
