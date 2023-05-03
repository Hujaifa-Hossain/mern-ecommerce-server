const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true,
	},
  images: {
		type: Array,
		required: true
	},
  reviews: {
		type: Array
	},
});

module.exports = mongoose.model('Product', productSchema);
