import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

type EventCampaignCardProps = {
  image: any;
  title: string;
  raisedFund: number;
  targetFund: number;
  daysLeft: number;
  isBookmarked?: boolean;
};

export default function EventCampaignCard({
  image,
  title,
  raisedFund,
  targetFund,
  daysLeft,
  isBookmarked = false,
}: EventCampaignCardProps) {
  const progress = raisedFund / targetFund;
  const percentage = Math.round(progress * 100);

  // Color logic for progress bar and text (unchanged)
  const progressColor =
    percentage < 50 ? "#EA2934" : percentage < 80 ? "#FFB803" : "#3FBF62";

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Raised / Target */}
        <View style={styles.amountRow}>
          <Text style={styles.amountText}>Raised: ${raisedFund.toLocaleString()}</Text>
          <Text style={styles.amountText}>Target: ${targetFund.toLocaleString()}</Text>
        </View>

        {/* Progress bar */}
        <ProgressBar
          progress={progress}
          color={progressColor}
          style={styles.progressBar}
        />

        {/* Footer Row */}
        <View style={styles.footerRow}>
          <Text style={[styles.statusText, { color: progressColor }]}>
            {percentage}% target reached
          </Text>

          <View style={styles.rightRow}>
            <MaterialIcons name="timer" size={moderateScale(16)} color="#FFB803" />
            <Text style={styles.daysLeft}>{daysLeft}d left</Text>
            <MaterialIcons
              name={isBookmarked ? "bookmark" : "bookmark-border"}
              size={moderateScale(18)}
              color="#FFB803"
              style={{ marginLeft: horizontalScale(8) }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: moderateScale(12),
    overflow: "hidden",
    marginBottom: verticalScale(12),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: verticalScale(1) },
  },
  image: {
    width: horizontalScale(90),
    height: verticalScale(90),
  },
  content: {
    flex: 1,
    padding: moderateScale(10),
  },
  title: {
    fontWeight: "600",
    fontSize: moderateScale(15),
    color: "#222",
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(4),
  },
  amountText: {
    fontSize: moderateScale(13),
    color: "#666",
  },
  progressBar: {
    height: verticalScale(6),
    borderRadius: moderateScale(3),
    backgroundColor: "#eee",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(6),
  },
  statusText: {
    fontSize: moderateScale(12),
    fontWeight: "500",
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  daysLeft: {
    marginLeft: horizontalScale(4),
    fontSize: moderateScale(12),
    color: "#FFB803",
    fontWeight: "500",
  },
});
