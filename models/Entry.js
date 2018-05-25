const mongoose = require('mongoose');
const { Schema } = mongoose;

const entrySchema = new Schema({
  name: String,
  phoneNumber: String,
  url: String,
  email: String,
  priceMin: Schema.Types.Number,
  priceMax: Schema.Types.Number,
  sentListings: Array
});

mongoose.model('entries', entrySchema);
