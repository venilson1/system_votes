const knex = require("../database");
const surveyServices = require("../services/SurveyService");
const surveysWithAnswers = require("../utils/surveysWithAnswers");

class SurveyControllers {
  async findAll(req, res, next) {
    try {
      const result = await knex("tb_survey").select(
        "id",
        "title",
        "initial_date",
        "final_date"
      );
      res.json(result);
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
