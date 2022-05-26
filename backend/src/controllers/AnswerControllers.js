const knex = require("../database");

class AnswerControllers {
  async findAll(req, res) {
    const { survey_id } = req.params;

    const query = knex("tb_answer");

    if (survey_id) {
      query
        .where({ survey_id })
        .select(
          "tb_answer.id",
          "tb_answer.field",
          "tb_answer.votes",
          "tb_survey.title"
        )
        .join("tb_survey", "tb_survey.id", "=", "tb_answer.survey_id");
    }

    const results = await query;
    return res.json(results);
  }

  async create(req, res) {
    try {
      const { survey_id } = req.params;
      parseInt(survey_id);
      const { field } = req.body;
      const votes = 0;

      await knex("tb_answer").insert({ field, votes, survey_id });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { field } = req.body;
      const votes = 0;

      await knex("tb_answer").update({ field, votes }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async updateVotes(req, res, next) {
    try {
      const { id } = req.params;

      const { votes } = await knex("tb_answer")
        .where({ id })
        .select("votes")
        .first();

      const newVote = votes + 1;

      await knex("tb_answer").update({ votes: newVote }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex("tb_answer").where({ id }).del();
      return res.send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AnswerControllers();
