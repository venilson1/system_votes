exports.seed = async (knex) => {
  await knex("tb_survey").del();
  await knex("tb_survey").insert([
    {
      title: "Bolo de chocolate",
      initial_date: "2020-06-30",
      final_date: "2020-08-30",
    },
    {
      title: "Surpresa pra vó",
      initial_date: "2022-05-28",
      final_date: "2022-06-12",
    },
  ]);
};
