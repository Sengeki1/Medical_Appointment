const User = require('../models/schema')
const bcrypt = require("bcryptjs");

exports.superAdmin = async ()=>{
    try{
        let password = await  bcrypt.hash('admin@1234', 10);
        let admin = await User.findOne({email:'admin@admin.com'})

        if(!admin){
            User = {
                first_name:'super',
                last_name:'admin',
                email:'admin@admin.com',
                password: password,
                role:'admin'
            }
            User.save()}
   } catch(error) {
    console.log(error)
   }
}