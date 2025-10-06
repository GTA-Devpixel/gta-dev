import ScrollDots from "@/components/mygroups/ScrollDots";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// ────────────────────────────────────────────────
// 📏 Constants
// ────────────────────────────────────────────────
const { width } = Dimensions.get("window");
const CARD_WIDTH = 140;
const HERO_HEIGHT = 88;
const PAGE_MARGIN = 16;
const PAGE_WIDTH = width - PAGE_MARGIN * 2;

// ────────────────────────────────────────────────
// 🧩 Helper Functions
// ────────────────────────────────────────────────
/**
 * Splits an array into smaller chunks.
 * Example: chunkArray([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
 */
const chunkArray = (arr: any[], size: number) => {
  const out: any[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
};

// ────────────────────────────────────────────────
// 🚀 Component
// ────────────────────────────────────────────────
export default function Explore() {
  const [currentPage, setCurrentPage] = useState(0);

  const recommendations = [
    { id: 1, groupName: "GTA CityName", members: "884 Members", color: "#FFE7A6" },
    { id: 2, groupName: "Hyderabad Fig", members: "148 Members", color: "#FFD4D7" },
    { id: 3, groupName: "GTA Global", members: "560 Members", color: "#CFF4D2" },
    { id: 4, groupName: "Hyderabad Sports", members: "320 Members", color: "#CFE0FF" },
    { id: 5, groupName: "GTA Startups", members: "210 Members", color: "#FFE0B8" },
    { id: 11, groupName: "GTA CityName", members: "884 Members", color: "#FFE7A6" },
    { id: 22, groupName: "Hyderabad Fig", members: "148 Members", color: "#FFD4D7" },
    { id: 33, groupName: "GTA Global", members: "560 Members", color: "#CFF4D2" },
    { id: 44, groupName: "Hyderabad Sports", members: "320 Members", color: "#CFE0FF" },
    { id: 55, groupName: "GTA Startups", members: "210 Members", color: "#FFE0B8" },
  ];

  // 4 per page → 2 rows × 2 cards
  const pages = chunkArray(recommendations, 4);

  // ───────────────────────────────
  // 🧱 Renders a single group card
  // ───────────────────────────────
  const renderCard = (item: any) => (
    <View key={item.id} style={styles.cardWrapper}>
      <View style={[styles.card, styles.shadow]}>
        <View style={[styles.hero, { backgroundColor: item.color }]}>
          <MaterialIcons name="groups" size={32} color="#E53935" />
        </View>

        <View style={styles.meta}>
          <Text style={styles.groupName}>{item.groupName}</Text>
          <Text style={styles.members}>{item.members}</Text>
        </View>
      </View>
    </View>
  );

  // ───────────────────────────────
  // 📜 Handles scroll pagination
  // ───────────────────────────────
  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / PAGE_WIDTH);
    setCurrentPage(pageIndex);
  };

  // ───────────────────────────────
  // 🖼️ Render
  // ───────────────────────────────
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headings}>
        <Text style={styles.title}>Recommendations</Text>
        <Text style={styles.subtitle}>Based on your locations and interests</Text>
      </View>

      {/* Carousel Pages */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {pages.map((page, idx) => {
          const mid = Math.ceil(page.length / 2);
          const topRow = page.slice(0, mid);
          const bottomRow = page.slice(mid);

          return (
            <View key={idx} style={styles.page}>
              <View style={styles.row}>{topRow.map(renderCard)}</View>
              <View style={styles.row}>{bottomRow.map(renderCard)}</View>
            </View>
          );
        })}
      </ScrollView>

      {/* Dots */}
      <ScrollDots currentDot={currentPage + 1} totalDots={pages.length} />
    </View>
  );
}

// ────────────────────────────────────────────────
// 🎨 Styles
// ────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PAGE_MARGIN,
    backgroundColor: "#FFF",
  },

  // ── Headings ────────────────────
  headings: {
    marginBottom: 12,
  },
  title: {
    color: "#434343",
    fontWeight: "800",
    fontSize: 16,
  },
  subtitle: {
    color: "#989898",
    fontWeight: "400",
    fontSize: 14,
  },

  // ── Page Layout ─────────────────
  page: {
    width: PAGE_WIDTH,
    // backgroundColor:"red"
  },
  row: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 16,
  },

  // ── Cards ───────────────────────
  cardWrapper: {
    width: CARD_WIDTH,
    marginHorizontal: 12,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 12,
    backgroundColor: "#FFF",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  hero: {
    height: HERO_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  meta: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#FFF",
  },
  groupName: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
  },
  members: {
    color: "#434343",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 2,
  },

  // ── Shadow ──────────────────────
  shadow: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
    },
    android: { elevation: 3 },
  }) as object,
});
