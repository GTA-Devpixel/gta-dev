import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const accountImage = require("../../assets/images/account-image1.png");

export default function TabsLayout() {
  const insets = useSafeAreaInsets(); // 👈 ensures proper handling when app resumes

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70 + insets.bottom, // 👈 dynamically includes safe area
          paddingTop: 8,
          paddingBottom: insets.bottom > 0 ? insets.bottom - 4 : 8, // 👈 stable padding
          borderTopWidth: 1,
          borderColor: "#DADADA",
          backgroundColor: "#FFF",
          position: "absolute",
        },
        tabBarActiveTintColor: "#EA2934",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 2,
        },
        headerBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              borderBottomWidth: 1,
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
          />
        ),
        headerShadowVisible: false,
        headerTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="volunteer-activism"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
