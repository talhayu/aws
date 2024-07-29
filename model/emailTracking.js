const mongoose = require('mongoose');

const emailTracking = new mongoose.Schema({
    emailAddress: String,
    isRead: {
        type: Boolean,
        default:  false
    }
})
const emailsTracked = mongoose.model('emailTracking', emailTracking)
module.exports = emailsTracked