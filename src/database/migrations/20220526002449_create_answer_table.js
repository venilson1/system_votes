exports.up = (knex) =>
  knex.schema.createTable("tb_answer", (table) => {
    table.increments("id");
    table.text("field").notNullable();
    table.mediumint("votes").notNullable();

    table
      .integer("survey_id", 10)
      .references("tb_survey.id")
      .notNullable()
      .onDelete("CASCADE");

    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTable("tb_answer");
