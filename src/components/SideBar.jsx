import { Link, NavLink, useNavigate } from "react-router-dom";
export function SideBar(){
  const navigate = useNavigate();
  const logout = ()=>{
    const Exit = window.confirm('آیا میخواهید از حساب کاربری خارج شوید؟')
    if(!Exit) return
    localStorage.removeItem('journal-user')
    navigate('/login')
  }
  const linkSide = [
    {
      title:'داشبورد',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M13.45 11.55l2.05 -2.05" /><path d="M6.4 20a9 9 0 1 1 11.2 0l-11.2 0" /></svg>,
      link:'/dashboard'
    },
    {
      title:'ژورنال',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-notes"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>,
      link:'/journal'
    },
    {
      title:'تقویم معاملاتی',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2l0 -2" /></svg>,
      link:'/calendar'
    },   
    {
      title:'محاسبه ریسک',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calculator"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14" /><path d="M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1" /><path d="M8 14l0 .01" /><path d="M12 14l0 .01" /><path d="M16 14l0 .01" /><path d="M8 17l0 .01" /><path d="M12 17l0 .01" /><path d="M16 17l0 .01" /></svg>,
      link:'/risk'
    },   
    {
      title:'تصاویر معاملات',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-photo-alt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 18h5" /><path d="M14 18h4" /><path d="M15 7h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" /><path d="M3 15l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 13l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /><path d="M3 15h18" /></svg>,
      link:'/gallery'
    },    
    {
      title:'آزمایش استراتژی',
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-a-b-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3" /><path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3" /><path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" /><path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" /><path d="M8 7h-4" /></svg>,
      link:'/backtest'
    },
  ]
  return (
    <div className="flex flex-col ites justify-between h-full">
      <div className="px-4 py-6 transition-colors duration-200">
        <div className="font-l text-6xl  text-center text-red-600">
          <span className="text-zinc-800 dark:text-zinc-100"><span className="text-blue-700">ژورنال</span> ویو</span>
        </div>
        <div className="p-3 mt-6 text-xl flex-col flex gap-2 font-b font-extrabold text-zinc-950 dark:text-zinc-200">
          <Link to={'/'} className="p-2 rounded-lg transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-950">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              <span>صفحه اصلی</span>
            </span>
          </Link>
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
      <div className="px-8">
        <button onClick={logout} className="text-red-900 cursor-pointer hover:opacity-80 transition w-full bg-red-500 px-4 mb-12 py-2 rounded-lg">
          <span>خروج</span>
        </button>
      </div>
    </div>
  );
}