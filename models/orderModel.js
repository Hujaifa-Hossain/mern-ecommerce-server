const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true,
		index: true
	},
	products: {
		type: Array,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	note: {
		type: String,
	},
});

module.exports = mongoose.model('Order', orderSchema);