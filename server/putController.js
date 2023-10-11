
const serverFunctions = {
  person: (req, res) => {
    console.log("put Person", req.body);
    Person.update(req.body, { where: { personId: req.params.id } })
      .then((val) => {
        console.log("updated person:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to update person ${req.body}`, error);
      });
  },

  
};

export default serverFunctions;
