// 내림차순
export const dateDescending = (a, b) => {
  var dateA = new Date(a['date']).getTime();
  var dateB = new Date(b['date']).getTime();
  return dateA < dateB ? 1 : -1;
};

// 오름차순
export const dateAscending = (a, b) => {
  var dateA = new Date(a['date']).getTime();
  var dateB = new Date(b['date']).getTime();
  return dateA > dateB ? 1 : -1;
};
