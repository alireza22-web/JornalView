export function GuideView() {
  return (
    <main className="mx-auto flex flex-col gap-y-3 px-4 py-8 md:px-8 lg:px-12 guide">
      {/* Header */}
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h1 className="mb-6 border-r-4 border-blue-600 pr-4 text-3xl font-extrabold text-gray-900 dark:text-white">
          راهنمای استفاده از ژورنال ویو
        </h1>

        <h2 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">
          خوش آمدید 👋
        </h2>

        <p className="leading-9 text-gray-700 dark:text-gray-300">
          از اینکه ژورنال ویو را برای ثبت و تحلیل معاملات خود انتخاب کرده‌اید،
          سپاسگزاریم.
        </p>

        <p className="mt-4 leading-9 text-gray-700 dark:text-gray-300">
          هدف ژورنال ویو این است که به شما کمک کند تمام معاملات خود را ثبت،
          بررسی و تحلیل کنید تا نقاط قوت و ضعف استراتژی معاملاتی خود را بهتر
          بشناسید و در مسیر تبدیل شدن به یک معامله‌گر حرفه‌ای قدم بردارید.
        </p>
      </section>

      {/* Warning */}
      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-950/40">
        <h2 className="mb-3 text-xl font-bold text-amber-700 dark:text-amber-400">
          ⚠️ هشدار مهم
        </h2>

        <p className="leading-9 text-amber-900 dark:text-amber-100">
          اطلاعات شما به‌صورت محلی در مرورگر ذخیره می‌شود. در صورت حذف اطلاعات
          مرورگر یا تعویض سیستم، امکان از دست رفتن اطلاعات وجود دارد؛ بنابراین
          حتماً به‌صورت منظم از اطلاعات خود نسخه پشتیبان تهیه کنید.
        </p>
      </section>

      <div className="space-y-6">
        {/* Card */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 border-r-4 border-blue-500 pr-3 text-2xl font-bold text-gray-900 dark:text-white">
            قبل از شروع
          </h2>

          <ul className="list-disc space-y-3 pr-6 leading-8 text-gray-700 marker:text-blue-600 dark:text-gray-300">
            <li>پیشنهاد می‌کنیم ابتدا تمامی بخش‌های سایت را یک‌بار بررسی کنید.</li>
            <li>
              برای جلوگیری از از دست رفتن اطلاعات، به‌صورت منظم از داده‌های خود
              نسخه پشتیبان تهیه کنید.
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 border-r-4 border-green-500 pr-3 text-2xl font-bold text-gray-900 dark:text-white">
            تهیه نسخه پشتیبان
          </h2>

          <p className="mb-4 leading-8 text-gray-700 dark:text-gray-300">
            برای حفظ امنیت اطلاعات، توصیه می‌کنیم به‌صورت دوره‌ای از معاملات
            خود خروجی تهیه کنید.
          </p>

          <ul className="grid gap-3 md:grid-cols-3">
            <li className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center font-semibold dark:border-gray-700 dark:bg-gray-800">
              JSON
            </li>

            <li className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center font-semibold dark:border-gray-700 dark:bg-gray-800">
              Excel
            </li>

            <li className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center font-semibold dark:border-gray-700 dark:bg-gray-800">
              PDF
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 border-r-4 border-purple-500 pr-3 text-2xl font-bold text-gray-900 dark:text-white">
            افزودن تصویر معامله
          </h2>

          <ol className="list-decimal space-y-3 pr-6 leading-8 text-gray-700 marker:font-bold dark:text-gray-300">
            <li>
              از نمودار خود در TradingView، فراز یا سایر پلتفرم‌ها تصویر تهیه
              یا کپی کنید.
            </li>

            <li>وارد بخش افزودن ژورنال شوید.</li>

            <li>روی قسمت مربوط به تصویر کلیک کنید.</li>

            <li>کلیدهای Ctrl + V را فشار دهید تا تصویر ثبت شود.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 border-r-4 border-cyan-500 pr-3 text-2xl font-bold text-gray-900 dark:text-white">
            استفاده در مرورگرهای مختلف
          </h2>

          <p className="leading-9 text-gray-700 dark:text-gray-300">
            اطلاعات ژورنال به‌صورت محلی در مرورگر ذخیره می‌شود؛ بنابراین هر
            مرورگر اطلاعات مستقل خود را نگهداری می‌کند و می‌توانید در مرورگرهای
            مختلف، ژورنال‌های جداگانه داشته باشید.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 border-r-4 border-orange-500 pr-3 text-2xl font-bold text-gray-900 dark:text-white">
            پیشنهادهای مهم
          </h2>

          <ul className="list-disc space-y-3 pr-6 leading-8 text-gray-700 marker:text-orange-500 dark:text-gray-300">
            <li>به‌صورت منظم از اطلاعات خود نسخه پشتیبان تهیه کنید.</li>

            <li>قبل از حذف اطلاعات، ابتدا فایل پشتیبان ذخیره کنید.</li>

            <li>از آخرین نسخه مرورگر استفاده کنید.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/30">
          <h2 className="mb-4 border-r-4 border-blue-500 pr-3 text-2xl font-bold text-blue-700 dark:text-blue-400">
            پشتیبانی
          </h2>

          <p className="leading-8 text-blue-900 dark:text-blue-100">
            اگر هنگام استفاده از سایت با هرگونه مشکل، سؤال یا پیشنهادی
            روبه‌رو شدید، از طریق بخش پشتیبانی با ما در ارتباط باشید.
          </p>

          <p className="mt-4 font-semibold text-blue-700 dark:text-blue-300">
            تیم ژورنال ویو 💙
          </p>
        </section>
      </div>
    </main>
  );
}