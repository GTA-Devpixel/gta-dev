import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

interface GroupDpCardProps {
  dp: string // e.g. "gtadp1"
  groupName: string
  members: number
  badgeCount?: number
}

// Map dp names to local images
const dpImages: Record<string, ImageSourcePropType> = {
  gtadp1: require("@/assets/images/gta1.jpg"),
  gtadp2: require("@/assets/images/gta2.jpeg"),
  gtadp3: require("@/assets/images/gta3.jpg"),
  gtadp4: require("@/assets/images/gta4.jpg"),
}

export default function GroupDpCard({
  dp,
  groupName,
  members,
  badgeCount,
}: GroupDpCardProps) {
  const imageSource = dpImages[dp] || dpImages["gtadp1"] // fallback

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={imageSource} style={styles.image} />
        {badgeCount ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.groupName}>{groupName}</Text>
      <Text style={styles.members}>{members} Members</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(100),
    alignItems: "center",
    marginHorizontal: horizontalScale(8),
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: horizontalScale(80),
    height: horizontalScale(80),
    borderRadius: moderateScale(12),
  },
  badge: {
    position: "absolute",
    top: verticalScale(-5),
    right: horizontalScale(-10),
    backgroundColor: "red",
    borderRadius: moderateScale(12),
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(2),
  },
  badgeText: {
    color: "white",
    fontSize: moderateScale(12),
    fontWeight: "700",
  },
  groupName: {
    marginTop: verticalScale(6),
    fontSize: moderateScale(14),
    fontWeight: "600",
    textAlign: "center",
  },
  members: {
    fontSize: moderateScale(12),
    color: "#666",
    textAlign: "center",
  },
});
