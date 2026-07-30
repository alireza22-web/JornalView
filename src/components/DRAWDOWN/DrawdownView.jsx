import { useState } from "react";
import { DrawdownCalculater } from "./DrawdownCalculater";
import { motion } from "framer-motion";

const initialData = {
  balance: "",
  maxDailyDrawdown: "",
  maxTotalDrawdown: "",
  riskPerTrade: "",
  phase1Target: "",
  phase2Target: "",
};

export function DrawdownView() {
  const [data, setData] = useState(initialData);
  const [liveBalance,setLiveBalance]=useState(Number(data.balance));
  const [result,setResult] = useState({
    dailyLoss:0,
    totalLoss:0,
    dailyBalance:0,
    totalBalance:0,
    tradeRisk:0,
    dailyTrades:0,
    totalTrades:0
})
  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = Number(data.balance);

    const dailyPercent = Number(data.maxDailyDrawdown);
    
    const totalPercent = Number(data.maxTotalDrawdown);
    
    const dailyLoss =
      balance * dailyPercent / 100;
    
    const totalLoss =
      balance * totalPercent / 100;
    
    const dailyBalance =
      balance - dailyLoss;
    
    const totalBalance =
      balance - totalLoss;
      const tradeRisk =
      balance * (Number(data.riskPerTrade)/100);
      const dailyTrades =dailyLoss / tradeRisk;
      const totalTrades =totalLoss / tradeRisk;

      setResult({
        dailyLoss,
        totalLoss,
        dailyBalance,
        totalBalance,
        tradeRisk,
        dailyTrades,
        totalTrades
    
    })
  };

  return (
    <main className="p-5 flex flex-col gap-6">
      <div className="flex items-stretch gap-3">
        <div className="rounded-2xl bg-white w-2/3 px-8 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 py-4 shadow-xl">
          <h2 className="text-3xl text-center mb-8">
            محاسبه‌گر دراداون
          </h2>
          <form 
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-5 "
          >
            <input
              className="inp-risk"
              type="number"
              placeholder="سرمایه اولیه"
              value={data.balance}
              onChange={(e) =>
                setData({
                  ...data,
                  balance: e.target.value,
                })
              }
            />
            <input
              type="number"
              className="inp-risk"
              placeholder="ریسک هر معامله (%)"
              value={data.riskPerTrade}
              onChange={(e)=>
                setData({
                  ...data,
                  riskPerTrade:e.target.value
                })
              }
            />
            <input
              className="inp-risk"
              type="number"
              placeholder="دراداون روزانه (%)"
              value={data.maxDailyDrawdown}
              onChange={(e) =>
                setData({
                  ...data,
                  maxDailyDrawdown: e.target.value,
                })
              }
            />

            <input
              className="inp-risk"
              type="number"
              placeholder="دراداون کلی (%)"
              value={data.maxTotalDrawdown}
              onChange={(e) =>
                setData({
                  ...data,
                  maxTotalDrawdown: e.target.value,
                })
              }
            />
            
            <input
              type="number"
              className="inp-risk"
              placeholder="تارگت مرحله اول (%)"
              value={data.phase1Target}
              onChange={(e)=>
                setData({
                  ...data,
                  phase1Target:e.target.value
                })
              }
            />
            <input
              type="number"
              className="inp-risk"
              placeholder="تارگت مرحله دوم (%)"
              value={data.phase2Target}
              onChange={(e)=>
                setData({
                  ...data,
                  phase2Target:e.target.value
                })
              }
            />
            <button className="mx-2 col-span-2 py-2 cursor-pointer transition rounded-xl bg-sky-600 hover:bg-sky-700 text-white">محاسبه</button>
          </form>
        </div>
        <div className="flex items-center shadow-xl rounded-2xl bg-zinc-50 justify-center w-1/3">
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-zinc-500 text-sm">سرمایه اولیه</span>
            <motion.h2
                key={liveBalance}
                initial={{
                    opacity:0,
                    y:20
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:0.3
                }}
                className="text-6xl font-bold mt-4"
            >
              {liveBalance == 0 ? data.balance || 0 :liveBalance.toLocaleString()}
            </motion.h2>
            <span className="mt-3 text-zinc-500">
                USD
            </span>
          </div>
        </div>
      </div>
      <div className="p-2 flex gap-4 items-start">
        <section className="mt-4 w-1/4">
          <h2 className="text-center text-2xl mb-2">
              نتیجه محاسبات
          </h2>
          <div className="grid grid-cols-1  gap-3 text-xs font-light">
            <div className="card-risk ">
                <p>حداکثر ضرر روزانه</p>
                <h3>{result.dailyLoss.toFixed(2)}</h3>
            </div>
            <div className="card-risk">
                <p>حداکثر ضرر کلی</p>
                <h3>{result.totalLoss.toFixed(2)}</h3>
            </div>
            <div className="card-risk">
                <p>حداقل موجودی مجاز روزانه</p>
                <h3>{result.dailyBalance.toFixed(2)}</h3>
            </div>
            <div className="card-risk">
              <p>حداقل موجودی مجاز کلی</p>
              <h3>{result.totalBalance.toFixed(2)}</h3>
            </div>
            <div className="card-risk">
              <p>تعداد باخت مجاز روزانه</p>
              <h3>{Math.floor(result.dailyTrades)}</h3>
            </div>
            <div className="card-risk">
              <p>تعداد باخت مجاز کلی</p>
              <h3>{Math.floor(result.totalTrades)}</h3>
            </div>
          </div>
        </section>
        <section className=" w-3/4">
          <DrawdownCalculater
              balance={Number(data.balance)}
              dailyLimit={result.dailyLoss}
              totalLimit={result.totalLoss}
              tradeRisk={result.tradeRisk}
              phase1Target={Number(data.phase1Target)}
              phase2Target={Number(data.phase2Target)}
              onBalanceChange={setLiveBalance}
          />
        </section>
      </div>
    </main>
  );
}