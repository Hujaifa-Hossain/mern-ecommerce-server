const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	user: {
		type: Array,
		required: true,
	},
	products: {
		type: Array,
		required: true,
	},
});

module.exports = mongoose.model('Cart', cartSchema);