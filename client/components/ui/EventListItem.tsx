import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

interface EventListItemProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  attendees: number;
  isBookmarked?: boolean;
}

export default function EventListItem({
  title,
  date,
  time,
  venue,
  location,
  attendees,
  isBookmarked = false,
}: EventListItemProps) {
  return (
    <View style={styles.container}>
      {/* Left Icon */}
      <View style={styles.iconWrapper}>
        <MaterialIcons name="handshake" size={moderateScale(28)} color="#EA2934" />
      </View>

      {/* Middle Content */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.datetime}>{date}  |  {time}</Text>
        <Text style={styles.venue}>{venue}, {location}</Text>
      </View>

      {/* Right Badge / Bookmark */}
      <View style={styles.right}>
        <View style={styles.attendees}>
          <MaterialIcons name="people" size={moderateScale(16)} color="#757575" />
          <Text style={styles.attendeeText}>{attendees}</Text>
        </View>
        {isBookmarked && (
          <MaterialIcons name="bookmark" size={moderateScale(20)} color="#EA2934" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    marginVertical: verticalScale(6),
    marginHorizontal: horizontalScale(16),
    elevation: 2, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: verticalScale(2) },
    alignItems: "center",
  },
  iconWrapper: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: "#FEE2E2", // light red bg
    justifyContent: "center",
    alignItems: "center",
    marginRight: horizontalScale(12),
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    color: "#1C1B1F",
  },
  datetime: {
    fontSize: moderateScale(12),
    color: "#757575",
    marginTop: verticalScale(2),
  },
  venue: {
    fontSize: moderateScale(12),
    color: "#989898",
  },
  right: {
    alignItems: "flex-end",
  },
  attendees: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(4),
  },
  attendeeText: {
    fontSize: moderateScale(12),
    marginLeft: horizontalScale(4),
    color: "#757575",
  },
});
