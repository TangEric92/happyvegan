import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import RestaurantItem from "./RestaurantItem";

export default function Explore(props) {
  const { datas } = props;
  if (!datas) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <View style={styles.filterZone}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => console.log("Pressed!")}
        >
          <View>
            <Text> Vegan </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => console.log("Pressed!")}
        >
          <View>
            <Text> Vegetarian </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => console.log("Pressed!")}
        >
          <View>
            <Text> Veg-options </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => console.log("Pressed!")}
        >
          <View>
            <Text> Filter </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "lightgrey",
          marginBottom: 5,
          marginTop: 5,
          marginHorizontal: 25
        }}
      />
      <FlatList
        data={datas}
        keyExtractor={item => item.placeId}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={{
              //height: 1,
              backgroundColor: "lightgrey",
              marginBottom: 5,
              marginTop: 5,
              marginHorizontal: 25
            }}
          />
        )}
        contentContainerStyle={{
          justifyContent: "center"
        }}
        renderItem={({ item }) => (
          <View>
            <RestaurantItem item={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterZone: { flexDirection: "row", margin: 5 },
  filterButton: {
    backgroundColor: "#fff",
    borderColor: "grey",
    borderRadius: 5,
    width: "22%",
    alignItems: "center",
    height: 60,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  }
});
