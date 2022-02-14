const router = require("express").Router();
const Transaction = require("../models/Transaction");

//CREATE TRANSACTION
router.post("/", async (req, res) => {
  const newTrans = new Transaction(req.body);
  try {
    const savedTrans = await newTrans.save();
    res.status(200).json(savedTrans);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE TRANSACTION
router.delete("/:id", async (req, res) => {
    try {
      const trans = await Transaction.findById(req.params.id);
      //put date filter condition here(user shoudln't be able to delete after 12hrs)
        try {
          await trans.delete();
          res.status(200).json("Transaction deleted...");
        } catch (err) {
            console.log(err)
          res.status(500).json(err);
        }
    } catch (err) {
        console.log("in outer catch",err)
      res.status(500).json(err);
    }
  });
  
module.exports = router;