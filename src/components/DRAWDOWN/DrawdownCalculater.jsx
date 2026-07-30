import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export function DrawdownCalculater({balance,dailyLimit,totalLimit,tradeRisk,phase1Target,phase2Target,onBalanceChange}){
  const [pnl, setPnl] = useState("");
  const [rows, setRows] = useState([]);
  const currentBalance =
      rows.length === 0
        ? balance
        : rows[rows.length - 1].balanceAfter;
        const phase1Amount =
        balance * phase1Target / 100;
    
    const phase2Amount =
        balance * phase2Target / 100;
    
    const totalTarget =
        phase1Amount + phase2Amount;
    
    const currentProfit =
        currentBalance - balance;
  const currentLoss = balance - currentBalance;

  const dailyPercent =
    (currentLoss / dailyLimit) * 100;

  const totalPercent =
    (currentLoss / totalLimit) * 100;

  const addTrade = () => {

    const lastBalance =
        rows.length === 0
            ? balance
            : rows[rows.length - 1].balanceAfter;

    const newBalance = lastBalance + Number(pnl);
    const phase1Percent =
    Math.min(
        (currentProfit / phase1Amount) * 100,
        100
    );

    const phase2Percent =
    currentProfit <= phase1Amount
        ? 0
        : Math.min(
              ((currentProfit - phase1Amount) /
                  phase2Amount) *
                  100,
              100
          );
    const row = {
        id: Date.now(),
        pnl: Number(pnl),
        balanceBefore: lastBalance,
        balanceAfter: newBalance
    };
    
    onBalanceChange(newBalance);
    setRows([...rows, row]);
    setPnl("");
  }
  return (
    <div>
      <div className="mt-8 flex items-center gap-4">
        <input
          type="number"
          placeholder="سود / ضرر معامله"
          value={pnl}
          onChange={(e)=>setPnl(e.target.value)}
          className="inp-risk w-60"
        />
        <button onClick={addTrade} className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white">
          ثبت معامله
        </button>
      </div>
      <div className="mt-8 overflow-hidden rounded-xl border border-zinc-700">
        <table className="w-full text-center">
          <thead className="bg-zinc-800 text-white">
            <tr>
              <th className="py-3">#</th>
              <th>قبل معامله</th>
              <th>PnL</th>
              <th>بعد معامله</th>
              <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></th>
            </tr>
          </thead>
          {
            rows.length > 0 ?
            <tbody>
              { 
                rows.map((row,index)=>(
                  <tr key={row.id} className="border-t border-zinc-700">
                    <td className="py-2">{index+1}</td>  
                    <td>{row.balanceBefore.toFixed(2)}</td>
                    <td className={row.pnl>=0?"text-green-500 font-bold":"text-red-500 font-bold"}>
                      {row.pnl>0?"+":""}
                      {row.pnl}
                    </td>
                    <td>{row.balanceAfter.toFixed(2)}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></td>
                  </tr>
                ))
              }
            </tbody>
            :
            <div className="flex items-center font-light justify-center p-2">اولین pnl خود را همین الان ثبت کن</div>
          }
          
        </table>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <ProgressBar
          title="دراداون روزانه"
          value={currentLoss}
          max={dailyLimit}
        />
        <ProgressBar
          title="دراداون کلی"
          value={currentLoss}
          max={totalLimit}
        />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <ProgressBar
            title="تارگت مرحله اول"
            type={'profit'}
            value={currentProfit}
            max={phase1Amount}
        />
        <ProgressBar
            title="تارگت مرحله دوم"
            type={'profit'}
            value={Math.max(currentProfit - phase1Amount,0)}
            max={phase2Amount}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}