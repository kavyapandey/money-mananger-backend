const express = require("express");
const app = express();
const cors = require ('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const transactionRoute = require("./routes/transactions");

dotenv.config();
app.use(cors({
  origin : "*"
}))

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);
app.use("/transactions", transactionRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running.");
});