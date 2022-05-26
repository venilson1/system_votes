export function helpersDefinitionStatus(init, final) {
  const date = new Date();
  const dateNow = date.toISOString();

  if (init < dateNow && final < dateNow) {
    return "finalizado";
  }

  if (init < dateNow && final > dateNow) {
    return "andamento";
  }

  if (init > dateNow && final > dateNow) {
    return "não iniciado";
  }
}
