const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema ({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Users', Users);