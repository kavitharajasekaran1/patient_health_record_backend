'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = mongoose.Schema({
    
    
    profileObj : Object,
    growableObj : Object,
    referenceid : String,
    rapidID : String,
    created_at: String,
});


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rpqb:rpqb123@ds131583.mlab.com:31583/digitalid', { useMongoClient: true });

module.exports = mongoose.model('report', reportSchema);