import * as eventService from "../services/eventService.js";

export const getEvents = async (req, res) => {
  const events = await eventService.getAllEvents(req.query);
  res.json(events);
};

export const getEvent = async (req, res) => {
  const event = await eventService.getEventById(req.params.id);
  event ? res.json(event) : res.status(404).json({ message: "Event not found" });
};

export const createEvent = async (req, res) => {
  const result = await eventService.createEvent(req.body);
  res.status(201).json(result);
};

export const updateEvent = async (req, res) => {
  const result = await eventService.updateEvent(req.params.id, req.body);
  res.json(result);
};

export const deleteEvent = async (req, res) => {
  const result = await eventService.deleteEvent(req.params.id);
  res.json(result);
};

export const getAttendees = async (req, res) => {
  const result = await eventService.getAttendees(req.params.id);
  res.json(result);
};

export const addAttendee = async (req, res) => {
  const result = await eventService.addAttendee(
    req.params.id,
    req.body.user_id,
    req.body.status
  );
  res.status(201).json(result);
};

export const removeAttendee = async (req, res) => {
  const result = await eventService.removeAttendee(req.params.id, req.params.user_id);
  res.json(result);
};
