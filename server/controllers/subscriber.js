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
      console.log(`unsubscribe  ${req.body}`);
      const [lines, subscriber] = await Subscriber.update(
        { subscribed: false },
        { where: { subscriberId: req.body.subscriberId }, returning: true }
      );
      res.status(200).json(subscriber[0]);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers unsubscribe");
    }
  },
  unsubscribeEmail: async (req, res) => {
    try {
      console.log(`Unsubscribe ${req.params.email} with ${req.params.token}`);
      const subscriberId = await Subscriber.findOne({ where: { email } });
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
      await Subscriber.update(req.body, {
        where: { subscriberId: req.params.id },
      });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers put");
    }
  },
  subscribe: async (req, res) => {
    try {
      console.log("Subscribe Request", req.body);
      const isSubscriber = await Subscriber.findOne({
        where: { email: req.body.email },
      });
      if (isSubscriber) {
        await Subscriber.update(
          // update returns lines updated unless returning:true
          {
            subscribed: true,
            name: req.body.name,
          },
          { where: { subscriberId: isSubscriber.subscriberId } }
        );
        const subscriber = await Subscriber.findByPk(isSubscriber.subscriberId);
        console.log("subscriber-updated", subscriber);
        res.status(200).json(subscriber);
      } else {
        const subscriber = await Subscriber.create(req.body);
        console.log("subscriber-new", subscriber);
        res.status(200).json(subscriber);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers post");
    }
  },
};
