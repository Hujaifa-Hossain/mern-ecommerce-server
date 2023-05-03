const userModel = require('../models/userModel');

const create_user = async (req, res) => {
	const newUser = new userModel({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

const login_user = async (req, res) => {
  try {
    const users = await userModel.find({email: req.body.email})
    if(!users){
      console.log('no user')
    } else{
      console.log('user')
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create_user,
  login_user
}