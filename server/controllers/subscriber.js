import { sendEmail } from "../emails.js";
import { Subscriber } from "../model.js";
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

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
      console.log(`Unsubscribe ${req.params.emailHash}`);
      const subscriber = await Subscriber.findOne({ where: { emailHash: req.params.emailHash } });
  
      if (!subscriber) {
        // Handle the case where the subscriber doesn't exist
        return res.status(404).json({ message: 'Subscriber not found' });
      }
  
      await Subscriber.update(
        { subscribed: false },
        { where: { subscriberId: subscriber.subscriberId } }
      );
  
      // Re-fetch the updated subscriber data
      const updatedSubscriber = await Subscriber.findByPk(subscriber.subscriberId);
  
      res.status(200).json(updatedSubscriber);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Error in subscribers unsubscribe' });
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
        let data = {...req.body}
        // just need a way to encrypt emails without any special characters
        data.emailHash = bcrypt.hashSync(data.email, 1).replace(/[^a-zA-Z]/g, '').slice(0, 15)
        const subscriber = await Subscriber.create(req.body);
        console.log("subscriber-new", subscriber);
        res.status(200).json(subscriber);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers post");
    }
  },
  send: async (req, res) => {
    try {
      console.log("send", req.body);
      const subscribers = await Subscriber.findAll({ where: { subscribed: true } });
      console.log(subscribers);
      subscribers.map((subscriber => sendEmail({subscriber, ...req.body})))
      res.status(200);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in subscribers get");
    }
    
  },
};
