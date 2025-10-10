import SearchBar from "@/components/ui/SearchBar";
import Tabs from "@/components/ui/Tabs";
import MyImpact from "@/donation/MyImpact";
import Saved from "@/donation/Saved";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Explore from "../../donation/Explore"; // ✅ import your Explore component
import { horizontalScale, verticalScale } from "../../theme/Metrics";

export default function Donation() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Tabs
          tabs={[
            { label: "Explore" },
            { label: "My Impact", count: 12 },
            { label: "Saved", count: 12 },
          ]}
          defaultIndex={0}
          onTabChange={(index) => setSelectedTab(index)}
        />
      </View>

      <View style={styles.searchBar}>
        <SearchBar />
      </View>

      {/* ✅ Render content based on tab */}
      {selectedTab === 0 && <Explore />}
      {selectedTab === 1 && <MyImpact />}
      {selectedTab === 2 && <Saved />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabs: {
    paddingHorizontal: horizontalScale(16),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  searchBar: {
    marginHorizontal: horizontalScale(16),
    marginBottom: verticalScale(10),
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
