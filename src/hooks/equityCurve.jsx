export function equityCurve(trades) {
  let balance = 0;

  const labels = [];
  const values = [];

  trades
    .sort((a, b) => a.id - b.id)
    .forEach((trade, index) => {
      balance += Number(trade.pnl);

      labels.push(index + 1);
      values.push(balance);
    });

  return {
    labels,
    values,
  };
}