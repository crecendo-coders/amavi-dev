


const serverFunctions = {

  candidate: (req, res) => {
    Candidate.destroy({ where: { candidateId: +req.params.id } })
      .then((val) => {
        console.log("deleted candidate:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },
};

export default serverFunctions;
