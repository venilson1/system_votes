exports.up = (knex) =>
  knex.schema.createTable("tb_survey", (table) => {
    table.increments("id");
    table.text("title").notNullable();
    table.datetime("initial_date", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime("final_date", { precision: 6 }).defaultTo(knex.fn.now(6));

    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("update_at").notNullable().defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("tb_survey");
