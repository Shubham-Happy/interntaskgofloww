const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Update', UpdateSchema);
