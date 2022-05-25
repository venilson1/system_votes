const knex = require("../database");

class SurveyControllers {
  async findAll(req, res) {
    const survey = await knex("tb_survey");
    return res.json(survey);
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
}

module.exports = new SurveyControllers();
