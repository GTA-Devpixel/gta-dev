import React from "react";
import { StyleSheet, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

interface ScrollDotsProps {
  currentDot: number;   // 1-based index of the active dot
  totalDots: number;    // total number of dots
}

export default function ScrollDots({ currentDot, totalDots }: ScrollDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalDots }, (_, idx) => {
        const isActive = currentDot === idx + 1;
        return <View key={idx} style={isActive ? styles.activeDot : styles.dot} />;
      })}
    </View>
  );
}

const DOT_ACTIVE_SIZE = moderateScale(10);
const DOT_INACTIVE_SIZE = moderateScale(8);
const DOT_GUTTER = horizontalScale(4);
const DOT_MARGIN_TOP = verticalScale(12);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: DOT_MARGIN_TOP,
  },
  activeDot: {
    width: DOT_ACTIVE_SIZE,
    height: DOT_ACTIVE_SIZE,
    borderRadius: DOT_ACTIVE_SIZE / 2,
    backgroundColor: "#5E5E5E",
    marginHorizontal: DOT_GUTTER,
  },
  dot: {
    width: DOT_INACTIVE_SIZE,
    height: DOT_INACTIVE_SIZE,
    borderRadius: DOT_INACTIVE_SIZE / 2,
    backgroundColor: "#B8B8B8",
    marginHorizontal: DOT_GUTTER,
  },
});
