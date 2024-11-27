

import * as React from "react";
import { Text, View, FlatList, StyleSheet, StatusBar, Image } from "react-native";
import {
  createStaticNavigation,
  useNavigation
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const DATA = [
  {
    id: 1,
    title: "Breaking News: Major Tech Breakthrough Announced",
    image: "https://loremflickr.com/320/240/news"
  },
  {
    id: 2,
    title: "Global Markets Rally Amid Positive Economic Outlook",
    image: "https://loremflickr.com/320/240/finance"
  },
  {
    id: 3,
    title: "Sports Update: Local Team Wins Championship",
    image: "https://loremflickr.com/320/240/sports"
  },
  {
    id: 4,
    title: "Health Alert: New Research Highlights Wellness Tips",
    image: "https://loremflickr.com/320/240/health"
  },
  {
    id: 5,
    title: "Weather Forecast: Storms Predicted in Coastal Areas",
    image: "https://loremflickr.com/320/240/weather"
  },
  {
    id: 6,
    title: "Entertainment Buzz: Upcoming Blockbuster Movie Preview",
    image: "https://loremflickr.com/320/240/entertainment"
  },
  {
    id: 7,
    title: "Travel Insights: Top Destinations for 2024",
    image: "https://loremflickr.com/320/240/travel"
  },
  {
    id: 8,
    title: "Science Spotlight: Mars Rover Sends New Images",
    image: "https://loremflickr.com/320/240/science"
  },
  {
    id: 9,
    title: "Education News: Scholarships Announced for Students",
    image: "https://loremflickr.com/320/240/education"
  },
  {
    id: 10,
    title: "Technology Trends: AI Advancements Shape the Future",
    image: "https://loremflickr.com/320/240/technology"
  }
];


const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={{width: 100, height: 100}}
      src={image}
    />
  </View>
);


export default function MyListScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Text>My List Screen</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} image={item.image}  />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 24
  }
});