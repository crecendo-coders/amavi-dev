import { Event } from "../model.js";

export default {
  get: async (req, res) => {
    try {
      console.log("Show all Events and their info");
      const eventData = await Event.findAll(); 
      res.status(200).json(eventData); 
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events get call");
    }
  },
  archive: async (req, res) => {
    try {
      console.log("archive", req.params.id);
      await Event.update({ archive: true }, {where: {eventId: req.params.id}}); 
      res.status(200).json({success: true}); 
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events archive call");
    }
  },
  delete: async (req, res) => {
    try {
      console.log("delete", req.params.id);
      await Event.destroy({where: {eventId: +req.params.id}}); 
      res.status(200).json({success: true}); 
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events delete call");
    }
  },
  put: async (req, res) => {
    try {
      console.log("Show all Events and their info");
      await Event.update(req.body, {where: {eventId: req.params.id}}); 
      res.status(200).json({success: true}); 
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in events put call");
    }
  },
};

