'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = mongoose.Schema({
    
    
    name:String,
    profileObj : Object,
    growableObj : Object,
    referenceid : String,
    rapidID : String,
    created_at: String,
});


//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://phr:phr12345@ds211592.mlab.com:11592/phr',{ useNewUrlParser: true });

//module.exports = mongoose.model('report', reportSchema);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://phr:phr12345@ds211592.mlab.com:11592/phr',{ useNewUrlParser: true });

module.exports = mongoose.model('report', reportSchema);