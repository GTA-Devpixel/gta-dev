import ScrollDots from "../components/ui/ScrollDots";
import DonationEventsCard from "@/components/ui/DonationEventsCard";
import EventCampaignCard from "@/components/ui/EventCampaignCard";
import React, { useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../theme/Metrics";

const { width } = Dimensions.get("window");

export default function Explore() {
  const [currentPage, setCurrentPage] = useState(0);

  // 🔹 Carousel events
  const featuredEvents = [
    {
      id: 1,
      type: "Education",
      isBookmarked: false,
      image: require("@/assets/images/gta1.jpg"),
      name: "Scholarships for Students",
      raisedFund: 100,
      targetFund: 200,
      daysLeft: 12,
      targetReachedPercent: 50,
    },
    {
      id: 2,
      type: "Health",
      isBookmarked: true,
      image: require("@/assets/images/gta2.jpeg"),
      name: "Free Health Checkups",
      raisedFund: 300,
      targetFund: 600,
      daysLeft: 20,
      targetReachedPercent: 40,
    },
    {
      id: 3,
      type: "Community",
      isBookmarked: false,
      image: require("@/assets/images/gta3.jpg"),
      name: "Clean Water Project",
      raisedFund: 500,
      targetFund: 1000,
      daysLeft: 5,
      targetReachedPercent: 50,
    },
  ];

  // 🔹 List events
  const allEvents = [
    {
      id: 4,
      title: "Building Old Age Home",
      image: require("@/assets/images/gta1.jpg"),
      raisedFund: 250000,
      targetFund: 500000,
      daysLeft: 12,
      isBookmarked: true,
    },
    {
      id: 5,
      title: "Tree Plantation Drive",
      image: require("@/assets/images/gta2.jpeg"),
      raisedFund: 120000,
      targetFund: 200000,
      daysLeft: 8,
      isBookmarked: false,
    },
    {
      id: 6,
      title: "Flood Relief Support",
      image: require("@/assets/images/gta3.jpg"),
      raisedFund: 150000,
      targetFund: 300000,
      daysLeft: 15,
      isBookmarked: true,
    },
  ];

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / width);
    setCurrentPage(pageIndex);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🚀 Top Carousel (DonationEventsCard) */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={handleScrollEnd}
          contentContainerStyle={styles.cardsRow}
        >
          {featuredEvents.map((event) => (
            <View key={event.id} style={styles.cardWrapper}>
              <DonationEventsCard {...event} />
            </View>
          ))}
        </ScrollView>

        {/* Dots below carousel */}
        <View style={styles.dotsContainer}>
          <ScrollDots currentDot={currentPage + 1} totalDots={featuredEvents.length} />
        </View>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.sectionTitle}>All Campaigns</Text>
        {allEvents.map((event) => (
          <EventCampaignCard key={`list-${event.id}`} {...event} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(20),
    backgroundColor: "#f8f8f8",
  },
  carouselContainer: {
    height: verticalScale(350),
    position: "relative",
  },
  cardsRow: {
    flexDirection: "row",
    // backgroundColor:"pink"
  },
  cardWrapper: {
    width: width, // keep full screen width for paging
    paddingHorizontal: horizontalScale(10),
  },
  dotsContainer: {
    // position: "absolute",
    // bottom: verticalScale(10),
    // left: 0,
    // right: 0,
    // backgroundColor:"red",
    alignItems: "center",
  },
  listSection: {
    paddingHorizontal: horizontalScale(12),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(100),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginBottom: verticalScale(8),
    color: "#222",
  },
});
