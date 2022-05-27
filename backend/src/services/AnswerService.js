const knex = require("../database");

class AnswerService {
  async findAll() {
    const result = await knex("tb_answer")
      .select("id", "field", "votes", "survey_id")
      .orderBy("id");
    return result;
  }
}

module.exports = new AnswerService();
