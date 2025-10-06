import EventCampaignCard from "@/components/ui/EventCampaignCard";
import Headdings from "@/components/ui/headdings";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Saved() {
  // 🧩 Sample saved campaign data
  const savedCampaigns = [
    {
      id: 1,
      title: "Building Old Age Home",
      raisedFund: 250000,
      targetFund: 500000,
      daysLeft: 12,
      image: require("@/assets/images/gta1.jpg"),
      isBookmarked: true,
    },
    {
      id: 2,
      title: "Scholarships for Students",
      raisedFund: 300000,
      targetFund: 600000,
      daysLeft: 20,
      image: require("@/assets/images/gta2.jpeg"),
      isBookmarked: true,
    },
    {
      id: 3,
      title: "Tree Plantation Drive",
      raisedFund: 450000,
      targetFund: 500000,
      daysLeft: 5,
      image: require("@/assets/images/gta3.jpg"),
      isBookmarked: true,
    },
  ];

  return (
    <View style={styles.container}>
      {/* 🏷️ Heading */}
      <Headdings
        title="Saved for Later"
        subtitle="Your bookmarked campaigns, all in one place."
      />

      {/* 📋 Saved Campaign List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {savedCampaigns.length === 0 ? (
          <Text style={styles.noDataText}>No saved campaigns yet.</Text>
        ) : (
          savedCampaigns.map((item) => (
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
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 10,
  },
  noDataText: {
    textAlign: "center",
    color: "#999",
    fontSize: 14,
    marginTop: 20,
  },
});
