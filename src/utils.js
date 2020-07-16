export const getPercentPieChart = data => {
  return data.map(item => [
    item.children,
    item.percent > 0 ? item.percent : 1
  ]);
}