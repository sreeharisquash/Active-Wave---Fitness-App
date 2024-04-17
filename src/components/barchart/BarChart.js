import React from "react";
import { View } from "react-native";

import { BarChart } from "react-native-gifted-charts";

const BarChartComponent = () => {
  const data = [
    { value: 35 },
    { value: 80 },
    { value: 45 },
    { value: 85 },
    { value: 60 },
    { value: 80 },
    { value: 30 },
  ];

  return (
    <View>
      <BarChart
        data={data}
        isAnimated={true}
        showPointerStrip={false}
        hideYAxisText={true}
        hideAxesAndRules={true}
        xAxisLabelTexts={["Sun", "Mun", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        xAxisLabelTextStyle={{ color: "grey" }}
        barBorderRadius={30}
        frontColor={"#C1063D"}
      />
    </View>
  );
};

export default BarChartComponent;
