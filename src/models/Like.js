const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: new Date() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
});

module.exports = mongoose.model('Like', likeSchema);
