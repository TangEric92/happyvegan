import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Favorite from "./Favorite";
import Explore from "./Explore";
import Me from "./Me";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore">{() => <Explore />}</Tab.Screen>
      <Tab.Screen name="Me">{() => <Me />}</Tab.Screen>
      <Tab.Screen name="Favorite">{() => <Favorite />}</Tab.Screen>
    </Tab.Navigator>
  );
}
