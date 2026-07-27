import { useState } from "react";
import { symbolInfo } from "./symbolInfo" ;

const initialData = {
  balance: "",
  risk: "",
  entry: "",
  stopLoss: "",
  symbol: "xauusd",
};
export function RiskManagerView(){

  const [data,setData] = useState(initialData)
  const [result, setResult] = useState({
    riskAmount: 0,
    stopDistance: 0,
    lotSize: 0,
    valuePerPoint: 0,
  });
  const symbol = symbolInfo[data.symbol];
  const handleSubmit = (e)=>{
    e.preventDefault()
    const valuePerPoint = symbol.contractSize;
    const balance = Number(data.balance);
    const risk = Number(data.risk);
    const entry = Number(data.entry);
    const stopLoss = Number(data.stopLoss);
    const riskAmount = balance * (risk / 100);
    const stopDistance = Math.abs(entry - stopLoss);
    const lotSize = riskAmount / (stopDistance * valuePerPoint);

setResult({
  riskAmount,
  stopDistance,
  lotSize,
  valuePerPoint,
});
    console.log(data);
    // setData(initialData)
  }

  return (
    <main className="p-5 flex flex-col gap-4">
      <div className="flex flex-col gap-5 rounded-2xl  bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-8 shadow-xl">
        <div className="flex items-center justify-center text-3xl">
          <span>مدیریت ریسک معامله</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-y-4 items-center justify-around px-20">
          <input type="number" placeholder="بالانس حساب" className="inp-risk" value={data.balance} onChange={(e) => setData({...data,balance: e.target.value,})}/>
          <input type="number" placeholder="ریسک معامله" className="inp-risk" value={data.risk} onChange={(e) => setData({...data,risk: e.target.value,})}/>
          <input type="number" placeholder="نقطه ورود" className="inp-risk" value={data.entry} onChange={(e) => setData({...data,entry: e.target.value,})}/>
          <input type="number" placeholder="حد ضرر" className="inp-risk" value={data.stopLoss} onChange={(e) => setData({...data,stopLoss: e.target.value,})}/>
          <select className="inp-risk-s" value={data.symbol} onChange={(e) => setData({...data,symbol: e.target.value,})}>
            <option value="xauusd">XAUUSD</option>
            <option value="nas100">NAX100</option>
            <option value="us30">US30</option>
            <option value="eurusd">EURUSD</option>
          </select>
          <button className="px-8 py-3 rounded-xl cursor-pointer bg-sky-600 hover:bg-sky-700 text-white transition "  type="submit">
            <span>محاسبه</span>
          </button>
        </form>
      </div>
      <section className="mt-12 flex flex-col gap-6">
        <div className="text-2xl flex items-center justify-center">
          <span>نتیجه محاسبات</span>
        </div>
        <div className="flex items-center justify-center gap-12">
          <div className="card-risk">مبلغ ریسک : {result.riskAmount.toFixed(2)}</div>
          <div className="card-risk">فاصله استاپ : {result.stopDistance.toFixed(2)}</div>
          <div className="card-risk">حجم معامله : {result.lotSize.toFixed(2)}</div>
          <div className="card-risk">ارزش هر پیپ : {result.valuePerPoint}</div>
        </div>
      </section>
    </main>
  )
}