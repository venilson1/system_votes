const knex = require("../database");

class SurveyService {
  async findAll() {
    const result = await knex("tb_survey")
      .select("id", "title", "initial_date", "final_date")
      .orderBy("id");

    return result;
  }
}

module.exports = new SurveyService();
