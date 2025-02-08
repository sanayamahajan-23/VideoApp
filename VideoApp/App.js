import React from "react";
import { StyleSheet, StatusBar } from "react-native"; // ✅ Import StyleSheet
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./AuthScreen";
import VideoListScreen from "./VideoListScreen";
import VideoDetailScreen from "./VideoDetailScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="VideoList" component={VideoListScreen} />
         <Stack.Screen name="VideoDetail" component={VideoDetailScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
