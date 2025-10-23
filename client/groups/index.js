import Explore from "./Explore";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import MyGroups from "./MyGroups";
import { horizontalScale, moderateScale, verticalScale } from "../theme/Metrics";
// import Button from "@components/ui/Button"

export default function Groups() {
  const [selectedTab, setSelectedTab] = useState(1);

  // 🔹 Tabs data in one place
  const tabs = [
    { id: 1, label: "Explore" },
    { id: 2, label: "My Groups" },
    { id: 3, label: "Requests" },
  ];

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <Pressable
            key={tab.id}
            onPress={() => setSelectedTab(tab.id)}
            style={[styles.tab, selectedTab === tab.id && styles.activeTab]}
          >
            <Text
              style={[styles.tabText, selectedTab === tab.id && styles.activeTabText]}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Search bar */}
      <View style={styles.searchBarDiv}>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search" />
        </View>
      </View>

      {/* Content */}
      <View style={{ flex: 1}}>
        {selectedTab === 1 && <Explore />}
        {selectedTab === 2 && <MyGroups />}
        {selectedTab === 3 && <Text>Requests content goes here</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  tabs: {
    height: verticalScale(47),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(8),
  },
  tabText: {
    fontSize: moderateScale(16),
    color: "#757575",
    fontWeight: "700",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#EA2934", // red underline
  },
  activeTabText: {
    color: "#EA2934",
  },
  searchBarDiv: {
    height: verticalScale(80),
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: horizontalScale(16),
    paddingRight: horizontalScale(16),
    paddingBottom: verticalScale(12),
    paddingTop: verticalScale(20),
  },
  searchBar: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: moderateScale(99),
    borderColor: "#BFCBDC",
    borderWidth: 1,
    paddingLeft: horizontalScale(16),
    paddingRight: horizontalScale(16),
  },
});
