import { Ionicons } from "@expo/vector-icons"; // expo vector icons
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const img = require("../../assets/images/gta1.jpg")

interface DonationEventCardProps {
  type: string
  name: string
  raisedFund: number
  targetFund: number
  daysLeft: number
  targetReachedPercent: number
  isBookmarked: boolean
  image: any // require() or url
  onBookmarkToggle?: () => void
}

export default function DonationEventsCard({
  type,
  name,
  raisedFund,
  targetFund,
  daysLeft,
  targetReachedPercent,
  isBookmarked,
  image,
  onBookmarkToggle,
}: DonationEventCardProps) {
  return (
    <View style={styles.container}>
      {/* IMAGE + OVERLAYS */}
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} resizeMode="cover" />

        {/* Top-left tag */}
        <View style={styles.tag}>
          <Text style={styles.tagText}>{type}</Text>
        </View>

        {/* Bookmark button */}
        <TouchableOpacity
          style={styles.bookmarkBtn}
          onPress={onBookmarkToggle}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={22}
            color="#EA2934"
          />
        </TouchableOpacity>
      </View>

      {/* DESCRIPTION */}
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>

        {/* Funds row */}
        <View style={styles.fundsRow}>
          <Text style={styles.raised}>
            Raised: ${raisedFund.toLocaleString()}
          </Text>
          <Text style={styles.target}>Target: ${targetFund.toLocaleString()}</Text>
        </View>

        {/* Progress bar */}
        <View style={styles.progressBar}>
          <View
            style={[styles.progress, { width: `${targetReachedPercent}%` }]}
          />
        </View>

        {/* Bottom row: % + days */}
        <View style={styles.bottomRow}>
          <Text style={styles.percent}>{targetReachedPercent}% target reached</Text>
          <View style={styles.daysLeft}>
            <Ionicons name="time-outline" size={14} color="#FFB803" />
            <Text style={styles.daysText}>{daysLeft}d left</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  imageContainer: {
    position: "relative",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  tag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#EA2934",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  tagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  bookmarkBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },
  description: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1B1F",
    marginBottom: 8,
  },
  fundsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  raised: {
    fontSize: 13,
    color: "#333",
  },
  target: {
    fontSize: 13,
    color: "#999",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 6,
  },
  progress: {
    height: "100%",
    backgroundColor: "#EA2934", // red progress
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percent: {
    fontSize: 12,
    color: "#EA2934",
    fontWeight: "500",
  },
  daysLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  daysText: {
    fontSize: 12,
    color: "#FFB803",
    marginLeft: 4,
  },
})
