import { Event } from "../model.js";

export default {
  get: async (req, res) => {
    try {
      console.log("Get unarchived Events");
      const eventData = await Event.findAll({
        where: { archive: false },
        order: ["datetime"],
      });

      res.status(200).json(eventData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events get call");
    }
  },
  getAll: async (req, res) => {
    try {
      console.log("Get all Events");
      const eventData = await Event.findAll();
      res.status(200).json(eventData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events get call");
    }
  },
  archive: async (req, res) => {
    try {
      console.log("archive event", req.params.id);
      const event = await Event.update(
        { archive: !req.body.archive },
        { where: { eventId: req.params.id } }
      );
      const events = await Event.findAll();
      console.log("events", req.params.id, events);
      res.status(200).json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events archive call");
    }
  },
  delete: async (req, res) => {
    try {
      console.log("delete", req.params.id);
      await Event.destroy({ where: { eventId: +req.params.id } });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events delete call");
    }
  },
  put: async (req, res) => {
    try {
      console.log("Update event", req.params.id, "with", req.body);
      await Event.update(req.body, { where: { eventId: req.params.id } });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events put call");
    }
  },
  post: async (req, res) => {
    try {
      console.log("New event", req.body);
      const event = await Event.create(req.body);
      res.status(200).json(event);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events post");
    }
  },
};
