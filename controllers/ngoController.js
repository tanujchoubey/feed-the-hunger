const mongoose = require('mongoose');
const restruentModel = require('../models/restruentModel');
const ngoModel = require("../models/ngoModel");
const bcrypt = require("bcrypt");

// //get all nogs
// exports.getAllNgos = async (req, res) => {
//   try {
//     const ngos = await ngoModel.find({});
//     return res.status(200).send({
//       ngoCount: ngos.length,
//       success: true,
//       message: "all ngo data",
//       ngos,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Error in get all ngos",
//       error,
//     });
//   }
// };

// create ngo register
exports.ngoRegisterController = async (req, res) => {
  try {
    const { ngoName, contact, address, email, password } = req.body;

    //validation
    if (!ngoName || !contact || !address || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill the fields",
      });
    }
    //existing ngo
    const existingNgo = await ngoModel.findOne({ email });
    if (existingNgo) {
      return res.status(401).send({
        success: false,
        message: "ngo already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // save new ngo
    const ngo = new ngoModel({
      ngoName,
      contact,
      address,
      email,
      password: hashedPassword,
    });
    await ngo.save();
    return res.status(201).send({
      success: true,
      message: "new ngo created",
      ngo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: `Error in register callback`,
      success: false,
      error,
    });
  }
};

//login
exports.ngoLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "please provide email or password",
      });
    }
    const ngo = await ngoModel.findOne({ email });
    if (!ngo) {
      return res.status(200).send({
        success: false,
        message: "email is not registerd",
      });
    }
    //password
    const ismatch = await bcrypt.compare(password, ngo.password);
    if (!ismatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or passoword",
      });
    }
    return res.status(200).send({
      success: true,
      message: "login successfully",
      ngo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in callback",
      error,
    });
  }
};


//get all ngos
exports.getAllNgoController = async(req, res)=>{
    try{
        const ngos = await ngoModel.find({}).populate("restruent");
        if(!ngos){
            return res.status(200).send({
                success: false,
                message: "no ngos found"
            })
        }
        return res.status(200).send({
            success: true,
            NgoCount: ngos.length,
            message: "All ngos lists",
            ngos
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error while getting ngo",
            error
        })
    }
}
