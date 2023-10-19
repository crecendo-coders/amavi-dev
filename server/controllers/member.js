import { Member, Status } from "../model.js";
import { Op } from "sequelize";

export default {
    get: async (req, res) => {
        try {
            console.log("Get current Members");
            const memberData = await Member.findAll({
                include: [{ model: Status,
                            where: {statusId:2}
                }],
            });
            res.status(200).json(memberData);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error in member get");
        }
    },
    getAll: async (req, res) => {
        try {
            console.log("Get all Members active or inactive");
            const memberData = await Member.findAll({
                include: [{ model: Status,
                            where: {[Op.or]:[
                                {statusId:2},
                                {statusId:3}
                            ]}
                }],
            });
            res.status(200).json(memberData);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error in member getAll");
        }
    },
    // change member status
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
    //
};
