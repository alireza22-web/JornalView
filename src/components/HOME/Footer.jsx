import { Link } from "react-router-dom";

export function Footer(){
  const footerColumns = [
    {
      title: "محصول",
      links: [
        {
          title: "داشبورد",
          href: "/dashboard",
        },
        {
          title: "ثبت معامله",
          href: "/dashboard/trades",
        },
        {
          title: "تحلیل عملکرد",
          href: "/dashboard/analytics",
        },
        {
          title: "گزارش‌ها",
          href: "/dashboard/reports",
        },
      ],
    },
  
    {
      title: "منابع",
      links: [
        {
          title: "سوالات متداول",
          href: "#faq",
        },
        {
          title: "مقالات",
          href: "/blog",
        },
        {
          title: "درباره ما",
          href: "/about",
        },
        {
          title: "تماس با ما",
          href: "/contact",
        },
      ],
    },
  
    {
      title: "ارتباط با ما",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/",
        },
        {
          title: "تلگرام",
          href: "https://t.me/",
        },
        {
          title: "ایمیل",
          href: "mailto:info@journalview.ir",
        },
        {
          title: "اینستاگرام",
          href: "https://instagram.com/",
        },
      ],
    },
  ];
  return (
    <footer className="mt-24 border-t-2 border-zinc-600/20 w-full font-l bg-zinc-900 p-2 text-white ">
      <div className="grid place-items-center grid-cols-12 p-6 container mx-auto border-b border-zinc-500">
        <div className="col-span-3 flex flex-col gap-2">
          <div className="font-l text-6xl  text-red-600">
            <span className=" text-zinc-100"><span className="text-blue-700">ژورنال</span> ویو</span>
          </div>
          <p className="">ثبت، تحلیل و بهبود عملکرد معاملات در یک محیط ساده و حرفه‌ای.</p>
        </div>
          {
            footerColumns.map((item,i)=>{
              return (
                <div key={i} className="col-span-3 flex flex-col ">
                  <h3 className="text-xl py-1 mb-2 text-zinc-400 px-2">{item.title}</h3>
                  <div className="flex flex-col gap-2">
                    {
                      item.links.map((link,i)=>{
                        return (
                          <Link className="px-2 py-0.5 hover:text-zinc-500 transition-color duration-100" key={i} to={link.href}>
                            <span>{link.title}</span>
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
      </div>
      <div className="flex justify-between text-zinc-700 items-center font-light text-xs container mx-auto px-4 pb-1 pt-3">
        <span>Made with by AliKh(awp)</span>
        <span>© 2025 Journal View</span>
      </div>
    </footer>
  )
}