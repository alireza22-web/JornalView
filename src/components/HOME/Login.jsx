import img from '../../../public/img/loginPoster.webp'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login(){

  const navigate = useNavigate();
  const [name, setName] = useState("");  
  useEffect(() => {
    const user = localStorage.getItem("journal-user");
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, []);
  const handleLogin = () => {
    if (!name.trim()) return;
    const user = {
      id: Date.now(),
      name: name.trim(),
      guest: false,
    };
    localStorage.setItem(
      "journal-user",
      JSON.stringify(user)
    );
    navigate("/dashboard");
  };

  const handleGuest = () => {
    const user = {
      id: "guest",
      name: "مهمان",
      guest: true,
    };
    localStorage.setItem(
      "journal-user",
      JSON.stringify(user)
    );
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen font-l dark:bg-zinc-950 bg-zinc-300 flex items-center justify-center">
      <div className='shadow-2xl rounded-xl dark:shadow-sky-600/20 w-fit h-fit flex items-center justify-center'>
        <article className="flex flex-col relative gap-6 bg-zinc-200 dark:bg-zinc-900 p-6 w-125 rounded-tr-xl rounded-br-xl">
          <Link to={'/'} className='absolute text-sm dark:text-white flex gap-0.5 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
            <span>بازگشت</span>
          </Link>
          <div className="font-l text-6xl text-center text-red-600">
            <span className="text-zinc-800 dark:text-zinc-100"><span className="text-blue-700">ژورنال</span> ویو</span>
          </div>
          <div className="text-zinc-700 dark:text-zinc-400 flex flex-col gap-2 justify-center items-center">
            <span>خوش آمدی</span>
            <span>برای شروع یکی از روش های زیر را انتخاب کنید</span>
          </div>
          <div className="flex flex-col py-5 border-y border-dashed border-zinc-500/60">
            <span className="flex dark:text-white gap-1 px-6 py-2 justify-center items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span className=''>ورود با نام کاربر</span>
            </span>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="px-8 dark:text-white dark:placeholder:text-zinc-400 py-3 outline-none border border-zinc-400/80 rounded-lg" placeholder="نام خود را وارد کنید" type="text" />
            <button onClick={handleLogin} className="bg-sky-700 text-white rounded-lg cursor-pointer transition duration-150 hover:opacity-90 w-fit flex items-center justify-center px-8 py-2 text-center mx-auto mt-6" disabled={!name.trim()}>
              <span>ورود</span>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex dark:text-white gap-1 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
              <span>ورود به عنوان مهمان</span>
            </div>
            <div className="text-zinc-700 dark:text-zinc-400 flex flex-col items-center justify-center gap-1">
              <h3>بدون ساخت حساب وارد شو</h3>
              <p>و امکانات ژورنال ویو را امتحان کن.</p>
            </div>
            <button onClick={handleGuest} className="bg-sky-700 dark:text-white text-white rounded-lg cursor-pointer transition duration-150 hover:opacity-90 flex items-center justify-center px-8 py-2 text-center mx-auto mt-2">
              <span>ادامه به عنوان مهمان</span>
            </button>
          </div>
        </article>
        <div className="w-125 h-147 rounded-tl-xl rounded-bl-xl overflow-hidden">
          <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
      </div>
    </section>
  )
}