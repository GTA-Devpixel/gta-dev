import EventImageCard from "@/components/ui/EventImageCard"
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native"

const { width } = Dimensions.get("window")

export default function Index() {
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

  const groups = [
    { id: 1, image: require("@/assets/images/gta1.jpg"), name: "GTA Telangana", members: 148 },
    { id: 2, image: require("@/assets/images/gta2.jpeg"), name: "GTA Hyderabad", members: 82 },
    { id: 3, image: require("@/assets/images/gta3.jpg"), name: "GTA Kondapur", members: 48 },
    { id: 4, image: require("@/assets/images/gta4.jpg"), name: "GTA Global", members: 210 },
  ]

  return (
    <View style={styles.container}>
      {/* Upcoming Events */}
      <Text style={styles.title}>Upcoming Events</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {events.map((event) => (
          <View key={event.id} style={{ width, padding: 16 }}>
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

      {/* My Groups */}
      <Text style={styles.title}>My Groups</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 12 }}>
        {groups.map((group) => (
          <View key={group.id} style={styles.groupCard}>
            <Image source={group.image} style={styles.groupImage} />
            <Text style={styles.groupName}>{group.name}</Text>
            <Text style={styles.groupMembers}>{group.members} Members</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    paddingLeft: 16,
    paddingTop: 16,
    color: "#434343",
    textTransform: "uppercase",
  },
  groupCard: {
    width: 120,
    marginHorizontal: 8,
    alignItems: "center",
  },
  groupImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: 6,
  },
  groupName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  groupMembers: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
})
