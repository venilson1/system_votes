const knex = require("../database");

class SurveyControllers {
  async findAll(req, res) {
    const survey = await knex("tb_survey");
    return res.json(survey);
  }
}

module.exports = new SurveyControllers();
