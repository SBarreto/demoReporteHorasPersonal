const mongoose = require ('mongoose');

const jsonPostsSchema = mongoose.Schema({
  userId: {type: Number, required: true},
  id: {type: Number},
  title: {type: String},
  body: {type: String}
});

module.exports = mongoose.model('jsonPostsSchema', jsonPostsSchema);
