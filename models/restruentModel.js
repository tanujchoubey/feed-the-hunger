const mongoose = require("mongoose");

const restruentSchema = new mongoose.Schema(
  {
    quantity: {
      type: String,
      required: [true, "quantity is required"],
    },
    food: {
      type: String,
      required: [true, "type of food"],
    },
    ngo: {
      type: mongoose.Types.ObjectId,
      ref: "Ngo",
    },
    restro: {
      type: mongoose.Types.ObjectId,
      ref: "Restro",
    },
  },
  { timestamps: true }
);

const restruentModel = mongoose.model("Restruent", restruentSchema);
module.exports = restruentModel;
