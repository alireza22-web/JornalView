import { useEffect, useMemo, useState } from "react";
import { CalendarDays } from "./CalendarDays";

import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import { groupTradesByDate } from "./groupTradesByDate";
import { db } from "../../db/dexie";
import { CalendarModal } from "./CalendarModal";
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
export function CalendarView() {

  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(1405);
  const [trades, setTrades] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTrades, setSelectedTrades] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenModal = (trades, date) => {
    setSelectedTrades(trades);
    setSelectedDate(date);
    setOpen(true);
  };
  
  async function loadData() {
    try {
      const data = await db.trades.toArray();
      setTrades(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  const handleMonth = (type) => {
    if (type === "next") {
      if (month === 12) {
        setMonth(1);
        setYear((prev) => prev + 1);
      } else {
        setMonth((prev) => prev + 1);
      }
    } else {
      if (month === 1) {
        setMonth(12);
        setYear((prev) => prev - 1);
      } else {
        setMonth((prev) => prev - 1);
      }
    }
  };

  const currentMonth = useMemo(
    () =>
      new DateObject({
        calendar: persian,
        year,
        month,
        day: 1,
      }),
    [year, month]
  );

  // تعداد روزهای ماه
  const monthLength = currentMonth.month.length;

  // روز شروع ماه (شنبه = 0)
  const firstWeekDay = currentMonth.weekDay.index;

  // ساخت روزهای تقویم
  const calendarDays = useMemo(() => {
    return [
      ...Array(firstWeekDay).fill(null),
      ...Array.from(
        { length: monthLength },
        (_, i) => i + 1
      ),
    ];
  }, [firstWeekDay, monthLength]);
  const groupedTrades = groupTradesByDate(trades);
  return (
    <main className="px-12 py-4">
      <div className="flex items-center justify-center gap-3 mb-6">
        <button onClick={() => handleMonth("prev")} className="p-2 rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800">
          ▶
        </button>
        <h2 className="px-8 py-2 rounded-lg bg-sky-200 dark:bg-zinc-900">
          {months[month - 1]} {year}
        </h2>
        <button onClick={() => handleMonth("next")} className="p-2 rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800">
          ◀
        </button>
      </div>
      <CalendarDays onOpen={handleOpenModal}  days={calendarDays} groupedTrades={groupedTrades} year={year} month={month} />
      {
        open &&
          <CalendarModal
            trades={selectedTrades}
            date={selectedDate}
            onClose={() => setOpen(false)}
          />
      }
    </main>
  );
}