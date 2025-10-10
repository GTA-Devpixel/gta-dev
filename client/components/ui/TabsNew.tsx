import { Colors } from "@/theme/color";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

interface TabItem {
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
  onTabChange?: (index: number) => void;
}

export default function TabsNew({
  tabs,
  defaultIndex = 0,
  onTabChange,
}: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {tabs.map((tab, index) => {
          const isActive = index === selectedIndex;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabButton,
                isActive ? styles.activeTab : styles.inactiveTab,
              ]}
              onPress={() => handlePress(index)}
            >
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}
              >
                {tab.label}
              </Text>
              {tab.count !== undefined && (
                <View
                  style={[
                    styles.badge,
                    isActive ? styles.activeBadge : styles.inactiveBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      isActive ? styles.activeBadgeText : styles.inactiveBadgeText,
                    ]}
                  >
                    {tab.count}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(6),
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    marginRight: horizontalScale(8),
  },
  activeTab: {
    backgroundColor: Colors.red500 || "#EA2934",
  },
  inactiveTab: {
    backgroundColor: "#F5F5F5",
  },
  label: {
    fontSize: moderateScale(14),
    fontWeight: "600",
  },
  activeLabel: {
    color: "#fff",
  },
  inactiveLabel: {
    color: "#434343",
  },
  badge: {
    borderRadius: moderateScale(10),
    marginLeft: horizontalScale(6),
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(2),
  },
  activeBadge: {
    backgroundColor: "#fff",
  },
  inactiveBadge: {
    backgroundColor: "#E0E0E0",
  },
  badgeText: {
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
  activeBadgeText: {
    color: Colors.red500 || "#EA2934",
  },
  inactiveBadgeText: {
    color: "#434343",
  },
});
