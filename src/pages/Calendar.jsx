import '../custom.css'
import { SideBar } from "../components/SideBar";
import { Navbar } from "../components/Navbar";
import { CalendarView } from "../components/CALENDAR/CalendarView";
export function Calendar(){

  return (
    <div className="flex h-screen font-l transition-colors duration-200">
      <aside className="w-82 bg-white border-l transition-colors duration-200 border-zinc-50 dark:bg-zinc-900 dark:border-l dark:border-zinc-800">
        <SideBar/>
      </aside>
      <main className="flex-1 overflow-y-auto bg-zinc-200 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar/>
        <CalendarView />
      </main>
    </div>
  );
}