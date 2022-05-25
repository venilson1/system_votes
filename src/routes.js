const express = require("express");
const router = express.Router();
const SurveyControllers = require("./controllers/SurveyControllers");

router.get("/surveys", SurveyControllers.findAll);

module.exports = router;
