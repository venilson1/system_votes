module.exports = function associationSurveysAndAnswers(surveys, answers) {
  surveys.forEach((sur) => (sur.answers = []));

  answers.map((el_ans) => {
    for (let i = 0; i < surveys.length; i++) {
      if (surveys[i].id === el_ans.survey_id) {
        surveys[i].answers.push(JSON.stringify(el_ans));
      }
    }
  });

  return surveys;
};
