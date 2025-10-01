import { Colors } from "@/theme/color"; // <- your color file
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

export default function Tabs({
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
              style={styles.tabButton}
              onPress={() => handlePress(index)}
            >
              <View style={styles.tabContent}>
                <Text
                  style={[styles.label, isActive && styles.activeLabel]}
                  numberOfLines={1}
                >
                  {tab.label}
                </Text>
                {tab.count !== undefined && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{tab.count}</Text>
                  </View>
                )}
              </View>
              {isActive && <View style={styles.underline} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
    marginLeft:10
  },
  scrollContainer: {
    flexDirection: "row",
  },
  tabButton: {
    marginRight: 24,
    alignItems: "center",
  },
  tabContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#434343",
    marginRight: 6,
  },
  activeLabel: {
    color: Colors.red500, // your primary red
  },
  badge: {
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#434343",
  },
  underline: {
    height: 2,
    backgroundColor: Colors.red500,
    width: "100%",
    marginTop: 2,
  },
});
