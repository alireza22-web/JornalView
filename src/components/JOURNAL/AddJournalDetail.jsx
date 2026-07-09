import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../../db/dexie";

export function AddJournalDetail(){

  const [formData, setFormData] = useState({
    symbol: "",
    strategy: "",
    type: "خرید",
    result: "TP",
    date: "",
    time: "",
    session: "",
    timeframe: "",
    pnl:"",
    entry: "",
    stopLoss: "",
    takeProfit: "",
    lotSize: "",
    riskReward: "",
    note: "",
    image: null,
    tradingViewLink: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
      ...prev,
      [name]: value,
  }));
};

const handleSubmit = async () => {
  try {
    await db.trades.add(formData);
    toast.success('ژورنال با موفقیت ذخیره شد')
    setFormData({
      symbol: "",
      strategy: "",
      type: "",
      result: "",
      date: "",
      time: "",
      session: "",
      timeframe: "",
      pnl:"",
      entry: "",
      stopLoss: "",
      takeProfit: "",
      lotSize: "",
      riskReward: "",
      note: "",
      image: null,
      tradingViewLink: "",
    });
  } catch (error) {
    toast.error('مشکلی پیش آمده لحظات دیگری امتحان کنید')
    console.log(error);
  }
}

  return (
    <article className="">
      <Toaster/>
      <Link to={'/journal'} className=' mt-2 mr-4 px-2 py-1 rounded-md text-zinc-500 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
          <span>بازگشت</span>
      </Link>
      <form onClick={(e)=>e.preventDefault()} className="px-12 py-3 flex flex-col gap-6">  
        <div className="flex justify-between items-center">
          <input onChange={handleChange} name="symbol" value={formData.symbol} type="text" placeholder="نماد ارز" className="inp-add"/>
          <input onChange={handleChange} name="strategy" value={formData.strategy} type="text" placeholder="استراتژی" className="inp-add"/>
          <input onChange={handleChange} name="time" value={formData.time} type="time" placeholder="ساعت" className="inp-add"/>
          <DatePicker onChange={(value) => {
            setFormData((prev) => ({
                    ...prev,
                    date: value?.format?.("YYYY/MM/DD") || "",
                }));
            }} 
          name="date" value={formData.date} placeholder="تاریخ معامله" calendar={persian} locale={persian_fa} inputClass="inp-add"/>
          <select onChange={handleChange} value={formData.type} name="type" className="px-6 bg-zinc-300 py-1 rounded-lg outline-none dark:bg-zinc-900">
            <option disabled>نوع معمله</option>
            <option value="خرید">خرید</option>
            <option value="فروش">فروش</option>
          </select>
          <select onChange={handleChange} name="result" value={formData.result} className="px-6 bg-zinc-300 py-1 rounded-lg outline-none dark:bg-zinc-900">
            <option disabled>سود/ضرر</option>
            <option  value="TP">TP</option>
            <option  value="SL">SL</option>
            <option  value="FR">FR</option>
          </select>
        </div>
        <div className="grid grid-cols-3 mt-12 place-items-cente gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg">جزییات معامله</span>
            <input onChange={handleChange} value={formData.entry} name="entry" type="text" className="inp-add-d" placeholder="نقطه ورود" />
            <input onChange={handleChange} value={formData.stopLoss} name="stopLoss" type="text" className="inp-add-d" placeholder="حد ضرر" />
            <input onChange={handleChange} value={formData.takeProfit} name="takeProfit" type="text" className="inp-add-d" placeholder="حد سود" />
            <input onChange={handleChange} value={formData.pnl} name="pnl" type="text" className="inp-add-d" placeholder="مقدار سود" />
            <input onChange={handleChange} value={formData.lotSize} name="lotSize" type="text" className="inp-add-d" placeholder="حجم معامله" />
            <input onChange={handleChange} value={formData.riskReward} name="riskReward" type="text" className="inp-add-d" placeholder="ریسک به ریوارد" />
            <input onChange={handleChange} value={formData.session} name="session" type="text" className="inp-add-d" placeholder="سشن" />
            <input onChange={handleChange} value={formData.timeframe} name="timeframe" type="text" className="inp-add-d" placeholder="تایم فریم" />
          </div>
          <div className="border-2 border-dashed col-span-2 bg-zinc-100 dark:bg-zinc-900 border-zinc-300 w-full h-full flex flex-col items-center justify-center">
            <span>ctrl + v</span>
            <span>کپی عکس معامله</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-polaroid"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" /><path d="M4 16l16 0" /><path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" /><path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" /><path d="M14 7l.01 0" /></svg>
          </div>
        </div>
        <div className="w-full h-full p-2 ">
          <textarea onChange={handleChange} name="note" value={formData.note} placeholder="توضیحات اضافی" className="w-full h-full px-4 py-2 outline-none border border-zinc-300"></textarea>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="bg-red-500 px-7 py-2 rounded-lg cursor-pointer transition-color duration-100 hover:bg-red-600">
            <span>لغو</span>
          </button>
          <button onClick={handleSubmit} className="px-8 py-2 bg-sky-400 rounded-lg cursor-pointer hover:bg-sky-500 transition-colors duration-100 ease-in" type="submit">
            <span>+ افزودن ژورنال</span>
          </button>
        </div>
      </form> 
    </article>
  )
}