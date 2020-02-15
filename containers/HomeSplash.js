import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function HomeSplash() {
  // utiliser la redirection
  const navigation = useNavigation();
  setTimeout(() => navigation.replace("TabScreen"), 3000);

  return (
    <View style={{ backgroundColor: "#FF5A5F" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
