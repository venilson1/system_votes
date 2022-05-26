const knex = require("../database");

class SurveyService {
  async findSurveysWithAnswers(survey_id) {
    const query = knex("tb_survey");

    if (survey_id) {
      query
        .where({ survey_id })
        .join("tb_answer", "tb_survey.id", "=", "tb_answer.survey_id")
        .select(
          "title",
          "initial_date",
          "final_date",
          "field",
          "votes",
          "tb_answer.id"
        );
    }

    const result = await query;

    return result;
  }
}

module.exports = new SurveyService();
