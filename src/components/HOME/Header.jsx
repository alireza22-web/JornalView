import { Link } from "react-router-dom";
import imgPoster from '../../../public/img/HeaderPoster3.png'
import imgPosterDark from '../../../public/img/HeaderDark.png'
import { useEffect, useState } from "react";
import useTheme from "../../hooks/useThem";
export function Header(){
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

useEffect(() => {
  const interval = setInterval(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
  }, 100);

  return () => clearInterval(interval);
}, []);
  
    
  return (
    <header className="flex flex-col gap-2 items-center justify-center mt-10">
      <div className="flex items-center justify-center flex-col gap-4">
        <h3 className="te px-4 font-light py-0.5 bg-sky-200 rounded-full outline-2 outline-offset-2 outline-sky-500 dark:bg-sky-900 ">مسیر معامله‌گری حرفه‌ای از ثبت و تحلیل معاملات شروع می‌شود.</h3>
        <h1 className="text-5xl py-2 mt-2">هر <span className="text-green-600">معامله</span> را ثبت کن، هر <span className="text-red-600">اشتباه</span> را به یک درس تبدیل کن.</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mx-12 w-2/3 text-center">تمام معاملات خود را در یک محیط ساده و حرفه‌ای ثبت کنید، تصاویر چارت را ذخیره کنید، عملکرد خود را با نمودارهای تحلیلی بررسی کنید و نقاط ضعف و قوت استراتژی‌تان را به‌صورت دقیق شناسایی کنید.</p>
        <div className="flex gap-3 items-center justify-center mt-3">
          <Link to={'/dashboard'} className="px-6 hover:scale-102 transition-all duration-100 ease-in-out py-2 rounded-xl text-lg bg-sky-600 flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
            <span>شروع رایگان</span>
          </Link>
          <a href='#emka' className="px-6 hover:scale-102 transition-all duration-100 ease-in-out py-2 rounded-xl text-lg border-2 border-sky-600 flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-4chan"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 11s6.054 -1.05 6 -4.5c-.038 -2.324 -2.485 -3.19 -3.016 -1.5c0 0 -.502 -2 -2.01 -2c-1.508 0 -2.984 3 -.974 8" /><path d="M13.98 11s6.075 -1.05 6.02 -4.5c-.038 -2.324 -2.493 -3.19 -3.025 -1.5c0 0 -.505 -2 -2.017 -2c-1.513 0 -3 3 -.977 8l-.001 0" /><path d="M13 13.98l.062 .309l.081 .35l.075 .29l.092 .328l.11 .358l.061 .188l.139 .392c.64 1.73 1.841 3.837 3.88 3.805c2.324 -.038 3.19 -2.493 1.5 -3.025l.148 -.045l.165 -.058a4.13 4.13 0 0 0 .098 -.039l.222 -.098c.586 -.28 1.367 -.832 1.367 -1.777c0 -1.513 -3 -3 -8 -.977" /><path d="M10.02 13l-.309 .062l-.35 .081l-.29 .075l-.328 .092l-.358 .11l-.188 .061l-.392 .139c-1.73 .64 -3.837 1.84 -3.805 3.88c.038 2.324 2.493 3.19 3.025 1.5l.045 .148l.058 .165l.039 .098l.098 .222c.28 .586 .832 1.367 1.777 1.367c1.513 0 3 -3 .977 -8" /><path d="M11 10.02l-.062 -.309l-.081 -.35l-.075 -.29l-.092 -.328l-.11 -.358l-.128 -.382l-.148 -.399c-.658 -1.687 -1.844 -3.634 -3.804 -3.604c-2.324 .038 -3.19 2.493 -1.5 3.025l-.148 .045l-.164 .058a4.13 4.13 0 0 0 -.1 .039l-.22 .098c-.588 .28 -1.368 .832 -1.368 1.777c0 1.513 3 3 8 .977" /></svg>
            <span>مشاهد امکانات</span>
          </a>
        </div>
      </div>
      <div className="mt-6 overflow-hidden flex-1 w-scree object-contain">
        {

          theme === 'dark' ? <img src={imgPosterDark} className="h-75 w-screen object-cover" alt="" /> : <img src={imgPoster} className="h-75 w-screen object-cover" alt="" />
        }
          
           {/* <img src={imgPoster} className="h-75 w-screen object-cover" alt="" /> */}
          
        
      </div>
    </header>
  )
}