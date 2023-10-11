import { Event } from "../model.js";

export default {
  getEvents: async (req, res) => {
    try {
      console.log("Show all Events and their info");
      const journalData = await Event.findAll();
      res.status(200).json(journalData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something ain't right");
    }
  },
};
