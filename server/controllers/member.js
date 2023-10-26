import { Member, Status, Voicing } from "../model.js";
import { Op } from "sequelize";

export default {
  get: async (req, res) => {
    try {
      console.log("Get current Members");
      const memberData = await Member.findAll({
        include: [
          { model: Voicing },
          { model: Status, where: { statusId: 2 } },
        ],
        order: [["memberId", "DESC"]],
      });
      console.log(memberData);
      res.status(200).json(memberData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in member get");
    }
  },
  getAllMembers: async (req, res) => {
    try {
      console.log("Get all Members active or inactive");
      const memberData = await Member.findAll({
        include: [
          { model: Voicing },
          {
            model: Status,
            where: { [Op.or]: [{ statusId: 2 }, { statusId: 3 }] },
          },
        ],
        order: [["memberId", "DESC"]],
      });

      res.status(200).json(memberData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in member getAll");
    }
  },
  getAll: async (req, res) => {
    try {
      console.log("Get all Members active or inactive");
      const memberData = await Member.findAll({
        include: [{ model: Voicing }, { model: Status }],
        order: [['memberId', 'DESC']]
      });
      console.log(memberData);
      res.status(200).json(memberData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in getAll");
    }
  },
  getAuditions: async (req, res) => {
    try {
      console.log("Get all pending auditions");
      const memberData = await Member.findAll({
        where: { hasAuditioned: false },
        include: [{ model: Voicing }, { model: Status }],
        order: [['memberId', 'DESC']]
      });
      console.log(memberData);
      res.status(200).json(memberData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in getAll");
    }
  },
  // change member status
  put: async (req, res) => {
    // console.log(req.body)
    console.log("Update member", req.params.id, "with", req.body);
    try {
      req.params.id = parseInt(req.params.id);

      await Member.update(req.body, {
        where: { memberId: req.params.id },
      });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in member put");
    }
  },
  delete: async (req, res) => {
    // console.log(req.body)
    console.log("delete member", req.params.id);
    try {
      await Member.destroy({ where: { memberId: +req.params.id } });
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in member delete call");
    }
  },};
