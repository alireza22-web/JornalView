import { replace, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useThem";
import Clock from "./Clock";

export function Navbar(){
  const { theme, toggleTheme } = useTheme();
  const user = JSON.parse(localStorage.getItem('journal-user'))
  
  return (
    <nav className="flex items-center transition-colors duration-200 justify-between px-6 bg-zinc-300 dark:bg-zinc-950 dark:border-b dark:border-black dark:shadow-sm dark:shadow-zinc-800 dark:text-zinc-300  w-full p-3">
      <div className="flex gap-2 items-center">
        <div className="border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>        
        </div>
          <span>{user.name}</span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <Clock/>
        <button onClick={toggleTheme} className="border cursor-pointer p-1.5 rounded-lg dark:bg-zinc-300 dark:text-zinc-950 bg-zinc-950 text-zinc-300">
          {theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" /></svg>}
        </button>
        
      </div>
    </nav>
  );
}