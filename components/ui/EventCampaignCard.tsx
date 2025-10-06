import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

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

  // Color logic for progress bar and text
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
            <MaterialIcons name="timer" size={16} color="#FFB803" />
            <Text style={styles.daysLeft}>{daysLeft}d left</Text>
            <MaterialIcons
              name={isBookmarked ? "bookmark" : "bookmark-border"}
              size={18}
              color="#FFB803"
              style={{ marginLeft: 8 }}
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
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 90,
    height: 90,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
    color: "#222",
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  amountText: {
    fontSize: 13,
    color: "#666",
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#eee",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  daysLeft: {
    marginLeft: 4,
    fontSize: 12,
    color: "#FFB803",
    fontWeight: "500",
  },
});
