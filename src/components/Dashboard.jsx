import { useEffect, useState } from "react";
import { db } from "../db/dexie";
import { dashboardState } from "../utils/dashboardState";
import CountUp from "react-countup";
import { EquityCurve, MonthlyProfit, SessionProfitChart, WinRateChart } from "../utils/chartData";
import { monthlyProfit } from "../hooks/montlyProfit";
import { equityCurveEdit } from "../hooks/equityCurveEdit";

export function Dashboard(){
  const [trades,setTrades] = useState([])
  async function loadData(){
    try {
      const journal = await db.trades.toArray()
      setTrades(journal)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    loadData()
  },[])
  const stats = dashboardState(trades)
  const monthlyData = monthlyProfit(trades);

  const sessionProfit = {};
  trades.forEach((trade) => {
    const session = trade.session || "نامشخص";
    const pnl = Number(trade.pnl) || 0;
  
    if (!sessionProfit[session]) {
      sessionProfit[session] = 0;
    }
  
    sessionProfit[session] += pnl;
    return {
      ...
      sessionProfit,
    }
  });
  const sessionValues = Object.values(sessionProfit);
  const sessionLabels = Object.keys(sessionProfit);
  const equityData = equityCurve(trades);

  return (
    <div className="px-4 py-6 max-w-screen transition-colors duration-200">
      <article className="flex flex-col gap-12">
        <div className="grid grid-cols-5 mx-12 gap-3">
          {/* <div className="flex mx-25 justify-around gap-4"> */}
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>تمام معاملات</span>
              <span>{stats.totalTrade}</span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>معاملات سود</span>
              <span>{stats.winTrade}</span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>معاملات ضرر</span>
              <span>{stats.lossTrade}</span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>مجموع سود</span>
              <span className="text-green-600"><CountUp duration={3} start={0} end={stats.totalProfit} separator="," />$</span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>مجموع ضرر</span>
              <span className="text-red-600"><CountUp duration={3} start={0} end={stats.totalLoss} separator="," />$ </span>
            </div>
          {/* </div> */}
          {/* <div className="flex mx-25 justify-around gap-4"> */}
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>نرخ سود</span>
              <span>{stats.winRate}%</span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>بهترین سود</span>
              <span className="text-green-600">+<CountUp duration={3} start={0} end={stats.bestTrade} separator="," /></span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>بدترین ضرر</span>
              <span className="text-red-600"><CountUp duration={3} start={0} end={stats.worstTrade < 0 ? stats.worstTrade : 0} separator="," /></span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>میانگین ریسک به ریوارد</span>
              <span>1:{stats.avrageRR}</span>
            </div>
            <div className="card flex-1 flex flex-col gap-2 items-center justify-center">
              <span>نسبت سود به ضرر</span>
              <span>{stats.profitFactor}</span>
            </div>
          {/* </div> */}
        </div>{/* card */}
        <div className="mx-12 grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <SessionProfitChart labels={sessionLabels} values={sessionValues}/>
          </div>
          <div className="font-l">
            <WinRateChart winTrade={stats.winTrade} lossTrade={stats.lossTrade}/>
          </div>
          <div className="col-span-2">
            <MonthlyProfit labels={monthlyData.labels} values={monthlyData.values} />
          </div>
          <div className="flex h-full items-cente justify-between flex-col gap-3">
            <div>
              <div className="card h-full flex flex-col gap-2 justify-center items-center">
                {
                  stats.lastTrade ? (
                  <>
                    <h2>آخرین معامله</h2>
                    <h2 className="text-2xl font-bold uppercase">
                        {stats.lastTrade.symbol}
                    </h2>
                    <div className="flex gap-4 items-center ">
                      <span>
                          {stats.lastTrade.pnl}$
                      </span>
                      <span className="text-sm text-zinc-600">
                          {stats.lastTrade.date}
                      </span>
                    </div>
                  </>
                  ) : (
                    <span>ثبت نشده</span>
                  )
                }
              </div>
            </div>
            <div className="card h-full flex flex-col justify-center items-center gap-2">
              {
                  stats.bestSession ? (
                      <>
                        <span className="text-zinc-500">
                            بهترین سشن
                        </span>
                        <h2 className="text-2xl uppercase font-bold">
                            {stats.bestSession[0]}
                        </h2>
                        <span className="text-green-600">
                            {stats.bestSession[1]} $
                        </span>
                      </>
                  ) : (
                      <span>ندارد</span>
                  )
              }
            </div>
          </div>
          <div className="col-span-4">
            <EquityCurve labels={equityData.labels} values={equityData.values} />
          </div>
          
        </div>{/* chart */}
      </article>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}