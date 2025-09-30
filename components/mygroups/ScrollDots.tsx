import React from "react";
import { StyleSheet, View } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5E5E5E",
    marginHorizontal: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#B8B8B8",
    marginHorizontal: 4,
  },
});
