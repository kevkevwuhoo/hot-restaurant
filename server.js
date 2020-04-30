// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// store reservation & waitlist data
let reservations = [
	{
		customerName: "Kevin",
		customerEmail: "kevkevwu@example.com",
		customerID: "kevkevwu",
		phoneNumber: "000-000-0000",
	},
];
let waitlist = [];

// routes
app.get("/api/tables", (req, res) => {
	return res.json(reservations);
});

app.get("/api/waitlist", (req, res) => {
	return res.json(waitlist);
});

app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
