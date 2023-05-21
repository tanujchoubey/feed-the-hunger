const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema(
  {
    ngoName: {
      type: String,
      required: [true, "Name of the ngo is required"],
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

const ngoModel = mongoose.model("Ngo", ngoSchema);
module.exports = ngoModel;
