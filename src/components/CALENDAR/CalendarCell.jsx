import { useState } from "react";
import { CalendarModal } from "./CalendarModal";

export function CalendarCell({day , groupedTrades , year , month , onOpen}){

  const toPersianNumber = (value) =>
    value.toString().replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const monthStr = toPersianNumber(
    String(month).padStart(2, "0")
  );

  const dayStr = toPersianNumber(
    String(day).padStart(2, "0")
  );
  const yearStr = toPersianNumber(year);
  const dateKey = `${yearStr}/${monthStr}/${dayStr}`;
  const trades = groupedTrades[dateKey] || [];
  const totalPnl = trades.reduce(
    (sum, trade) => sum + Number(trade.pnl),
    0
  );
  
  let bg = "";
  
  if (totalPnl > 0)
    bg = "bg-green-300 dark:bg-green-900 hover:bg-green-400 dark:hover:bg-green-800";
  
  else if (totalPnl < 0)
    bg = "bg-red-300 dark:bg-red-900 hover:bg-red-400 dark:hover:bg-red-800";
  
  else
    bg = "hover:bg-sky-100 dark:hover:bg-zinc-800";


  return (
    <div onClick={() => trades.length && onOpen(trades, dateKey)} className={`${bg} hover:shadow-lg hover:-translate-y-1 rounded-lg h-full p-2 flex-col gap-y-2 items-center aspect-square border border-zinc-300 dark:border-zinc-700 shadow flex  transition duration-100`}>

<div className="w-full flex justify-start">
  <span className="text-base font-bold">
    {day}
  </span>
</div>

  <div className="w-full">
    {
      trades.length > 0 &&
      <div className="text-xs text-blue-500 flex items-center justify-center">
        {trades.length} معامله
      </div>
    }
    <div className="flex flex-col px-3 gap-1 mt-2">
        {trades.slice(0, 3).map(trade => (
          <span
            key={trade.id}
            className={
              Number(trade.pnl) > 0
                ? "text-green-600 dark:text-green-400 text-xs font-semibold"
                : "text-red-500 text-xs font-semibold"
            }
          >
            {Number(trade.pnl) > 0 ? "+" : ""}
            {trade.pnl}
          </span>
        ))}

        {trades.length > 3 && (
          <span className="text-[10px] text-zinc-500">
            +{trades.length - 3} بیشتر
          </span>
        )}
    </div>
  </div>
  
</div>
  )
}