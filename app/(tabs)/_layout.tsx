import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { View } from "react-native";

const accountImage = require("../../assets/images/account-image1.png");

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
  height: 86,
  paddingTop: 12,
  paddingBottom: 8,
  paddingHorizontal: 12,
  borderTopWidth: 1,          // 👈 better than borderWidth
  borderColor: "#DADADA",
  backgroundColor: "#FFF",
  position: "absolute",       // 👈 ensures fixed placement
},

        tabBarActiveTintColor: "#EA2934",

        headerBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              borderBottomWidth: 2,
              borderBottomColor: "#DADADA",
            }}
          />
        ),
        headerTitleStyle: {
          color: "#000",
          fontSize: 20,
          fontWeight: "700",
        },
        headerRight: () => (
          <Image
            source={accountImage}
            style={{
              width: 40,
              height: 40,
              marginRight: 12,
              borderRadius: 20,
            }}
            contentFit="contain"
          />
        ),
        headerShadowVisible: false, // disable default shadow
        headerTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="volunteer-activism"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
