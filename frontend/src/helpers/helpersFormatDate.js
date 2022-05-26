const formatter = new Intl.DateTimeFormat("pt-BR");

export function helpersFormatDate(date) {
  const value = formatter.format(new Date(date));
  return value;
}
