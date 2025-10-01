import SearchBar from "@/components/ui/SearchBar";
import Tabs from "@/components/ui/Tabs";

import Explore from "@/events/Explore";
import MyEvents from "@/events/MyEvents";
import SavedEvents from "@/events/SavedEvents";

import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Events() {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Explore />;
      case 1:
        return <MyEvents />;
      case 2:
        return <SavedEvents />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <Tabs
          tabs={[
            { label: "Explore" },
            { label: "My Events", count: 12 },
            { label: "Saved Events", count: 12 },
          ]}
          defaultIndex={0}
          onTabChange={(index) => setSelectedTab(index)}
        />
      </View>

      {/* SearchBar (common across all tabs) */}
      <View style={styles.searchBar}>
        <SearchBar
          placeholder="Search events..."
          onChangeText={(text) => console.log(text)}
        />
      </View>

      {/* Conditional Content */}
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabs: {
    padding: 10,
  },
  searchBar: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
