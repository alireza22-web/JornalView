import { CalendarCell } from "./CalendarCell";

export function CalendarDays({ days , groupedTrades , year , month ,onOpen }) {
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  return (
    <div className="mt-2">
      <div className="grid grid-cols-7 gap-2 mb-2">
        {
          weekDays.map((day,i) => (
            <div key={i} className="text-center py-3 bg-sky-200 dark:bg-sky-950 rounded-lg">
              {day}
            </div>
          ))
        }
      </div>{/* روزهای هفته */}
      <div className="grid grid-cols-7 gap-2">
        {
          days.map((day,i) => (
              <CalendarCell
                key={i}
                day={day}
                groupedTrades={groupedTrades}
                month={month}
                year={year}
                onOpen={onOpen}
              />
          ))
        }
      </div>{/* روزهای ماه */}
    </div>
  );
}