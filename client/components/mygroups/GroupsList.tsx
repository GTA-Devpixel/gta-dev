import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

export default function GroupsList({ name, members, events, updates, color }: any) {
  return (
    <View style={styles.groupDiv}>
      {/* Left DP */}
      <View style={[styles.dp, { backgroundColor: color }]}>
        <MaterialIcons name="groups" size={moderateScale(24)} color="#fff" />
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
        <MaterialIcons name="favorite-border" size={moderateScale(20)} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupDiv: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  dp: {
    width: horizontalScale(48),
    height: horizontalScale(48),
    borderRadius: moderateScale(12),
    justifyContent: "center",
    alignItems: "center",
    marginRight: horizontalScale(12),
  },
  information: {
    flex: 1,
  },
  groupName: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "#000",
  },
  groupDetails: {
    fontSize: moderateScale(14),
    color: "#666",
  },
  updates: {
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#EA2934",
    borderRadius: moderateScale(12),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(2),
    marginBottom: verticalScale(6),
  },
  badgeText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: moderateScale(12),
  },
});
