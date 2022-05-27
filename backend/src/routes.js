const express = require("express");
const router = express.Router();
const SurveyControllers = require("./controllers/SurveyControllers");
const AnswerControllers = require("./controllers/AnswerControllers");

router.get("/surveys", SurveyControllers.findAll);
router.get("/surveys/:id", SurveyControllers.findById);
router.get("/surveyswithanswers", SurveyControllers.findSurveysWithAnswers);
router.post("/surveys", SurveyControllers.create);
router.put("/surveys/:id", SurveyControllers.update);
router.delete("/surveys/:id", SurveyControllers.delete);

router.get("/answers", AnswerControllers.findAll);
router.get("/answers/:survey_id/survey", AnswerControllers.findAnswerBySurvey);
router.get("/answers/:id", AnswerControllers.findById);
router.post("/surveys/:survey_id/answer", AnswerControllers.create);
router.put("/answers/:id", AnswerControllers.update);
router.put("/answers/:id/votes", AnswerControllers.updateVotes);
router.delete("/answers/:id", AnswerControllers.delete);

/* TODO AND improvement */
router.get("/surveys/finished", SurveyControllers.findFinished);
router.get("/surveys/progress", SurveyControllers.findProgress);
router.get("/surveys/notstarted", SurveyControllers.findNotStarted);

module.exports = router;
