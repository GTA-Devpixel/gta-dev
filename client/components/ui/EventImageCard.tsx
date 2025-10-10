import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

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
            <Feather name="share" size={moderateScale(18)} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBookmarkToggle} style={styles.iconBtn}>
            <MaterialIcons
              name={isBookmarked ? "favorite" : "favorite-border"}
              size={moderateScale(20)}
              color={isBookmarked ? "#EA2934" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <MaterialIcons name="location-on" size={moderateScale(16)} color="#434343" />
          <Text style={styles.venue}>{venue}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.location}>{location}</Text>

          <View style={styles.dateBadge}>
            <MaterialIcons name="calendar-today" size={moderateScale(14)} color="#434343" />
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
    borderRadius: moderateScale(12),
    // marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: verticalScale(2) },
    elevation: 3,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: verticalScale(160),
  },
  actions: {
    position: "absolute",
    top: verticalScale(8),
    right: horizontalScale(8),
    flexDirection: "row",
    gap: horizontalScale(8),
  },
  iconBtn: {
    backgroundColor: "#FFF",
    borderRadius: moderateScale(16),
    padding: moderateScale(4),
    marginLeft: horizontalScale(6),
  },
  info: {
    padding: moderateScale(12),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    marginBottom: verticalScale(6),
    color: "#1C1B1F",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(4),
  },
  venue: {
    marginLeft: horizontalScale(4),
    fontSize: moderateScale(14),
    color: "#434343",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    fontSize: moderateScale(13),
    color: "#757575",
  },
  dateBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
  },
  date: {
    marginLeft: horizontalScale(4),
    fontSize: moderateScale(13),
    color: "#434343",
  },
});
