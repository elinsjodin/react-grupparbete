const express = require("express");
const router = express.Router();
const TestingController = require("../controllers/testingController.js");
const testingController = new TestingController();

router.delete("/", testingController.DeleteDataFromDataBase);

module.exports = router;
