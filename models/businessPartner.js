/**
 * Created by stevet on 04/07/2016.
 */
var mongoose = require('mongoose');

var businessPartnerSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    email: String
});

module.exports = mongoose.model('BusinessPartner', businessPartnerSchema);
