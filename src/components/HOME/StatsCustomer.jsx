import CountUp from "react-countup";

export function StatsCustomer() {
  const stats = [
    {
      title: "ژورنال ثبت شده",
      number: 1200,
      suffix: "+",
      desc: "معاملات ثبت و تحلیل شده توسط کاربران",
      color: "from-sky-500 to-cyan-500",
    },
    {
      title: "رضایت کاربران",
      number: 85,
      suffix: "%",
      desc: "کاربران ژورنال ویو را پیشنهاد می‌کنند",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "دلار سود ثبت شده",
      number: 500,
      suffix: "K$",
      desc: "مجموع سود ثبت شده در ژورنال",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "همیشه در دسترس",
      number: 24,
      suffix: "/7",
      desc: "در هر زمان و هر دستگاه",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="mt-28 mx-24">

      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold">
          آمارهایی که
          <span className="text-sky-600"> اعتماد می‌سازند</span>
        </h2>

        <p className="mt-5 text-zinc-500 dark:text-zinc-400 leading-8 max-w-3xl mx-auto">
          ژورنال ویو هر روز توسط معامله‌گران برای ثبت، تحلیل و بهبود عملکرد
          استفاده می‌شود.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className={`absolute top-0 left-0 h-1 w-full bg-linear-to-r ${item.color}`} />

            <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-sky-500/5 blur-3xl group-hover:scale-125 transition-all duration-500" />

            <div className="relative z-10">

              <h2 className="text-6xl tracking-tight text-zinc-900 dark:text-white">
                <CountUp
                  enableScrollSpy
                  scrollSpyOnce
                  start={0}
                  end={item.number}
                  duration={2}
                />
                <span>{item.suffix}</span>
              </h2>

              <h3 className="mt-5 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-500 dark:text-zinc-400">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}