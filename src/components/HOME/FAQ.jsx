import { useState } from "react";

export function FAQ(){
  const faqList = [
    {
      question: "آیا استفاده از ژورنال ویو رایگان است؟",
      answer:
        "بله، می‌توانید به صورت رایگان ثبت معاملات و تحلیل عملکرد خود را آغاز کنید. در آینده امکانات پیشرفته نیز ارائه خواهد شد.",
    },
    {
      question: "آیا اطلاعات معاملات من امن است؟",
      answer:
        "بله، اطلاعات شما فقط در حساب کاربری خودتان ذخیره می‌شود و بدون اجازه در اختیار شخص دیگری قرار نخواهد گرفت.",
    },
    {
      question: "آیا می‌توانم تصویر چارت معاملات را اضافه کنم؟",
      answer:
        "بله، هنگام ثبت هر معامله می‌توانید تصویر چارت را آپلود کنید یا به راحتی با Paste (Ctrl + V) اضافه نمایید.",
    },
    {
      question: "آیا امکان ویرایش یا حذف معاملات وجود دارد؟",
      answer:
        "بله، هر زمان که بخواهید می‌توانید اطلاعات معاملات خود را ویرایش یا حذف کنید.",
    },
    {
      question: "آیا ژورنال ویو روی موبایل هم قابل استفاده است؟",
      answer:
        "فعلا خیر. همکاران ما در مجموعه ما سعی به درست کردن این قابلیت هستند که به زودی در اخیتار شما دوستان قرار میگیرد ",
    },
    {
      question: "آیا می‌توانم عملکرد خود را به صورت نموداری مشاهده کنم؟",
      answer:
        "بله، داشبورد تحلیلی ژورنال ویو شامل نمودارهای سود و زیان، Win Rate، Profit Factor و گزارش‌های ماهانه است.",
    },
    {
      question:"آیا برای استفاده از ژورنال ویو به دانش برنامه‌نویسی یا تنظیمات خاصی نیاز دارم؟",
      answer:
      "خیر، فقط کافی است ثبت‌نام کنید و معاملات خود را وارد کنید. تمام ابزارها به گونه‌ای طراحی شده‌اند که بدون پیچیدگی بتوانید از آن‌ها استفاده کنید."
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-24 mx-12">
      <div>
        <h2 className="text-2xl text-sky-800">سوالاتی که شاید برایتان پیش آمده باشد</h2>
        <div className="flex flex-col gap-4 mt-12">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-900"
            >
              <button
                onClick={() => handleOpen(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-right"
              >
                <h3 className="text-xl font-">
                  {item.question}
                </h3>

                <span
                  className={`text-3xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-zinc-500 dark:text-zinc-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}