// components/ui/EventListItem.tsx
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <MaterialIcons name="handshake" size={28} color="#EA2934" />
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
          <MaterialIcons name="people" size={16} color="#757575" />
          <Text style={styles.attendeeText}>{attendees}</Text>
        </View>
        {isBookmarked && (
          <MaterialIcons name="bookmark" size={20} color="#EA2934" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    elevation: 2, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#FEE2E2", // light red bg
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1C1B1F",
  },
  datetime: {
    fontSize: 12,
    color: "#757575",
    marginTop: 2,
  },
  venue: {
    fontSize: 12,
    color: "#989898",
  },
  right: {
    alignItems: "flex-end",
  },
  attendees: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  attendeeText: {
    fontSize: 12,
    marginLeft: 4,
    color: "#757575",
  },
});
