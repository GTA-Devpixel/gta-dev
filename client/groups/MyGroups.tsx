import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../theme/Metrics";
import GroupsList from "./GroupsList";

export default function MyGroups() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: verticalScale(120), paddingHorizontal:horizontalScale(16) }} // 👈 ensures scroll reaches above tab bar
    >
      {/* My Favorites */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Favorites</Text>
        <Text style={styles.sectionSubtitle}>
          Based on your locations and interests
        </Text>
        <GroupsList name="GTA CityName" members="148 Members" events="2 Events" updates="112" color="#FF6B6B" />
        <GroupsList name="GTA CityName" members="148 Members" events="2 Events" updates="112" color="#FFD93D" />
        <GroupsList name="GTA Global" members="148 Members" events="2 Events" updates="112" color="#FF6B6B" />
        <GroupsList name="GTA Global" members="148 Members" events="2 Events" updates="112" color="#FF6B6B" />
        <GroupsList name="GTA Global" members="148 Members" events="2 Events" updates="112" color="#FF6B6B" />
      </View>

      {/* All Groups */}
      <View style={[styles.section, { marginTop: verticalScale(16) }]}>
        <Text style={styles.sectionTitle}>All Groups (12)</Text>
        <GroupsList name="GTA Global" members="148 Members" events="2 Events" updates="112" color="#FF6B6B" />
        <GroupsList name="GTA Hyderabad Sports" members="148 Members" events="2 Events" updates="112" color="#FFD93D" />
        <GroupsList name="GTA Hyderabad Sports" members="148 Members" events="2 Events" updates="112" color="#FFD93D" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    // paddingHorizontal: horizontalScale(16),
    // paddingTop: verticalScale(24),
  },
  section: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "800",
    color: "#434343",
    marginBottom: verticalScale(8),
  },
  sectionSubtitle: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: "#989898",
    marginBottom: verticalScale(12),
  },
});
