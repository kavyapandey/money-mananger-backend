const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    amount : {
      type: Number,
      required: true,
    },
    category : {
      type : String,
      required: true,
    },
    type : {
      type: String,
      required: true,
    },
    date : {
      type : Date,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    id :{
        type : String,
        required : true,
        unique : true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);