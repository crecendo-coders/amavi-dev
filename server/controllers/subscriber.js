import { Subscriber } from "../model.js";

export default {
  get: async (req, res) => {
    try {
      console.log("Get current Subscribers");
      const subscriberData = await Subscriber.findAll({ where: { subscribed: true } });
      res.status(200).json(subscriberData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers get");
    }
  },
  getAll: async (req, res) => {
    try {
      console.log("Get all Subscribers");
      const subscriberData = await Subscriber.findAll();
      res.status(200).json(subscriberData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers getAll");
    }
  },
  unsubscribe: async (req, res) => {
    try {
      console.log(`${req.body.subscribed?"Remove":"Add"} ${req.params.id} ${req.body.email}` );
      const subscriber = await Subscriber.update(
        { subscribed: !req.body.subscribed },
        { where: { subscriberId: req.params.id } }
      );
      const subscribers = await Subscriber.findAll();
      console.log("subscribers", req.params.id, subscribers);
      res.status(200).json(subscribers);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers unsubscribe");
    }
  },
  unsubscribeEmail: async (req, res) => {
    try {
      console.log(`Unsubscribe ${req.params.email} with ${req.params.token}` );
      const subscriberId = await Subscriber.findOne({where: {email}})
      const subscriber = await Subscriber.update(
        { subscribed: false },
        { where: { subscriberId: subscriberId } }
      );

    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers unsubscribe");
    }
  },
  delete: async (req, res) => {
    try {
      console.log("delete", req.params.id);
      await Subscriber.destroy({ where: { subscriberId: +req.params.id } });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers delete");
    }
  },
  put: async (req, res) => {
    try {
      console.log("Update subscriber", req.params.id, "with", req.body);
      await Subscriber.update(req.body, { where: { subscriberId: req.params.id } });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers put");
    }
  },
  post: async (req, res) => {
    try {
      console.log("New subscriber", req.body);
      const subscriber = await Subscriber.create(req.body);
      res.status(200).json(subscriber);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers post");
    }
  },
};
