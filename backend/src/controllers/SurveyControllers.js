const knex = require("../database");
const surveyServices = require("../services/SurveyService");
const surveysWithAnswers = require("../utils/surveysWithAnswers");

class SurveyControllers {
  async findAll(req, res, next) {
    try {
      const finished = req.query;

      Object.keys(finished)[0] === "finished";

      const result = await knex("tb_survey")
        .select("id", "title", "initial_date", "final_date")
        .orderBy("id");
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await knex("tb_survey")
        .select("id", "title", "initial_date", "final_date")
        .where({ id })
        .first();

      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async findSurveysWithAnswers(req, res) {
    const { survey_id } = req.params;

    try {
      const result = await surveyServices.findSurveysWithAnswers(survey_id);

      if (result.length === 0) {
        return res.json({ answers: [] });
      }

      const survey = surveysWithAnswers(result, survey_id);
      return res.json(survey);
    } catch (error) {
      next(error);
    }
  }

  async findFinished(req, res) {
    const result = await knex("tb_survey")
      .select("id", "title", "initial_date", "final_date")
      .where("initial_date", "<", "NOW()")
      .andWhere("final_date", "<", "NOW()");
    return res.json(result);
  }

  async findProgress(req, res) {
    const result = await knex("tb_survey")
      .select("id", "title", "initial_date", "final_date")
      .where("initial_date", "<", "NOW()")
      .andWhere("final_date", ">", "NOW()");
    return res.json(result);
  }

  async findNotStarted(req, res) {
    const result = await knex("tb_survey")
      .select("id", "title", "initial_date", "final_date")
      .where("initial_date", ">", "NOW()")
      .andWhere("final_date", ">", "NOW()");
    return res.json(result);
  }

  async create(req, res, next) {
    try {
      const { title, initial_date, final_date } = req.body;
      await knex("tb_survey").insert({ title, initial_date, final_date });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, initial_date, final_date } = req.body;
      await knex("tb_survey")
        .update({ title, initial_date, final_date })
        .where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex("tb_survey").where({ id }).del();
      return res.send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SurveyControllers();
