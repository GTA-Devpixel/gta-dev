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

const { width } = Dimensions.get("window");

// split array into chunks of `size`
const chunkArray = (arr: any[], size: number) => {
  const out: any[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export default function Explore() {
  const [currentPage, setCurrentPage] = useState(0);

  const recommendations = [
    { id: 1, groupName: "GTA CityName", members: "884 Members", color: "#FFE7A6" },
    { id: 2, groupName: "Hyderabad Fig", members: "148 Members", color: "#FFD4D7" },
    { id: 3, groupName: "GTA Global", members: "560 Members", color: "#CFF4D2" },
    { id: 4, groupName: "Hyderabad Sports", members: "320 Members", color: "#CFE0FF" },
    { id: 5, groupName: "GTA Startups", members: "210 Members", color: "#FFE0B8" },
  ];

  // 4 per page → 2 rows × 2 cards
  const pages = chunkArray(recommendations, 4);

  const renderCard = (item: any) => (
    <View key={item.id} style={styles.cardWrapper}>
      {/* Outer white card with shadow */}
      <View style={[styles.card, styles.shadow]}>
        {/* Colored top panel with centered icon */}
        <View style={[styles.hero, { backgroundColor: item.color }]}>
          <MaterialIcons name="groups" size={32} color="#E53935" />
        </View>

        {/* White meta area */}
        <View style={styles.meta}>
          <Text style={styles.groupName}>{item.groupName}</Text>
          <Text style={styles.members}>{item.members}</Text>
        </View>
      </View>
    </View>
  );

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / (width - 32)); // page width
    setCurrentPage(pageIndex);
  };

  return (
    <View style={styles.container}>
      {/* Headings */}
      <View style={styles.headings}>
        <Text style={styles.title}>Recommendations</Text>
        <Text style={styles.subtitle}>Based on your locations and interests</Text>
      </View>

      {/* Horizontal pages */}
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

      {/* Fixed dots */}
      <ScrollDots currentDot={currentPage + 1} totalDots={pages.length} />
    </View>
  );
}

const CARD_WIDTH = 140;
const HERO_HEIGHT = 88; // colored area height

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
  },
  headings: { marginBottom: 12 },
  title: { color: "#434343", fontWeight: "800", fontSize: 16 },
  subtitle: { color: "#989898", fontWeight: "400", fontSize: 14 },

  page: { width: width - 32 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },

  cardWrapper: { width: CARD_WIDTH, marginHorizontal: 6 },

  card: {
    width: CARD_WIDTH,
    borderRadius: 12,
    backgroundColor: "#FFF",
    overflow: "hidden",          // clip hero corners
    borderWidth: 1,              // subtle border like Figma
    borderColor: "#ECECEC",
  },

  hero: {
    height: HERO_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },

  meta: { paddingHorizontal: 10, paddingVertical: 8, backgroundColor: "#FFF" },

  groupName: { color: "#000", fontSize: 14, fontWeight: "700" },
  members: { color: "#434343", fontSize: 12, fontWeight: "500", marginTop: 2 },

  shadow: Platform.select({
    ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6 },
    android: { elevation: 3 },
  }) as object,
});
