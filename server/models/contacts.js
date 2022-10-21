/*
File Name - contacts.js
Student Name - Deep R. patel
Student ID - 301239480
Date - 17-10-2022
*/
let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
   
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsModel);