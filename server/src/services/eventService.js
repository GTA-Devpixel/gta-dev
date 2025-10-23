// src/services/eventService.js
// No DB import — using static JSON data for now

// ----------------------
// MOCK DATA
// ----------------------

const mockEvents = [
  {
    id: "e1111111-1111-1111-1111-111111111111",
    group_id: "aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    group_name: "Hyderabad Runners",
    created_by: "11111111-1111-1111-1111-111111111111",
    created_by_name: "Sai Kumar",
    title: "5K Fun Run",
    description: "Morning 5K run at KBR Park",
    start_ts: "2025-11-01 06:00:00",
    end_ts: "2025-11-01 08:00:00",
    venue: "KBR Park",
    city: "Hyderabad",
    cover_url: "https://picsum.photos/seed/ev1/800/300",
    capacity: 200,
    visibility: "public",
    status: "active",
  },
  {
    id: "e2222222-2222-2222-2222-222222222222",
    group_id: "bbbb2222-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
    group_name: "Warangal Arts",
    created_by: "33333333-3333-3333-3333-333333333333",
    created_by_name: "Arjun M",
    title: "Art Expo",
    description: "Local artists exhibition at Town Hall",
    start_ts: "2025-11-15 10:00:00",
    end_ts: "2025-11-15 18:00:00",
    venue: "Town Hall",
    city: "Warangal",
    cover_url: "https://picsum.photos/seed/ev2/800/300",
    capacity: 300,
    visibility: "public",
    status: "active",
  },
  {
    id: "e3333333-3333-3333-3333-333333333333",
    group_id: "cccc3333-cccc-cccc-cccc-cccccccccccc",
    group_name: "Nizamabad Volunteers",
    created_by: "44444444-4444-4444-4444-444444444444",
    created_by_name: "Keerthi S",
    title: "Volunteer Meet",
    description: "Planning session for upcoming drives",
    start_ts: "2025-10-25 11:00:00",
    end_ts: "2025-10-25 12:30:00",
    venue: "Community Center",
    city: "Nizamabad",
    cover_url: "https://picsum.photos/seed/ev3/800/300",
    capacity: 50,
    visibility: "group",
    status: "active",
  },
];

const mockAttendees = [
  {
    event_id: "e1111111-1111-1111-1111-111111111111",
    user_id: "11111111-1111-1111-1111-111111111111",
    name: "Sai Kumar",
    email: "sai@gta.org",
    status: "going",
  },
  {
    event_id: "e1111111-1111-1111-1111-111111111111",
    user_id: "22222222-2222-2222-2222-222222222222",
    name: "Priya R",
    email: "priya@gta.org",
    status: "interested",
  },
  {
    event_id: "e2222222-2222-2222-2222-222222222222",
    user_id: "33333333-3333-3333-3333-333333333333",
    name: "Arjun M",
    email: "arjun@gta.org",
    status: "going",
  },
];

// ----------------------
// MOCK SERVICE FUNCTIONS
// ----------------------

export const getAllEvents = async (filters = {}) => {
  const { city } = filters;
  let events = [...mockEvents];
  if (city) {
    events = events.filter((e) => e.city.toLowerCase() === city.toLowerCase());
  }
  return events.sort((a, b) => new Date(b.start_ts) - new Date(a.start_ts));
};

export const getEventById = async (id) => {
  return mockEvents.find((e) => e.id === id);
};

export const createEvent = async (data) => {
  mockEvents.push(data);
  return { message: "Event created successfully (mock)", event: data };
};

export const updateEvent = async (id, data) => {
  const index = mockEvents.findIndex((e) => e.id === id);
  if (index === -1) return { message: "Event not found" };
  mockEvents[index] = { ...mockEvents[index], ...data };
  return { message: "Event updated successfully (mock)", event: mockEvents[index] };
};

export const deleteEvent = async (id) => {
  const index = mockEvents.findIndex((e) => e.id === id);
  if (index === -1) return { message: "Event not found" };
  mockEvents.splice(index, 1);
  return { message: "Event deleted successfully (mock)" };
};

// Attendees
export const getAttendees = async (eventId) => {
  return mockAttendees.filter((a) => a.event_id === eventId);
};

export const addAttendee = async (eventId, userId, status = "going") => {
  mockAttendees.push({
    event_id: eventId,
    user_id: userId,
    name: "Static User",
    email: "user@gta.org",
    status,
  });
  return { message: "Attendee added (mock)" };
};

export const removeAttendee = async (eventId, userId) => {
  const index = mockAttendees.findIndex(
    (a) => a.event_id === eventId && a.user_id === userId
  );
  if (index !== -1) mockAttendees.splice(index, 1);
  return { message: "Attendee removed (mock)" };
};
