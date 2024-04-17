import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/Routes/Router";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import  themeContext  from "./src/components/theme/themeContext";
import { Provider } from "react-redux";
import theme from "./src/components/theme/theme";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="white"
          animated={true}
        />
        <Router />
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
