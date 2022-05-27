const knex = require("../database");
const AnswerService = require("../services/AnswerService");
const surveyServices = require("../services/SurveyService");
const associationSurveysAndAnswers = require("../utils/associationSurveysAndAnswers");

class SurveyControllers {
  async findAll(req, res, next) {
    try {
      const result = await surveyServices.findAll();
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

  async findSurveysWithAnswers(req, res, next) {
    try {
      const surveys = await surveyServices.findAll();
      const answers = await AnswerService.findAll();

      const result = associationSurveysAndAnswers(surveys, answers);

      return res.json(result);
    } catch (error) {
      next(error);
    }
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

  async findFinished(req, res) {
    const result = await knex("tb_survey")
      .select("id", "title", "initial_date", "final_date")
      .where("initial_date", "<", "NOW()")
      .andWhere("final_date", "<", "NOW()");
    return res.json(result);
  }
}

module.exports = new SurveyControllers();
