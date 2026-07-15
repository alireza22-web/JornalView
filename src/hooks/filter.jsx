export function filter(trades,filters){
  let data = [...trades]
  if (filters.symbol) {
    data = data.filter(
        trade => trade.symbol === filters.symbol
    );
  }
  if (filters.result) {
    data = data.filter(
        trade => trade.result === filters.result
    );
  }
  if (filters.type) {
    data = data.filter(
        trade => trade.type === filters.type
    );
  }
  switch (filters.sort) {
    case "newest":
        data.sort((a,b)=>b.id-a.id);
        break;
    case "oldest":
        data.sort((a,b)=>a.id-b.id);
        break;
    case "profit":
        data.sort((a,b)=>b.pnl-a.pnl);
        break;
    case "loss":
        data.sort((a,b)=>a.pnl-b.pnl);
        break;
  }
  if(filters.fromDate){
    data = data.filter(
        trade => trade.date >= filters.fromDate
    );
  }
  if(filters.toDate){
      data = data.filter(
          trade => trade.date <= filters.toDate
      );
  }
  return data
}