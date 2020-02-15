import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";

import Favorite from "./Favorite";
import Explore from "./Explore";
import Me from "./Me";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    axios
      .get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      )
      .then(response => {
        setDatas(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore">{() => <Explore datas={datas} />}</Tab.Screen>
      <Tab.Screen name="Me">{() => <Me />}</Tab.Screen>
      <Tab.Screen name="Favorite">{() => <Favorite />}</Tab.Screen>
    </Tab.Navigator>
  );
}
