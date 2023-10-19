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
    getAllMembers: async (req, res) => {
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
    getAll: async (req, res) => {
        try {
            console.log("Get all Members active or inactive");
            const memberData = await Member.findAll({
                include: [{ model: Status,}],
            });
            res.status(200).json(memberData);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error in getAll");
        }
    },
    // change member status
    put: async (req, res) => {
        try {
            console.log("Update member", req.params.id, "with", req.body);
            await Member.update(req.body, {
                where: { memberId: req.params.id },
            });
            res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            res.status(500).send("Error in member put");
        }
    },
    // might run into error of not being able see those who aren't pending or have auditioned
};
