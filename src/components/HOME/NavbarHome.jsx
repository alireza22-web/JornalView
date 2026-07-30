import { Link } from "react-router-dom";
import useTheme from "../../hooks/useThem";

export function NavbarHome(){
  const { theme, toggleTheme } = useTheme();
  const listLink = [
    {
      title:'ویژگی ها',
      link:'#features'
    },
    // {
    //   title:'مقاله ها',
    //   link:'/'
    // },
    {
      title:'سوالات متداول',
      link:'#faq'
    },
    {
      title:'تماس با ما',
      link:'#connect'
    },
  ]
  const user = JSON.parse(localStorage.getItem('journal-user'))
  if(user){
    console.log('yse');
  }else if(!user){
    console.log('no');
  }
  return (
    <nav className="py-4 px-6 flex justify-between ">
        <div className="flex gap-12 items-center">
          <div className="font-l text-6xl text-center text-red-600">
            <span className="text-zinc-800 dark:text-zinc-100"><span className="text-blue-700">ژورنال</span> ویو</span>
          </div>
          <div className="flex gap-6 items-center text-xl">
            {
              listLink.map(item=>{
                return (
                  <a key={item.link} href={item.link}>
                    <span>{item.title}</span>
                  </a>
                )
              })
            }
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link className="px-4 py-2 bg-sky-700 text-zinc-200 rounded-lg hover:bg-sky-600 transition-colors duration-75" to={'/login'}>
            { user ?  <span>داشبورد</span> : <span>مشاهده رایگان</span>}
          </Link>
          <button onClick={toggleTheme} className="border cursor-pointer p-1.5 rounded-lg dark:bg-zinc-300 dark:text-zinc-950 bg-zinc-950 text-zinc-300">
            {theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" /></svg>}
          </button>
        </div>
      </nav>
  )
}