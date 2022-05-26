module.exports = function surveysWithAnswers(result, survey_id) {
  let surveysWithAnswers = {
    id: 0,
    title: "",
    initial_date: "",
    final_date: "",
    answers: [],
  };

  surveysWithAnswers.id = parseInt(survey_id);
  surveysWithAnswers.title = result[0].title;
  surveysWithAnswers.initial_date = result[0].final_date;
  surveysWithAnswers.final_date = result[0].final_date;

  result.forEach(({ id, field, votes }) => {
    surveysWithAnswers.answers.push({ id, field, votes });
  });

  return surveysWithAnswers;
};
