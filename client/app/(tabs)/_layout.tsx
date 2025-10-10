import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

const accountImage = require("../../assets/images/account-image1.png");

export default function TabsLayout() {
  const insets = useSafeAreaInsets(); // 👈 ensures proper handling when app resumes

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: verticalScale(70) + insets.bottom, // scaled base height + safe area
          paddingTop: verticalScale(8),
          paddingBottom: insets.bottom > 0 ? insets.bottom - verticalScale(4) : verticalScale(8), // scaled padding
          borderTopWidth: verticalScale(1),
          borderColor: "#DADADA",
          backgroundColor: "#FFF",
          position: "absolute",
        },
        tabBarActiveTintColor: "#EA2934",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: moderateScale(12),
          marginBottom: verticalScale(2),
        },
        headerBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              borderBottomWidth: verticalScale(1),
              borderBottomColor: "#DADADA",
            }}
          />
        ),
        headerTitleStyle: {
          color: "#000",
          fontSize: moderateScale(20),
          fontWeight: "700",
        },
        headerRight: () => (
          <Image
            source={accountImage}
            style={{
              width: horizontalScale(40),
              height: verticalScale(40),
              marginRight: horizontalScale(12),
              borderRadius: moderateScale(20),
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
            <MaterialIcons name="home" color={color} size={moderateScale(26)} />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" color={color} size={moderateScale(26)} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" color={color} size={moderateScale(26)} />
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
              size={moderateScale(26)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={moderateScale(26)} />
          ),
        }}
      />
    </Tabs>
  );
}
