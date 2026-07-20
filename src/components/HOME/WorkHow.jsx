export function WorkHow() {
  const steps = [
    {
      title: "ثبت معامله",
      desc: "نماد، ورود، خروج، حد سود و حد ضرر را تنها در چند ثانیه ثبت کنید.",
    },
    {
      title: "افزودن تصویر",
      desc: "تنها با Ctrl + V تصویر معامله یا چارت خود را ذخیره کنید.",
    },
    {
      title: "تحلیل عملکرد",
      desc: "با نمودارها و آمارهای دقیق، عملکرد خود را بررسی کنید.",
    },
    {
      title: "رشد مستمر",
      desc: "نقاط ضعف را شناسایی کنید و کیفیت معاملات خود را افزایش دهید.",
    },
  ];

  return (
    <section className="py-28">

      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold">
          فقط در چهار مرحله شروع کن
        </h2>

        <p className="mt-5 text-zinc-500 dark:text-zinc-400 text-lg">
          از ثبت اولین معامله تا تحلیل کامل عملکرد
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Line */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-1
            -translate-x-1/2
            rounded-full
            bg-linear-to-b
            from-sky-500
            via-blue-500
            to-cyan-400
          "
        />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`
              relative
              flex
              items-center
              mb-2
              ${i % 2 === 0 ? "" : "flex-row-reverse"}
            `}
          >
            {/* Card */}

            <div className="w-1/2 px-12">
              <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10">
                <h3 className="text-3xl mb-1">
                  {step.title}
                </h3>
                <p className="leading-8 text-zinc-500 dark:text-zinc-400">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Circle */}

            <div className="absolute left-1/2 -translate-x-1/2 z-20">
              <div className="w-16 h-16 rounded-full border-4 border-sky-500 bg-white dark:bg-zinc-950 flex items-center justify-center text-sky-500 font-black text-xl shadow-xl shadow-sky-500/30">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <h3 className="text-3xl font-">
          آماده‌ای معامله‌گریت را متحول کنی؟
        </h3>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          همین امروز معاملاتت را ثبت کن و حرفه‌ای‌تر تصمیم بگیر.
        </p>
        <button className="mt-4 cursor-pointer px-8 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 transition text-white font-semibold">
          شروع رایگان
        </button>
      </div>
    </section>
  );
}