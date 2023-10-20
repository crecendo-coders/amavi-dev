import { Member, Status,Voicing } from "../model.js";
import { Op } from "sequelize";

export default {
    get: async (req, res) => {
        try {
            console.log("Get current Members");
            const memberData = await Member.findAll({
                include: [{model: Voicing},{
                            model: Status,
                            where: {statusId:2},
                            
                }],
            });
            console.log(memberData)
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
                include: [{model: Voicing},{ 
                            model: Status,
                            where: {[Op.or]:[
                                {statusId:2},
                                {statusId:3}
                            ]},
                            
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
                include: [{ model: Voicing},{ model: Status}],
            });
            console.log(memberData)
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
                include: [
                    { model: Voicing},
                    { model: Status,
                        where: {statusId:1}
                    }],
            });
            console.log(memberData)
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
            req.params.id = parseInt(req.params.id)

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
