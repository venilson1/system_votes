/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tb_answer").del();
  await knex("tb_answer").insert([
    { survey_id: 1, field: "sim", votes: 0 },
    { survey_id: 1, field: "não", votes: 0 },
    { survey_id: 1, field: "talvez", votes: 0 },
  ]);
};
