import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface EventImageCardProps {
  image: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  isBookmarked?: boolean;
  onBookmarkToggle?: () => void;
  onShare?: () => void;
}

export default function EventImageCard({
  image,
  title,
  venue,
  location,
  date,
  isBookmarked = false,
  onBookmarkToggle,
  onShare,
}: EventImageCardProps) {
  return (
    <View style={styles.card}>
      {/* Image + Actions */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.actions}>
          <TouchableOpacity onPress={onShare} style={styles.iconBtn}>
            <Feather name="share" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBookmarkToggle} style={styles.iconBtn}>
            <MaterialIcons
              name={isBookmarked ? "favorite" : "favorite-border"}
              size={20}
              color={isBookmarked ? "#EA2934" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <MaterialIcons name="location-on" size={16} color="#434343" />
          <Text style={styles.venue}>{venue}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.location}>{location}</Text>

          <View style={styles.dateBadge}>
            <MaterialIcons name="calendar-today" size={14} color="#434343" />
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 160,
  },
  actions: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    gap: 8,
  },
  iconBtn: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 4,
    marginLeft: 6,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
    color: "#1C1B1F",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  venue: {
    marginLeft: 4,
    fontSize: 14,
    color: "#434343",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    fontSize: 13,
    color: "#757575",
  },
  dateBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  date: {
    marginLeft: 4,
    fontSize: 13,
    color: "#434343",
  },
});
