import express from "express";
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getAttendees,
  addAttendee,
  removeAttendee,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

router.get("/:id/attendees", getAttendees);
router.post("/:id/attendees", addAttendee);
router.delete("/:id/attendees/:user_id", removeAttendee);

export default router;
