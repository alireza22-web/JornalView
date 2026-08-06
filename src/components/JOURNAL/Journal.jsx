import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Link } from "react-router-dom";
import '../../custom.css'
import { numberPnl } from "../../hooks/numberPnl";
import { sideIcon } from "../../hooks/sideIcon";
import { useEffect, useState } from "react";
import { db } from "../../db/dexie";
import { filter } from "../../hooks/filter";
import { ExportDropdown } from "../ExportDropdown";
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
  const [filters, setFilters] = useState({
    symbol: "",
    result: "",
    type: "",
    fromDate: "",
    toDate: "",
    sort: "newest",
});
const [currentPage, setCurrentPage] = useState(1);


const pageSize = 5;
const filteredTrades = filter(trades, filters);
const totalPages = Math.ceil(filteredTrades.length / pageSize);
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const currentTrades = filteredTrades.slice(startIndex, endIndex);


const handleFilter = (e)=>{
  const {name,value}=e.target;
  setFilters(prev=>({
      ...prev,
      [name]:value
  }));
}
useEffect(() => {
  setCurrentPage(1);
}, [filters]);
  return (
    <article className="py-2 px-6">
      <div className="flex items-center justify-between gap-1 text-center pb-3 pt-6 text-5xl border-b-2 border-dashed">
        <span><span className="text-blue-700">ژورنال</span> معاملات</span>
        <p className="text-lg dark:text-zinc-300">ثبت و مدیریت تمام معاملات انجام شده</p>
      </div>
      <div className="flex flex-col gap-4 py-5 text-lg">
        <span>فیلتر بر اساس:</span>
        <div className="flex justify-between items-center px-12 text-base">
          <div className="flex gap-2 items-center">
            <label htmlFor="date">از تاریخ</label>
            <DatePicker onChange={(value)=>{
                setFilters(prev=>({
                    ...prev,
                    fromDate:value?.format("YYYY/MM/DD") || ""
                }))
            }} calendar={persian} locale={persian_fa} inputClass="px-2 py-1 outline-none border border-zinc-300 rounded-lg dark:border-zinc-700"/>
          </div>
          <div className="flex gap-1 items-center">
            <label htmlFor="date">تا تاریخ</label>
            <DatePicker  onChange={(value)=>{
                setFilters(prev=>({
                    ...prev,
                    toDate:value?.format("YYYY/MM/DD") || ""
                }))
            }} calendar={persian} locale={persian_fa} inputClass="px-2 py-1 outline-none border border-zinc-300 rounded-lg dark:border-zinc-700"/>
          </div>
            <select onChange={handleFilter} name="symbol" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-300 rounded-lg">
              <option  value="">نماد ها</option>
              <option value="xauusd">XAUUSD</option>
              <option value="us30">US30</option>
              <option value="ndx100">NDX100</option>
              <option value="gbpusd">GBPUSD</option>
              <option value="jpyusd">USDJPY</option>
              <option value="USDCAD">USDCAD</option>
              <option value="EURUSD">EURUSD</option>
            </select>
            <select onChange={handleFilter} name="sort" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-300 rounded-lg">
              <option value="مرتب سازی">مرتب سازی</option>
              <option value="newest">جدیدترین</option>
              <option value="oldest">قدیمی ترین</option>
              <option value="profit">بیشترین سود</option>
              <option value="loss">بیشترین ضرر</option>
            </select>
            <select onChange={handleFilter} name="type" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-300 rounded-lg">
              <option value="">نوع معامله</option>
              <option value="خرید">خرید</option>
              <option value="فروش">فروش</option>
            </select>
            <select onChange={handleFilter} name="result" className="appearance-none px-6 py-1 dark:bg-zinc-950 outline-none border border-zinc-300 rounded-lg">
              <option value="">نتایج</option>
              <option value="TP">🟢سود</option>
              <option value="SL">🔴ضرر</option>
              <option value="FR">🟡سر به سر</option>
            </select>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-4xl">معاملات</span>
          <div className="flex gap-2 items-center">
            <ExportDropdown trades={trades} />
            <Link to={'/add'}>
              <button className="text-xl cursor-pointer px-6 py-2 transition-colors duration-200 bg-blue-400 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl">
                <span>+ افزون ژورنال</span>
              </button>
            </Link>
          </div>
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
              currentTrades.length > 0 &&
              currentTrades.map(trade=>{
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
          filteredTrades.length == 0 && 
          <div className=" text-center text-2xl py-2">هیچی ژورنال نداری داداش</div>
        }
        <div className="flex justify-between items-center px-4 py-4">
          <span>تعداد معاملات : {filteredTrades.length}</span>
          <div className="flex items-center gap-2">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-3 py-1 rounded-lg border">«</button>
            {
              Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === i + 1
                      ? "dark:bg-sky-900 bg-sky-600 text-white"
                      : "border"
                  }`}
                >
                  {i + 1}
                </button>
              ))
            }
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-3 py-1 rounded-lg border">»</button>
          </div>
          <span>نمایش {startIndex + 1} تا {Math.min(endIndex, filteredTrades.length)} از {filteredTrades.length}</span>
        </div>{/* pagination */}
      </div>{/* tables */}
    </article>
  )
}