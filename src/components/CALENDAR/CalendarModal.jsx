import { Link, Navigate } from "react-router-dom";

export function CalendarModal({trades,onClose,date}){
  const totalTrades = trades.length;
  const totalPnl = trades.reduce(
    (sum, trade) => sum + Number(trade.pnl),
    0
  );
  const winTrades = trades.filter(
    t => Number(t.pnl) > 0
  ).length;
  const lossTrades = trades.filter(
    t => Number(t.pnl) < 0
  ).length;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xl">
      <div className="absolute flex flex-col gap-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 rounded-2xl  max-h-[80vh] overflow-auto p-6">
        <header className="text-center flex gap-4 items-center justify-center">
          <p className="text-zinc-500 text-sm">
            خلاصه معاملات روز
          </p>
          <h2 className="text-2xl font-">
            {date}
          </h2>
        </header>
        <main className="flex flex-col gap-2">
          <div className="grid grid-cols-4 border-b-2 border-zinc-400 pb-5 border-dashed place-items-center">
            <div className="card-m-calendar">
              <p>کل معماملات :</p>
              <h3>{totalTrades}</h3>
            </div>
            <div className="card-m-calendar">
              <p>نتیجه روز :</p>
              <h3 className={totalPnl > 0 ? 'text-green-500' : 'text-red-600'}>{totalPnl > 0 ? '+' : ''}{totalPnl}</h3>
            </div>
            <div className="card-m-calendar">
              <p> معاملات سود :</p>
              <h3>{winTrades}</h3>
            </div>
            <div className="card-m-calendar">
              <p> معاملات ضرر :</p>
              <h3>{lossTrades}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {
              trades.map(trade=>{
                return (
                  <div className="p-4 flex items-center justify-around uppercase place-items-center rounded-xl border border-zinc-200 dark:border-zinc-700">
                    <div>{trade.symbol}</div>
                    <div>{trade.strategy}</div>
                    <div>{trade.session}</div>
                    <div>{trade.timeframe}</div>
                    <div>{trade.result}</div>
                    <span className={Number(trade.pnl) > 0 ? "text-green-600": "text-red-500"}>
                      {trade.pnl > 0 ? '+' : ''}{trade.pnl}
                    </span>
                    <Link to={`/journal/${trade.id}`} className="flex items-center gap-0.5 bg-sky-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-sky-700 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                      <span>مشاهده جزییات</span>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </main>
        <footer className="flex items-center justify-center">
          <button className="bg-red-500 px-8 py-2" onClick={onClose}>
            <span>بستن</span>
          </button>
        </footer>
      </div>
    </div>
  )
}