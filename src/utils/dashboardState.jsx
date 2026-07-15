export function dashboardState(trades){
  const totalTrade = trades.length;
  const winTrade = trades.filter((trade)=>trade.result == 'TP').length;
  const lossTrade = trades.filter((trade)=>trade.result == 'SL').length;
  const totalProfit = trades
    .filter(trade => Number(trade.pnl) > 0)
    .reduce((sum, trade) => sum + Number(trade.pnl), 0);
  const totalLoss = trades
    .filter(trade => Number(trade.pnl) < 0)
    .reduce((sum, trade) => sum + Number(trade.pnl), 0);
  const winRate = totalTrade == 0 ? 0 : ((winTrade/totalTrade)*100).toFixed(0)
  const bestTrade = trades.length > 0 ? Math.max(...trades.map(t=>Number(t.pnl))) : 0;
  const worstTrade = trades.length > 0 ? Math.min(...trades.map(t=>Number(t.pnl))) : 0;
  const avrageRR = trades.length == 0 ? 0 : (trades.reduce((sum,trade)=>{
    const rr = Number(trade.riskReward.split(':')[1])
    return sum + rr;
  },0) / trades.length).toFixed(0)
  const profitFactor =
  totalLoss === 0
    ? 0
    : (totalProfit / Math.abs(totalLoss)).toFixed(2);
  const lastTrade = trades.length > 0
    ? trades.reduce((latest, trade) =>
        trade.id > latest.id ? trade : latest
      )
    : null;

    const sessionProfit = {};
    trades.forEach(trade => {

      const session = trade.session;
  
      if (!sessionProfit[session]) {
          sessionProfit[session] = 0;
      }
  
      sessionProfit[session] += Number(trade.pnl);
  
    });
    const bestSession =
    Object.entries(sessionProfit)
    .sort((a,b)=>b[1]-a[1])[0] || null; 

  return {
    totalTrade,
    winTrade,
    lossTrade,
    totalLoss,
    totalProfit,
    winRate,
    bestTrade,
    worstTrade,
    avrageRR,
    profitFactor,
    lastTrade,
    bestSession,
  }
} 