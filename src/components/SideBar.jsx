import { NavLink } from "react-router-dom";
export function SideBar(){
  const linkSide = [
    {
      title:'داشبورد',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M13.45 11.55l2.05 -2.05" /><path d="M6.4 20a9 9 0 1 1 11.2 0l-11.2 0" /></svg>,
      link:'/'
    },
    {
      title:'ژورنال',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-notes"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>,
      link:'/journal'
    },
    {
      title:'آزمایش استراتژی',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-notes"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>,
      link:'/backtest'
    },
  ]
  return (
    <div className="px-4 py-6 transition-colors duration-200">
      <div className="font-l text-6xl  text-center text-red-600">
        <span className="text-zinc-800 dark:text-zinc-100"><span className="text-blue-700">ژورنال</span> ویو</span>
      </div>
      <div className="p-3 mt-12 text-2xl flex-col flex gap-2 font-b font-extrabold text-zinc-950 dark:text-zinc-200">
        {
          linkSide.map(side=>{
            return (
                <NavLink key={side.title} to={side.link} className={({ isActive }) => isActive ? "p-2 rounded-lg transition-colors duration-200 bg-zinc-300 dark:text-zinc-300 dark:bg-zinc-800" : "p-2 rounded-lg transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-950" } >
                      <span className="flex items-center gap-2">
                        <span>{side.icon}</span>
                        <span>{side.title}</span>
                      </span>
                </NavLink>
            )
          })
        }
      </div>
    </div>
  );
}