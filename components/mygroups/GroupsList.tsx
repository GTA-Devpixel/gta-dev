import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function GroupsList({ name, members, events, updates, color }: any) {
  return (
    <View style={styles.groupDiv}>
      {/* Left DP */}
      <View style={[styles.dp, { backgroundColor: color }]}>
        <MaterialIcons name="groups" size={24} color="#fff" />
      </View>

      {/* Middle Info */}
      <View style={styles.information}>
        <Text style={styles.groupName}>{name}</Text>
        <Text style={styles.groupDetails}>
          {members} | {events}
        </Text>
      </View>

      {/* Right Updates */}
      <View style={styles.updates}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{updates}</Text>
        </View>
        <MaterialIcons name="favorite-border" size={20} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupDiv: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  dp: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  information: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  groupDetails: {
    fontSize: 14,
    color: "#666",
  },
  updates: {
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#EA2934",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
  },
  badgeText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 12,
  },
});
