const express = require("express");
const router = express.Router();
const SurveyControllers = require("./controllers/SurveyControllers");

router.get("/surveys", SurveyControllers.findAll);
router.post("/surveys", SurveyControllers.create);
router.put("/surveys/:id", SurveyControllers.update);
router.delete("/surveys/:id", SurveyControllers.update);

module.exports = router;
