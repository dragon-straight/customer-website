const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const adminSchema = new Schema({
    username: String,
    password: String
});

//hash the password
adminSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
adminSchema.methods.validPassword = function (password){
    return bcrypt.compareSync(password,this.password);
};

const Admin =  mongoose.model('Admin', adminSchema);

module.exports = Admin;

