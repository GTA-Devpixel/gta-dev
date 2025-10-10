import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

interface EventCardProps {
  date: string;
  title: string;
  location: string;
  venue: string;
  attendees: number;
  isBookmarked?: boolean;
  isChecked?: boolean;
  onPress?: () => void;
}

export default function EventCard({
  date,
  title,
  location,
  venue,
  attendees,
  isBookmarked = false,
  isChecked = false,
  onPress,
}: EventCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Date */}
      <View style={styles.dateBadge}>
        <Text style={styles.dateText}>{date}</Text>
      </View>

      {/* Bookmark / Check icons */}
      <View style={styles.iconWrapper}>
        {isChecked ? (
          <MaterialIcons name="check-circle" size={moderateScale(20)} color="#EA2934" />
        ) : (
          <MaterialIcons
            name={isBookmarked ? "bookmark" : "bookmark-border"}
            size={moderateScale(20)}
            color="#000"
          />
        )}
      </View>

      {/* Event Logo Placeholder */}
      <View style={styles.logoWrapper}>
        <MaterialIcons name="handshake" size={moderateScale(48)} color="#EA2934" />
      </View>

      {/* Event Details */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.venue}>{venue}</Text>
        <View style={styles.row}>
          <MaterialIcons name="location-on" size={moderateScale(14)} color="#434343" />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="groups" size={moderateScale(14)} color="#434343" />
          <Text style={styles.attendees}>{attendees}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FDECEC", // light pink like figma
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    marginBottom: verticalScale(16),
    position: "relative",
    elevation: 2, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  dateBadge: {
    position: "absolute",
    top: verticalScale(8),
    left: horizontalScale(8),
    backgroundColor: "#fff",
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(6),
    elevation: 1,
  },
  dateText: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    color: "#000",
  },
  iconWrapper: {
    position: "absolute",
    top: verticalScale(8),
    right: horizontalScale(8),
  },
  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(100),
  },
  details: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
    padding: moderateScale(8),
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    color: "#000",
    marginBottom: verticalScale(2),
  },
  venue: {
    fontSize: moderateScale(12),
    color: "#434343",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(2),
  },
  location: {
    marginLeft: horizontalScale(4),
    fontSize: moderateScale(12),
    color: "#434343",
  },
  attendees: {
    marginLeft: horizontalScale(4),
    fontSize: moderateScale(12),
    color: "#434343",
  },
});
