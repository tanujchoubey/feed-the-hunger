const restroModel = require("../models/restroModel");
const bcrypt = require("bcrypt");

//get all restro
exports.getAllRestros = async (req, res) => {
  try {
    const restros = await restroModel.find({});
    return res.status(200).send({
      restroCount: restros.length,
      success: true,
      message: "all restro data",
      restros,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all restros",
      error,
    });
  }
};


// create restro register
exports.registerController = async(req, res) => {
    try{
        const {restroName, contact, address, email, password} = req.body;
        
        //validation
        if(!restroName || !contact || !address || !email || !password){
            return res.status(400).send({
                success: false,
                message: 'Please fill the fields'
            })
        }
        //existing restro
        const existingRestro = await restroModel.findOne({email});
        if(existingRestro){
            return res.status(401).send({
                success: false,
                message: 'restro already exists'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // save new restro
        const restro = new restroModel({restroName, contact, address, email, password: hashedPassword});
        await restro.save()
        return res.status(201).send({
            success: true,
            message: 'new restro created',
            restro
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message: `Error in register callback`,
            success: false,
            error
        })
    }
};

//login
exports.loginController = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).send({
                success: false,
                message: "please provide email or password"
            })
        }
        const restro = await restroModel.findOne({email});
        if(!restro){
            return res.status(200).send({
                success: false,
                message: 'email is not registerd'
            })
        }
        //password
        const ismatch = await bcrypt.compare(password, restro.password);
        if(!ismatch){
            return res.status(401).send({
                success: false,
                message: "Invalid username or passoword"
            })
        }
        return res.status(200).send({
            success: true,
            message: "login successfully",
            restro
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in callback",
            error
        })
    }
};