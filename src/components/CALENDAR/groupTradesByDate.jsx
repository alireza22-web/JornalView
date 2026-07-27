export function groupTradesByDate(trades){

  return trades.reduce((acc,trade)=>{

      const date = trade.date;

      if(!acc[date]){
          acc[date]=[];
      }

      acc[date].push(trade);

      return acc;

  },{})

}