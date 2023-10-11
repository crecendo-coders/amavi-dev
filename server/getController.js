import { Member } from "./model.js";

const serverFunctions = {
  conductor: (req, res) => {
    console.log(req.params);
    Member.findOne({where: {roleId: 2}})
      .then((conductor) => {
        if (conductor) {
          console.log("Found conductor:", conductor);
          res.json(conductor);
        } else {
          console.log(`conductor ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding conductor:", error);
      });
  },
  chorale: (req, res) => {
    console.log(req.params);
    Member.findAll({where: {roleId: 2}})
      .then((conductor) => {
        if (conductor) {
          console.log("Found conductor:", conductor);
          res.json(conductor);
        } else {
          console.log(`conductor ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding conductor:", error);
      });
  },
};

export default serverFunctions;
