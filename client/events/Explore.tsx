import ScrollDots from '@/components/mygroups/ScrollDots'
import EventCard from '@/components/ui/EventCard'
import EventListItem from '@/components/ui/EventListItem'
import Headdings from '@/components/ui/headdings'
import React, { useState } from 'react'
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from 'react-native'
import { horizontalScale, verticalScale } from "../theme/Metrics"

const { width } = Dimensions.get("window")

export default function Explore() {
  const [currentPage, setCurrentPage] = useState(0)

  // Carousel Events (big cards)
  const featuredEvents = [
    {
      id: 1,
      date: "Dec 27-28, 2025",
      title: "World Mega Convention 2025",
      venue: "Akshaya Convention",
      location: "Hyderabad",
      attendees: 321,
      isBookmarked: true,
    },
    {
      id: 2,
      date: "Jan 15-16, 2026",
      title: "Global Innovation Summit 2026",
      venue: "Tech Park",
      location: "Bangalore",
      attendees: 512,
      isBookmarked: false,
    },
    {
      id: 3,
      date: "Feb 10, 2026",
      title: "Int. Visionary Forum",
      venue: "City Hall",
      location: "Delhi",
      attendees: 210,
      isBookmarked: true,
    },
  ]

  // List Events (small horizontal items)
  const listEvents = [
    {
      id: 101,
      title: "Design Thinking Bootcamp",
      date: "Mar 5, 2026",
      time: "10:00 AM IST",
      venue: "Innovation Hub",
      location: "Mumbai",
      attendees: 150,
      isBookmarked: true,
    },
    {
      id: 102,
      title: "Tech Leaders Meetup",
      date: "Apr 12, 2026",
      time: "02:00 PM IST",
      venue: "Startup Arena",
      location: "Pune",
      attendees: 280,
      isBookmarked: false,
    },
    {
      id: 103,
      title: "Green Energy Expo",
      date: "May 18-19, 2026",
      time: "09:30 AM IST",
      venue: "Eco Convention Center",
      location: "Chennai",
      attendees: 430,
      isBookmarked: true,
    },
    {
      id: 104,
      title: "Green Energy Expo",
      date: "May 18-19, 2026",
      time: "09:30 AM IST",
      venue: "Eco Convention Center",
      location: "Chennai",
      attendees: 430,
      isBookmarked: true,
    },
    {
      id: 105,
      title: "Green Energy Expo",
      date: "May 18-19, 2026",
      time: "09:30 AM IST",
      venue: "Eco Convention Center",
      location: "Chennai",
      attendees: 430,
      isBookmarked: true,
    },
  ]

  // detect current page when scroll ends
  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x
    const pageIndex = Math.round(offsetX / width)
    setCurrentPage(pageIndex)
  }

  return (
    <ScrollView>
      {/* Featured Events Carousel */}
      <Headdings 
        title="Recommended Events" 
        subtitle="Based on your locations and interests" 
      />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {featuredEvents.map((event) => (
          <View 
            key={event.id} 
            style={{ width, paddingHorizontal: horizontalScale(16) }}
          >
            <EventCard {...event} />
          </View>
        ))}
      </ScrollView>

      {/* dots indicator */}
      <View style={{ alignItems: "center", marginTop: verticalScale(8) }}>
        <ScrollDots currentDot={currentPage + 1} totalDots={featuredEvents.length} />
      </View>

      {/* List Section */}
      <Headdings 
        title="All Events" 
        subtitle="Based on your locations and interests" 
      />

      <View style={{ marginBottom: verticalScale(100) }}>
        {listEvents.map((event) => (
          <EventListItem key={event.id} {...event} />
        ))}
      </View>
    </ScrollView>
  )
}
