import EventListItem from '@/components/ui/EventListItem'
import Headdings from '@/components/ui/headdings'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function SavedEvents() {
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
  return (
    <ScrollView>
        <View>
            <Headdings title="Your Bookmarked Events" subtitle="Lorem ispsum lorem ipsum" />
        </View>
        <View style={{marginBottom:100}}>
            {listEvents.map((event) => (
            <EventListItem key={event.id} {...event} />
        ))}
        </View>
        
    </ScrollView>
  )
}