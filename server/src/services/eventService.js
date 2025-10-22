import { query } from "../utils/db.js";

export const getAllEvents = async (filters = {}) => {
  const { city } = filters;
  let sql = `
    SELECT e.*, g.name AS group_name, u.name AS created_by_name
    FROM events e
    LEFT JOIN \`groups\` g ON e.group_id = g.id
    LEFT JOIN users u ON e.created_by = u.id
    WHERE 1=1
  `;
  const params = [];
  if (city) {
    sql += " AND e.city = ?";
    params.push(city);
  }
  sql += " ORDER BY e.start_ts DESC";
  return await query(sql, params);
};

export const getEventById = async (id) => {
  const rows = await query("SELECT * FROM events WHERE id = ?", [id]);
  return rows[0];
};

export const createEvent = async (data) => {
  const {
    id,
    group_id,
    title,
    description,
    start_ts,
    end_ts,
    venue,
    city,
    cover_url,
    capacity,
    visibility,
    created_by,
  } = data;

  await query(
    `INSERT INTO events (id, group_id, title, description, start_ts, end_ts, venue, city, cover_url, capacity, visibility, created_by)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      group_id,
      title,
      description,
      start_ts,
      end_ts,
      venue,
      city,
      cover_url,
      capacity,
      visibility,
      created_by,
    ]
  );
  return { message: "Event created successfully" };
};

export const updateEvent = async (id, data) => {
  const { title, description, start_ts, end_ts, venue, city, cover_url, capacity, visibility, status } = data;
  await query(
    `UPDATE events
     SET title=?, description=?, start_ts=?, end_ts=?, venue=?, city=?, cover_url=?, capacity=?, visibility=?, status=?
     WHERE id=?`,
    [title, description, start_ts, end_ts, venue, city, cover_url, capacity, visibility, status, id]
  );
  return { message: "Event updated successfully" };
};

export const deleteEvent = async (id) => {
  await query("DELETE FROM events WHERE id=?", [id]);
  return { message: "Event deleted successfully" };
};

// Attendees
export const getAttendees = async (eventId) => {
  return await query(
    `SELECT ea.*, u.name, u.email FROM event_attendees ea
     JOIN users u ON ea.user_id = u.id
     WHERE ea.event_id = ?`,
    [eventId]
  );
};

export const addAttendee = async (eventId, userId, status = "going") => {
  await query(
    "INSERT INTO event_attendees (event_id, user_id, status) VALUES (?, ?, ?)",
    [eventId, userId, status]
  );
  return { message: "Attendee added" };
};

export const removeAttendee = async (eventId, userId) => {
  await query("DELETE FROM event_attendees WHERE event_id=? AND user_id=?", [
    eventId,
    userId,
  ]);
  return { message: "Attendee removed" };
};
