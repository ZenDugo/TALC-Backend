const router = require("express").Router();
let Estate = require("../models/property.model");

router.get("/", (req, res) => {
	Estate.find()
		.then((estates) => res.json(estates))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
	const username = req.body.username;
	const address = req.body.address;
	const description = req.body.description;
	const tenant = req.body.tenant;
	const date = Date.parse(req.body.date);

	const newEstate = new Estate({
		username,
		address,
		description,
		date,
		tenant,
	});

	newEstate
		.save()
		.then(() => res.json("Estate has been added"))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
	Estate.findById(req.params.id)
		.then((estate) => res.json(estate))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
	Estate.findByIdAndDelete(req.params.id)
		.then(() => res.json("Estate Deleted"))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
	Estate.findByIdAndUpdate(req.params.id)
		.then((estate) => {
			estate.username = req.body.username;
			estate.address = req.body.address;
			estate.description = req.body.description;
			estate.date = Date.parse(req.body.date);
			estate.tenant = req.body.tenant;

			estate
				.save()
				.then(() => res.json("Estate has been updated"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
