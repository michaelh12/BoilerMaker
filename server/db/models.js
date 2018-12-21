const db = require('./db');
const Sequelize = require('sequelize');

//insert models
/*
    const User = db.define('users', {
        name: {
            type: Sequelize.STRING,
            allowNull:false
        }, 
        
        email: {
            type: Sequelize.STRING,
            allowNull:false,
            validate: {
                isEmail: true
            }
        }
    })

Users.belongsToMany(Entries)
Entries.hasOne(Users)

    */

module.exports = {
  db, //don't forget to export your models (Users, etc.)
};
