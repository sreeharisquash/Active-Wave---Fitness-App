import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const LineChartComponent = () => {

  const handleDataPointClick = ({ value, dataset, getColor }) => {
    console.log("Clicked Value:", value);
    console.log("Dataset:", dataset);
    console.log("Color:", getColor());
  };
  
  return (
    <LineChart
      data={{
        datasets: [
          {
            data: [
              Math.random() * 10,
              Math.random() * 40,
              Math.random() * 10,
              Math.random() * 11,
              Math.random() * 50,
              Math.random() * 30,
              Math.random() * 15,
              Math.random() * 18,
              Math.random() * 30,
              Math.random() * 21,
              Math.random() * 19,
              Math.random() * 27,
              Math.random() * 35,
              Math.random() * 50,
              Math.random() * 55,
              Math.random() * 25,

            ],
          },
        ],
      }}
      width={Dimensions.get("window").width}
      height={200}
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      withVerticalLabels={false}
      withHorizontalLabels={false}
      onDataPointClick={handleDataPointClick} 
      chartConfig={{
        backgroundColor: "#C1063D",
        backgroundGradientFrom: "#C1063D",
        backgroundGradientTo: "#C1063D",
        decimalPlaces: 2,
        color: (opacity = 1) => "white",
        labelColor: (opacity = 1) => "#C1063D",
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "white",
        },
        bezier: false,
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default LineChartComponent;
