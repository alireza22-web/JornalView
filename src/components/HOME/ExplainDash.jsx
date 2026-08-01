import journalDash from '../../../public/img/journalMockup.webp'
export function ExplainDash(){
  const feature = [
    {
      title:'📈 تحلیل دقیق عملکرد معاملات',
      description:'با آمار و نمودارهای حرفه‌ای، نقاط قوت و ضعف خود را شناسایی کنید.',
    },
    {
      title:'📝 ثبت کامل هر معامله',
      description:'ورود، حد ضرر، حد سود، یادداشت و تصویر چارت را در یک مکان ذخیره کنید.',
    },
    {
      title:'📊 داشبورد هوشمند',
      description:'Win Rate، Profit Factor، سود ماهانه و بهترین عملکرد را یکجا مشاهده کنید.',
    },
    {
      title:'🔍 فیلتر و جستجوی پیشرفته',
      description:'معاملات را بر اساس نماد، تاریخ، نتیجه و نوع معامله به سرعت پیدا کنید.',
    },
  ]
  return (
    <div id='features' className='pt-6'>
      <div  className="mt-30 flex justify-center items-center relative gap-12 overflow-hidden py-6 bg-linear-to-tr from-sky-100 to-sky-200 dark:from-zinc-900 dark:to-zinc-950 shadow-xl">
        <div className='absolute w-40 h-40 rounded-full -bottom-10 bg-sky-600/60 -left-5 blur-3xl' />
        <div className='absolute w-40 h-40 rounded-full -top-10 bg-sky-600/40 -right-5 blur-3xl' />
        <div className='overflow-hidden rounded-xl'>
          <img className='w-130' src={journalDash} alt="" />
        </div>
        <div className='flex flex-col gap-12'>
          <h2 className='text-3xl font-bold'>تمام اطلاعات معاملات در یک نگاه</h2>
          <ul className='flex flex-col gap-4'>
            {
              feature.map((item,i)=>{
                return (
                  <li className='py-0.5'>
                    <h3 className='text-2xl'>{item.title}</h3>
                    <p className='text-zinc-700 dark:text-zinc-400'>{item.description}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}