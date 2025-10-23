import ScrollDots from "../components/ui/ScrollDots";
import EventImageCard from "@/components/ui/EventImageCard";
import Headdings from "@/components/ui/headdings";
import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../theme/Metrics";

const { width } = Dimensions.get("window")

export default function Index() {
  const [currentDot, setCurrentDot] = useState(0);

  const events = [
    {
      id: 1,
      image: require("@/assets/images/gta1.jpg"),
      title: "World Mega Convention 2025",
      venue: "Akshaya Convention",
      location: "Hyderabad",
      date: "24 July",
      isBookmarked: true,
    },
    {
      id: 2,
      image: require("@/assets/images/gta2.jpeg"),
      title: "Global Innovation Summit 2026",
      venue: "Tech Park",
      location: "Bangalore",
      date: "15 Jan",
      isBookmarked: false,
    },
    {
      id: 3,
      image: require("@/assets/images/gta3.jpg"),
      title: "Int. Visionary Forum",
      venue: "City Hall",
      location: "Delhi",
      date: "10 Feb",
      isBookmarked: true,
    },
    {
      id: 4,
      image: require("@/assets/images/gta4.jpg"),
      title: "Universal Progress Expo",
      venue: "Expo Center",
      location: "Mumbai",
      date: "20 Mar",
      isBookmarked: false,
    },
  ]

  // update current dot when scroll finishes
  const handleScrollEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / width);
    setCurrentDot(pageIndex);
  };

  const groups = [
    { id: 1, image: require("@/assets/images/gtadp1.png"), name: "GTA Telangana", members: 148 },
    { id: 2, image: require("@/assets/images/gtadp2.png"), name: "GTA Hyderabad", members: 82 },
    { id: 3, image: require("@/assets/images/gtadp3.png"), name: "GTA Kondapur", members: 48 },
    // { id: 4, image: require("@/assets/images/gtadp4.jpg"), name: "GTA Global", members: 210 },
  ]

  return (
    <ScrollView style={styles.container}>
      {/* Upcoming Events */}
      <Text style={styles.title}>Upcoming Events</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ padding:0, margin:0, maxHeight: verticalScale(300) }}
        onMomentumScrollEnd={handleScrollEnd}   // <- use momentum end for paging
      >
        {events.map((event) => (
          <View
            key={event.id}
            style={{
              width,
              padding: moderateScale(16),         // scaled padding
              height: verticalScale(300)          // scaled height
            }}
          >
            <EventImageCard
              image={event.image}
              title={event.title}
              venue={event.venue}
              location={event.location}
              date={event.date}
              isBookmarked={event.isBookmarked}
              onBookmarkToggle={() => console.log("Toggle bookmark", event.id)}
              onShare={() => console.log("Share event", event.id)}
            />
          </View>
        ))}
      </ScrollView>
      <ScrollDots totalDots={events.length} currentDot={currentDot+1}/>

      {/* My Groups */}
      <Text style={styles.title}>Favorate Groups</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: verticalScale(12) }}>
        {groups.map((group) => (
          <View key={group.id} style={styles.groupCard}>
            <Image source={group.image} style={styles.groupImage} />
            <Text style={styles.groupName}>{group.name}</Text>
            <Text style={styles.groupMembers}>{group.members} Members</Text>
          </View>
        ))}
      </ScrollView>

      <Headdings title="Tredding Posts" subtitle="lorem ipsum "/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: verticalScale(60),              // scaled
  },
  title: {
    fontSize: moderateScale(16),                  // scaled font
    fontWeight: "800",
    paddingLeft: horizontalScale(16),             // scaled horizontal padding
    paddingTop: verticalScale(16),                // scaled vertical padding
    color: "#434343",
    textTransform: "uppercase",
  },
  groupCard: {
    width: horizontalScale(120),                  // scaled width
    marginHorizontal: horizontalScale(8),         // scaled margin
    alignItems: "center",
  },
  groupImage: {
    width: moderateScale(80),                     // scaled image size
    height: moderateScale(80),
    borderRadius: moderateScale(16),
    // marginBottom: moderateScale(6),
  },
  groupName: {
    fontSize: moderateScale(14),                  // scaled font
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  groupMembers: {
    fontSize: moderateScale(12),                  // scaled font
    color: "#666",
    textAlign: "center",
  },
})
