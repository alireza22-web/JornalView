import { useEffect, useRef, useState } from 'react'
import img from '../../../public/img/XAUUSD.png'
import { Trades } from '../../data/Trade'
import { Link, useNavigate } from 'react-router-dom'
import { badgeResult, explaneResult } from '../../hooks/badgeResult'
import toast from 'react-hot-toast'
import { db } from '../../db/dexie'
export function JournalDetail({id}){
  const [formData, setFormData] = useState({});
  const [data , setData] = useState({})
  const [isEdit , setIsEdit] = useState(false)
  const [modal , setModal] = useState(false)
  const pRef = useRef(null);
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(pRef.current.innerText);
      toast.success('کپی با موفقیت انجام شد!')
    } catch (err) {
      console.error(err);
      toast.error('کپی با خطا مواجه شده است')
    }
  };
  async function loadData(){
    console.log(id);
    const journal = await db.trades.get(Number(id))  
    setData(journal) 
    setFormData(journal);
    console.log(journal);
    
  }
  useEffect(()=>{
    loadData()
  },[id])
  const navigate = useNavigate();
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
        "آیا از حذف این ژورنال مطمئن هستید؟"
    );
    if (!confirmDelete) return;
    await db.trades.delete(Number(id));
    toast.success("ژورنال حذف شد.");
    navigate("/journal");
};
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
      ...prev,
      [name]: value,
  }));
};
const handleUpdate = async (e) => {
  try {
      e.preventDefault();
      await db.trades.update(Number(id), formData);
      setData(formData);
      setIsEdit(false);
      console.log('dasdas');
      
      toast.success("ویرایش با موفقیت انجام شد");
  } catch (err) {
      toast.error("خطا در ویرایش");
  }
};
  return (
    <article className={`uppercase ${modal ? `relative`:``}`}>
      <button>
        <Link to={'/journal'} className=' mt-2 mr-4 px-2 py-1 rounded-md text-zinc-500 flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
            <span>بازگشت</span>
        </Link>
      </button>
      <div className="flex items-center gap-4 px-6 py-6 border-b border-dashed border-black/20 mx-3">
        <div className='w-120 h-72 bg-zinc-300 dark:bg-zinc-900'>
          {
            modal ?
              <div className='w-310  h-160 right-1/2 translate-x-1/2 absolute bg-black/60'>
                <svg className='text-white' onClick={()=>setModal(false)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                <img className='w-300 h-150 right-1/2 translate-x-1/2 absolute object-contain' src={img} alt="" />
              </div>
            :
            isEdit ?
            <div className='flex flex-col  h-80 gap-1'>
              <img className='w-full h-full object-contain' src={img} alt="image" />
              <div className='flex gap-0.5 bg-sky-200 cursor-pointer hover:bg-sky-300 transition-colors dark:bg-sky-900 dark:hover:bg-sky-950 px-4 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-transfer"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 10h-16l5.5 -6" /><path d="M4 14h16l-5.5 6" /></svg>
                <span className=''>تغییر عکس</span>
              </div>
            </div>
            :
            <img onClick={()=>setModal(true)} className='w-full h-full object-contain' src={img} alt="" />
          }
        </div>
        {
          isEdit ?
            <form onSubmit={handleUpdate} className='flex flex-1 flex-col gap-4 uppercase'>
            <div className='flex gap-3'>
              <button className='btn' onClick={handleUpdate}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                <span>ذخیره</span>
              </button>
              <button className='btn' onClick={()=>setIsEdit(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cancel"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M18.364 5.636l-12.728 12.728" /></svg>
                <span>انصراف</span>
              </button>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-3xl font-bold'>نماد : <input name='symbol' onChange={handleChange} value={formData.symbol || ''} className='inp-e' type="text"/></span>
              <div>
                <span className='text-zinc-500'>ساعت و تاریخ : <input name='date' onChange={handleChange} value={formData.date || ''} className='inp-e' type="text"/> </span>
                <span className='text-zinc-500'> - <input name='time' onChange={handleChange} className='inp-e' type="text" value={formData.time || ''}/></span>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <span>استراتژی : <input name='strategy' value={formData.strategy || ''} onChange={handleChange} className='inp-e' type="text" /></span>
              {/* <p>توضیحات : <input className='inp-e w-full' type="text" defaultValue={data.notes}/></p> */}
              <span>توضیحات : </span><textarea name="note" onChange={handleChange} value={formData.note || ''} className='h-fit inp-e' id=""></textarea>
            </div>
            <div className='flex gap-5'>
              <label htmlFor='rate' className='flex items-center gap-2'>
                <input name="result" onChange={handleChange} checked={formData.result === 'TP'} value={'TP'} className='inp-rad' type="radio"/>
                <span>TP</span>
              </label>
              <label htmlFor='rate' className='flex items-center gap-2'>
                <input name="result" onChange={handleChange} checked={formData.result === 'SL'} value={'SL'} className='inp-rad' type="radio"/>
                <span>SL</span>
              </label>
              <label htmlFor='rate' className='flex items-center gap-2'>
                <input name="result" onChange={handleChange} checked={formData.result === 'FR'} value={'FR'} className='inp-rad' type="radio"/>
                <span>FR</span>
              </label>
            </div>{/* edit badge */}
          </form>
          :
          <div className='flex flex-1 flex-col gap-4 '>
          <div className='flex gap-3'>
            <button className='btn' onClick={()=>setIsEdit(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-subtitles-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.5 19h-5.5a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v3" /><path d="M7 15h5" /><path d="M17 12h-3" /><path d="M11 12h-1" /><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" /></svg>
              <span>ویرایش</span>
            </button>
            <button className='btn' onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              <span>حذف</span>
            </button>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-3xl font-bold'>نماد : {data.symbol}</span>
            <div>
              <span className='text-zinc-500'>ساعت و تاریخ : {data.date}</span>
              <span className='text-zinc-500'> - {data.time}</span>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <span>استراتژی : {data.strategy}</span>
            <p>توضیحات : {data.note}</p>
          </div>
          <div>
            {badgeResult(data.result)}
          </div>
        </div>
        }
      </div>
      {
        isEdit ?
        <div className='p-6 mx-3 flex flex-col gap-6'>
          <form onSubmit={handleUpdate} className='flex w-full flex-wrap gap-4'>
            <input placeholder='نقطه ورود' name='entry' onChange={handleChange} value={formData.entry || ''} className='inp-e-d border-yellow-600 outline-yellow-600 bg-yellow-200' type="text" defaultValue={`نقطه ورود : ${data.entry}`}/>
            <input placeholder='حد ضرر' name='stopLoss' onChange={handleChange} value={formData.stopLoss || ''} className='inp-e-d border-red-600 outline-red-600 bg-red-200' type="text" defaultValue={`حد ضرر : ${data.stopLoss}`}/>
            <input placeholder='حد سود' name='takeProfit' onChange={handleChange} value={formData.takeProfit || ''} className='inp-e-d border-green-600 outline-green-600 bg-green-200' type="text" defaultValue={`حد سود : ${data.takeProfit}`}/>
            <input placeholder='حجم معامله' name='lotSize' onChange={handleChange} value={formData.lotSize || ''} className='inp-e-d border-violet-600 outline-violet-600 bg-violet-200' type="text" defaultValue={`حجم معامله : ${data.lotSize}`}/>
            <input placeholder='ریسک به ریوارد' name='riskReward' onChange={handleChange} value={formData.riskReward || ''} className='inp-e-d border-sky-600 outline-sky-600 bg-sky-200' type="text" defaultValue={`ریسک به ریوارد : ${data.riskReward}`}/>
            <input placeholder='سشن' name='session' onChange={handleChange} value={formData.session || ''} className='inp-e-d border-stone-600 outline-stone-600 bg-stone-200' type="text" defaultValue={`سشن : ${data.session}`}/>
            <input placeholder='تایم فریم' name='timeframe' onChange={handleChange} value={`${formData.timeframe || ''}`} className='inp-e-d border-pink-600 outline-pink-600 bg-pink-200' type="text" defaultValue={`تایم فریم : ${data.timeframe}`}/>
          </form>
          <div className='px-6 py-2 bg-gray-300 text-lg rounded-xl dark:bg-gray-900'>
            <div className='flex items-center justify-between'>
                <span>توضیحات تکمیلی :</span>
                <button onClick={copyText} className="rounded cursor-copy hover:text-sky-600 transition-colors duration-100 text-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                </button>
            </div>
            <p className='text-justify' ref={pRef}>ما در این معامله روی ارز {data.symbol} در تاریخ {data.date}و ساعت {data.time} با استراتژی {data.strategy} به {explaneResult(data.result)} رسیدیم چون {data.note}. دراین معامله نقطه ورود ما {data.entry} و نقطه استاپ ما {data.stopLoss} و نقطه سود ما {data.takeProfit} بود که با حجم {data.lot} و ریسک به ریوارد {data.riskReward}  و تایم فریم {data.timeframe} و سشن بازار {data.session} ورود کرده بودیم </p>
          </div>
        </div>
        :
        <div className='p-6 mx-3 flex flex-col gap-6'>
        <div className='flex w-full justify-around gap-2'>
          <span className='px-8 py-1.5 bg-yellow-300 rounded-lg outline-2 outline-offset-2 outline-yellow-400 text-yellow-700'>نقطه ورود : {data.entry}</span>
          <span className='px-8 py-1.5 bg-red-300 rounded-lg outline-2 outline-offset-2 outline-red-400 text-red-700'>حد ضرر : {data.stopLoss}</span>
          <span className='px-8 py-1.5 bg-green-300 rounded-lg outline-2 outline-offset-2 outline-green-400 text-green-700'>حد سود : {data.takeProfit}</span>
          <span className='px-8 py-1.5 bg-violet-300 rounded-lg outline-2 outline-offset-2 outline-violet-400 text-violet-700'>حجم معامله: {data.lotSize}</span>
          <span className='px-8 py-1.5 bg-sky-300 rounded-lg outline-2 outline-offset-2 outline-sky-400 text-sky-700'>ریسک به ریوارد: {data.riskReward}</span>
          <span className='px-8 py-1.5 bg-stone-300 rounded-lg outline-2 outline-offset-2 outline-stone-400 text-stone-700'>سشن : {data.session}</span>
          <span className='px-8 py-1.5 bg-pink-300 rounded-lg outline-2 outline-offset-2 outline-pink-400 text-pink-700'>تایم فریم : {data.timeframe}</span>
        </div>
        <div className='px-6 py-2 bg-gray-300 text-lg rounded-xl dark:bg-gray-900'>
          <div className='flex items-center justify-between'>
              <span>توضیحات تکمیلی :</span>
              <button onClick={copyText} className="rounded cursor-copy hover:text-sky-600 transition-colors duration-100 text-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
              </button>
          </div>
          <p className='text-justify' ref={pRef}>ما در این معامله روی ارز {data.symbol} در تاریخ {data.date}و ساعت {data.time} با استراتژی {data.strategy} به {explaneResult(data.result)} رسیدیم چون {data.note}. دراین معامله نقطه ورود ما {data.entry} و نقطه استاپ ما {data.stopLoss} و نقطه سود ما {data.takeProfit} بود که با حجم {data.lot} و ریسک به ریوارد {data.riskReward}  و تایم فریم {data.timeframe} و سشن بازار {data.session} ورود کرده بودیم </p>
        </div>
      </div>
      }
    </article>
  )
}