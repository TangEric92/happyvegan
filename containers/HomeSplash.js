import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function HomeSplash() {
  // utiliser la redirection
  const navigation = useNavigation();
  setTimeout(() => navigation.replace("TabScreen"), 2000);

  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
