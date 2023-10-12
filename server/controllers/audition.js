import { Event } from "../model.js";

export default {
  post: (req, res) => {
    console.log("add audition", req.body);
    Audition.create(req.body)
      .then((val) => {
        console.log("New person created:", val);
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to Add Person ${req.body}`, error);
      });
  },
};