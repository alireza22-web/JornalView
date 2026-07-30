import { LandingChart } from "../../utils/LandingChart";

export function DashPreview(){
  
  const dashboardFeatures = [
    {
      badge: "Win Rate",
      title: "نرخ موفقیت",
      desc: "درصد معاملات موفق خود را همیشه زیر نظر داشته باشید.",
      color: "bg-green-500/15 text-green-500",
    },
    {
      badge: "Profit Factor",
      title: "پروفیت فکتور",
      desc: "قدرت واقعی استراتژی خود را با نسبت سود به ضرر بسنجید.",
      color: "bg-sky-500/15 text-sky-500",
    },
    {
      badge: "Monthly Report",
      title: "گزارش ماهانه",
      desc: "عملکرد هر ماه را به‌صورت دقیق مقایسه و تحلیل کنید.",
      color: "bg-purple-500/15 text-purple-500",
    },
    {
      badge: "Equity Curve",
      title: "منحنی سرمایه",
      desc: "روند رشد یا افت سرمایه را به‌صورت تصویری مشاهده کنید.",
      color: "bg-orange-500/15 text-orange-500",
    },
    {
      badge: "Risk Control",
      title: "مدیریت ریسک",
      desc: "ریسک هر معامله را کنترل و تصمیم‌های بهتری بگیرید.",
      color: "bg-red-500/15 text-red-500",
    },
    {
      badge: "Analytics",
      title: "تحلیل هوشمند",
      desc: "نقاط قوت و ضعف استراتژی خود را سریع شناسایی کنید.",
      color: "bg-cyan-500/15 text-cyan-500",
    },
  ];
  
  return (

    <div id="emka" className="flex mx-24 pt-12 items-center justify-center gap-12">
      <div className=" flex flex-col gap-2">
        <h2 className="text-xl font-bold leading-tight">
          داشبوردی که فقط آمار نشان نمی‌دهد،
          <span className="text-sky-600"> مسیر رشدتان را مشخص می‌کند.</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-6 mt-">
          تمام معاملات خود را با نمودارهای حرفه‌ای تحلیل کنید و با شاخص‌های کلیدی،
          عملکرد واقعی استراتژی خود را بشناسید.
        </p>
        <div className=" grid grid-cols-3 gap-2">
        {
          dashboardFeatures.map((item,i)=>{
            return (
              <div className="flex flex-col items-center  justify-center gap-1 border rounded-lg border-zinc-400/20 p-2">
                <div className={`${item.color} w-fit px-4 py-1 rounded-full`}>
                  <h2>{item.badge}</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{item.title}</h3>
                  <p className="text-center text-sm">{item.desc}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      
      </div>
      <div className="flex-">
        <LandingChart/>
      </div>
    </div>
  )
}

