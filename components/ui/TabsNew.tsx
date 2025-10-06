import { Colors } from "@/theme/color";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

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
                      isActive
                        ? styles.activeBadgeText
                        : styles.inactiveBadgeText,
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
    paddingVertical: 6,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: Colors.red500 || "#EA2934",
  },
  inactiveTab: {
    backgroundColor: "#F5F5F5",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  activeLabel: {
    color: "#fff",
  },
  inactiveLabel: {
    color: "#434343",
  },
  badge: {
    borderRadius: 10,
    marginLeft: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  activeBadge: {
    backgroundColor: "#fff",
  },
  inactiveBadge: {
    backgroundColor: "#E0E0E0",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  activeBadgeText: {
    color: Colors.red500 || "#EA2934",
  },
  inactiveBadgeText: {
    color: "#434343",
  },
});
