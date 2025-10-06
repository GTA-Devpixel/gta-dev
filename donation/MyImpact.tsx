import EventCampaignCard from "@/components/ui/EventCampaignCard";
import Headdings from "@/components/ui/headdings";
import TabsNew from "@/components/ui/TabsNew";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MyImpact() {
  const [selectedTab, setSelectedTab] = useState(0);

  // 🧩 Sample data
  const campaigns = [
    {
      id: 1,
      title: "Building Old Age Home",
      raisedFund: 250000,
      targetFund: 500000,
      daysLeft: 12,
      image: require("@/assets/images/gta1.jpg"),
      isBookmarked: false,
      status: "inProgress",
    },
    {
      id: 2,
      title: "Scholarships for Students",
      raisedFund: 250000,
      targetFund: 500000,
      daysLeft: 10,
      image: require("@/assets/images/gta2.jpeg"),
      isBookmarked: true,
      status: "inProgress",
    },
    {
      id: 3,
      title: "Flood Relief Support",
      raisedFund: 500000,
      targetFund: 500000,
      daysLeft: 0,
      image: require("@/assets/images/gta3.jpg"),
      isBookmarked: true,
      status: "finished",
    },
    {
      id: 4,
      title: "Tree Plantation Drive",
      raisedFund: 500000,
      targetFund: 500000,
      daysLeft: 0,
      image: require("@/assets/images/gta1.jpg"),
      isBookmarked: false,
      status: "finished",
    },
  ];

  // 🧮 Filter logic
  const filteredCampaigns =
    selectedTab === 0
      ? campaigns
      : selectedTab === 1
      ? campaigns.filter((c) => c.status === "inProgress")
      : campaigns.filter((c) => c.status === "finished");

  return (
    <View style={styles.container}>
      {/* 🏷️ Heading */}
      <Headdings
        title="Track Progress"
        subtitle="Updates and reports from the campaigns you support."
      />

      {/* 🔹 Tabs (right below heading) */}
      <View style={styles.tabsWrapper}>
        <TabsNew
          tabs={[
            { label: "All" },
            { label: "In Progress" },
            { label: "Finished" },
          ]}
          defaultIndex={0}
          onTabChange={(index) => setSelectedTab(index)}
        />
      </View>

      {/* 📋 Campaign List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {filteredCampaigns.length === 0 ? (
          <Text style={styles.noDataText}>No campaigns found</Text>
        ) : (
          filteredCampaigns.map((item) => (
            <EventCampaignCard
              key={item.id}
              image={item.image}
              title={item.title}
              raisedFund={item.raisedFund}
              targetFund={item.targetFund}
              daysLeft={item.daysLeft}
              isBookmarked={item.isBookmarked}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ✅ Ensures full screen height
    backgroundColor: "#F8F8F8",
  },
  tabsWrapper: {
    flexDirection:"row",
    justifyContent:"center",
    // alignItems: "center", // ✅ Horizontally center tabs
    // marginTop: 8,
    // backgroundColor:"red"

  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    paddingTop: 10,
  },
  noDataText: {
    textAlign: "center",
    color: "#999",
    fontSize: 14,
    marginTop: 20,
  },
});
