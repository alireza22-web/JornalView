import { useEffect, useState } from "react";
import '../custom.css'
import useTheme from "../hooks/useThem";
import { SideBar } from "../components/SideBar";
import { Dashboard } from "../components/Dashboard";
import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import InfoModal from "../components/InfoModal";
export function DashboardPage(){
  const [info,setinfo] = useState(true)
  return (
    <div className={`flex h-screen font-l transition duration-200 relative`}>
      <aside className="w-82 bg-white border-l border-zinc-50 dark:bg-zinc-900 dark:border-l dark:border-zinc-800">
        <SideBar/>
      </aside>
      <main className="flex-1  overflow-y-auto bg-zinc-200 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar/>
        <Dashboard/>
        <InfoModal/>
        
      </main>
    </div>
  );
}