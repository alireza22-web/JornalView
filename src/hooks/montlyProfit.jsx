export function monthlyProfit(trades) {
  const months = {};

  trades.forEach((trade) => {
    if (!trade.date) return;
    const month = trade.date.split("/")[1];
    if (!months[month]) {
      months[month] = 0;
    }

    months[month] += Number(trade.pnl);
  });

  return {
    labels: Object.keys(months),
    values: Object.values(months),
  };
}