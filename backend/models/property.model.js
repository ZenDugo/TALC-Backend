const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema(
	{
		username: { type: String, required: true },
		address: { type: String, required: true },
		description: { type: String, required: true },
		date: { type: Date, required: true },
		tenant: { type: String, required: false },
	},
	{
		timestamps: true,
	}
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
