import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Link } from "react-router-dom";
import '../../custom.css'
import { Trades } from "../../data/Trade";
import { numberPnl } from "../../hooks/numberPnl";
import { sideIcon } from "../../hooks/sideIcon";
import { useEffect, useState } from "react";
import { db } from "../../db/dexie";
export function Journal(){
  const [trades,setTrades] = useState([])
  async function loadData(){
    try {
      const journal = await db.trades.toArray()
      setTrades(journal)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    loadData()
  },[])
  return (
    <article className="py-2 px-6">
      <div className="flex items-center justify-between gap-1 text-center pb-3 pt-6 text-5xl border-b-2 border-dashed">
        <span><span className="text-blue-700">ژورنال</span> معاملات</span>
        <p className="text-lg dark:text-zinc-300">ثبت و مدیریت تمام معاملات انجام شده</p>
      </div>
      <div className="flex flex-col gap-4 py-5 text-xl">
        <span>فیلتر بر اساس:</span>
        <div className="flex justify-between items-center">
          <input type="search" placeholder="جستجو بر اساس نماد یا توضیحات..." className=" p-2 w-1/2 placeholder:text-sm dark:bg outline-none border dark:border-zinc-700 dark:bg-zinc-800 border-zinc-200 bg-zinc-300 rounded-lg"/>
          <div className="flex gap-2 items-center">
            <label htmlFor="date">از تاریخ</label>
            <DatePicker calendar={persian} locale={persian_fa} inputClass="px-2 py-1 outline-none border border-zinc-300 rounded-lg dark:border-zinc-700"/>
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="date">تا تاریخ</label>
            <DatePicker calendar={persian} locale={persian_fa} inputClass="px-2 py-1 outline-none border border-zinc-300 rounded-lg dark:border-zinc-700"/>
          </div>
        </div>
        <div className="flex w-1/2 justify-between">
          <label className="gap-2 flex items-center" htmlFor="">
            <span>نماد ها</span>
            <select name="" id="" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-400 rounded-lg">
              <option value="XAUUSD">XAUUSD</option>
              <option value="US30">US30</option>
              <option value="GBPUSD">GBPUSD</option>
              <option value="JPYUSD">USDJPY</option>
              <option value="USDCAD">USDCAD</option>
              <option value="EURUSD">EURUSD</option>
            </select>
          </label>
          <label className="gap-2 flex items-center" htmlFor="">
            <span>مرتب سازی</span>
            <select name="" id="" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-400 rounded-lg">
              <option value="جدیدترین">جدیدترین</option>
              <option value="قدیمی ترین">قدیمی ترین</option>
              <option value="بیشترین سود">بیشترین سود</option>
              <option value="بیشترین ضرر">بیشترین ضرر</option>
            </select>
          </label>
          <label className="gap-2 flex items-center" htmlFor="">
            <span>نتایج</span>
            <select name="" id="" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-400 rounded-lg">
              <option value="سود">🟢سود</option>
              <option value="ضرر">🔴ضرر</option>
              <option value="سر به سر">🟡سر به سر</option>
            </select>
          </label>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-4xl">معاملات</span>
          <Link to={'/add'}>
            <button className="text-xl cursor-pointer px-6 py-2 transition-colors duration-200 bg-blue-400 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl">
              <span>+ افزون ژورنال</span>
            </button>
          </Link>
        </div>
        <table className="mt-3 font-l bg-red-60 w-full text-lg rounded-3xl">
          <thead>
            <tr className="bg-zinc-300 dark:bg-zinc-900">
              <th className="th-table">تاریخ</th>
              <th className="th-table">نماد</th>
              <th className="th-table">نوع</th>
              <th className="th-table">سود / ضرر</th>
              <th className="th-table">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {
              trades.length > 0 &&
              trades.map(trade=>{
                return(
                  <tr key={trade.id} className="hover:bg-zinc-300 uppercase dark:hover:bg-zinc-900" >
                    <th className="th-table">{trade.date}</th>
                    <th className="th-table">{trade.symbol}</th>
                    <th className="th-table font-light">{sideIcon(trade.type)}</th>
                    <th className="th-table font-light">{numberPnl(trade.pnl)}</th>
                    <th className="th-table">
                      <Link className="w-full h-full cursor-pointer flex items-center justify-center gap-1" to={`/journal/${trade.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                        <span>مشاهده</span>
                      </Link>
                    </th>
                  </tr>
                )
              })              
            }
          </tbody>
        </table>
        {
          trades.length == 0 && 
          <div className=" text-center text-2xl py-2">هیچی ژورنال نداری داداش</div>
        }
        <div>
          <div className="justify-between items-center flex px-3 py-2">
            <span>تعداد معاملات : {trades.length}</span>
            <span className=" flex flex-row-reverse gap-4">
              <span>»</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>«</span>
            </span>
            <span>نمایش 1 تا 10 از {trades.length}</span>
          </div>
        </div>
      </div>{/* tables */}
    </article>
  )
}