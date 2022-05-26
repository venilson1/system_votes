const express = require("express");
const router = express.Router();
const SurveyControllers = require("./controllers/SurveyControllers");
const AnswerControllers = require("./controllers/AnswerControllers");

router.get("/surveys", SurveyControllers.findAll);
router.get("/surveys/:id", SurveyControllers.findById);
router.get(
  "/surveys/:survey_id/answers",
  SurveyControllers.findSurveysWithAnswers
);
router.get("/surveys/finished", SurveyControllers.findFinished);
router.get("/surveys/progress", SurveyControllers.findProgress);
router.get("/surveys/notstarted", SurveyControllers.findNotStarted);
router.post("/surveys", SurveyControllers.create);
router.put("/surveys/:id", SurveyControllers.update);
router.delete("/surveys/:id", SurveyControllers.delete);

router.get("/answers/:survey_id/survey", AnswerControllers.findAll);
router.post("/surveys/:survey_id/answer", AnswerControllers.create);
router.put("/answers/:id", AnswerControllers.update);
router.put("/answers/:id/votes", AnswerControllers.updateVotes);
router.delete("/answers/:id", AnswerControllers.delete);

module.exports = router;
