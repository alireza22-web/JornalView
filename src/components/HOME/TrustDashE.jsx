import { Link } from "react-router-dom";

export function TrustDashE(){
  const list = [
    {
      title: "تصمیم‌های بهتر",
      desc: "بر پایه آمار، نه احساس",
      style: "col-span-2 bg-zinc-800 text-zinc-100 dark:text-zinc-800 dark:bg-zinc-300",
    },
    {
      title: "رشد مداوم",
      desc: "عملکرد خود را هر ماه بهبود دهید",
      style: "bg-zinc-300 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-700",
    },
    {
      title: "کشف اشتباهات",
      desc: "الگوهای تکرارشونده را شناسایی کنید",
      style: "bg-zinc-300 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-700",
    },
    {
      title: "صرفه‌جویی در زمان",
      desc: "همه اطلاعات معاملات در یک مکان",
      style: "col-span-2 bg-zinc-800 text-zinc-100 dark:text-zinc-800 dark:bg-zinc-300",
    },
    {
      title: "مدیریت سرمایه",
      desc: "ریسک و بازده را بهتر کنترل کنید",
      style: "col-span-2 bg-zinc-800 text-zinc-100 dark:text-zinc-800 dark:bg-zinc-300",
    },
    {
      title: "بینش دقیق",
      desc: "آمار واقعی از عملکردتان",
      style: "bg-zinc-300 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-700",
    },
    {
      title: "ثبت منظم",
      desc: "هیچ معامله‌ای را فراموش نکنید",
      style: "bg-zinc-300 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-700",
    },
    {
      title: "تبدیل تجربه به مهارت",
      desc: "هر معامله یک درس جدید",
      style: "col-span-2 bg-zinc-800 text-zinc-100 dark:text-zinc-800 dark:bg-zinc-300",
    },
  ];
  return (
    <section className="mt-24 mx-24 relative">
      <h1 className="text-4xl text-center py-12 text-sky-700 dark:text-sky-600">چرا از ژورنال ویو استفاده کنیم؟</h1>
      <div className="grid grid-cols-3 gap-2">
        {
          list.map((item,i)=>{
            return (
              <div key={i} className={`${item.style} border px-6 py-3 border-zinc-200 dark:border-zinc-700 flex flex-col gap-2 items-center justify-center`}>
                <h2 className="text-3xl">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            )
          })
        }
          <div className={`border px-12 flex justify-between items-center bg-sky-700 dark:bg-sky-400 dark:text-zinc-800 col-span-3 py-4 text-white border-zinc-200 dark:border-zinc-700 `}>
            <h2 className="text-3xl">از اولین معامله تا حرفه‌ای شدن، همه چیز اینجاست.</h2>
            <Link to={'/dashboard'} className="bg-sky-600 px-8 py-3 rounded-md">
              <span>شروع رایگان</span>
            </Link>
          </div>
        </div>
    </section>
  )
}