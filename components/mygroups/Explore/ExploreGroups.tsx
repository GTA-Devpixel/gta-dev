import React from 'react';
import { Text, View } from 'react-native';

export default function ExploreGroups() {
    const recommendations = [
        {
            id: 1,
            groupName: "GTA CityName",
            members: "148 Members",
            events: "2 Events",
            updates: "112",
            color: "#FF6B6B",
        },
        {
            id: 2,
            groupName: "GTA Hyderabad Sports",
            members: "220 Members",
            events: "5 Events",
            updates: "89",
            color: "#FFD93D",
        },
        {
            id: 3,
            groupName: "GTA Global Entrepreneurs",
            members: "560 Members",
            events: "12 Events",
            updates: "340",
            color: "#6BCB77",
        },
    ];

  return (
    <View>
      <Text>ExploreGroups</Text>
    </View>
  )
}