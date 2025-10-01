// components/ui/EventCard.tsx
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
          <MaterialIcons name="check-circle" size={20} color="#EA2934" />
        ) : (
          <MaterialIcons
            name={isBookmarked ? "bookmark" : "bookmark-border"}
            size={20}
            color="#000"
          />
        )}
      </View>

      {/* Event Logo Placeholder */}
      <View style={styles.logoWrapper}>
        <MaterialIcons name="handshake" size={48} color="#EA2934" />
      </View>

      {/* Event Details */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.venue}>{venue}</Text>
        <View style={styles.row}>
          <MaterialIcons name="location-on" size={14} color="#434343" />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="groups" size={14} color="#434343" />
          <Text style={styles.attendees}>{attendees}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FDECEC", // light pink like figma
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    position: "relative",
    elevation: 2, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  dateBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    elevation: 1,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
  },
  iconWrapper: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  details: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    marginBottom: 2,
  },
  venue: {
    fontSize: 12,
    color: "#434343",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  location: {
    marginLeft: 4,
    fontSize: 12,
    color: "#434343",
  },
  attendees: {
    marginLeft: 4,
    fontSize: 12,
    color: "#434343",
  },
});
