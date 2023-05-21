const mongoose = require("mongoose");

const restroSchema = new mongoose.Schema(
  {
    restroName: {
      type: String,
      required: [true, "Name of the restruent is requrired"],
    },
    contact: {
      type: String,
      required: [true, "contact no. is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    restruent: {
      type: mongoose.Types.ObjectId,
      ref: "Restruent",
    },
  },
  { timestamps: true }
);

const restroModel = mongoose.model("Restro", restroSchema);
module.exports = restroModel;
