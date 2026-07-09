import '../custom.css'
import { SideBar } from "../components/SideBar";
import { Navbar } from "../components/Navbar";
import { useEffect, useEffectEvent, useState } from 'react';
import { resultBacktest } from '../hooks/resultBacktest';
export function Backtest(){
  const [input,setInput] = useState("SP2L")
  const [nextId, setNextId] = useState(1);
  const [listBacktest , setListBacktest] = useState([])
  function addList(result){
    if(result == 'win'){
      setListBacktest((i)=>{
        return [...i , {id : nextId , result : 'win' }]
      })
    }else{
      setListBacktest((i)=>{
        return [...i , {id : nextId , result : 'lose' }]
      })
    }
    setNextId(nextId + 1)
  }
  function removeList(id) {
    console.log(id);
    
    setListBacktest(i =>
      i.filter(item => item.id !== id)
    );
  }
  
  function resultBacktest(result  , displayNumber, realId){
    if(result == 'win'){
          return (
            <div className="bg-green-300 text-green-600 border-2 dark:border-3 border-dotted border-green-600 w-full rounded-lg py-2 px-3 flex justify-between items-center gap-1">
              <div className='flex gap-2'>
                <span>{displayNumber} - </span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> */}
                <span>TP</span>
              </div>
              <button onClick={()=>removeList(realId)} className='cursor-pointer hover:text-green-700'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </button>
            </div>
          )
        }else{
          return (
            <div className="bg-red-300 text-red-500 border-2 dark:border-3 border-dotted border-red-500 w-full rounded-lg py-2 px-3 flex justify-between items-center gap-1">
              <div className='flex gap-2'>
                <span>{displayNumber} - </span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>       */}
                <span>SL</span>
              </div>
              <button onClick={()=>removeList(realId)} className='cursor-pointer hover:text-red-700'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </button>
            </div>
          )
        } 
  }
  
  const wins = listBacktest.filter(item => item.result === "win").length;
  const losses = listBacktest.filter(item => item.result === "lose").length;
  const total = listBacktest.length;
  const winRate = total === 0 ? 0 : ((wins / total) * 100).toFixed(2);

  return (
    <div className="flex h-screen font-l transition-colors duration-200">
      <aside className="w-82 bg-white border-l transition-colors duration-200 border-zinc-50 dark:bg-zinc-900 dark:border-l dark:border-zinc-800">
        <SideBar/>
      </aside>
      <main className="flex-1 overflow-y-auto bg-zinc-200 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar/>
        <article className='px-12 py-6 shadow-md dark:shadow-zinc-700 dark:border dark:border-zinc-900 w-fit m-4 flex flex-col gap-4'>
          <div className='flex gap-12 items-center'>
            <input placeholder='اسم استراتژیت چیه؟' className='outline-none dark:bg-zinc-900 dark:border-2 px-6 py-1.5 rounded-lg border-sky-400 border bg-sky-200 border-dashed' type="text" onChange={(e)=>setInput(e.target.value)} />
            <span>استراتژی {input}</span>
          </div>
          <div className='flex justify-between gap-4 items-center mt-2'>
            <button onClick={()=>addList('win')} className='px-6 py-1 bg-emerald-400 text-emerald-700 rounded-lg hover:bg-emerald-500 hover:text-emerald-800 cursor-pointer transition-colors duration-200'>
              <span>+ درست</span>
            </button>
            <button onClick={()=>addList('loss')} className='px-6 py-1 bg-red-400 text-red-800 rounded-lg hover:bg-red-500 hover:text-red-900 cursor-pointer transition-colors duration-200'>
              <span>- غلط</span>
            </button>
          </div>
          <div className='grid w-full grid-cols-3 gap-2'>
            {
              listBacktest.length > 0 ?
              listBacktest.map((item,i)=>{
                return (
                  <div key={item.id}>
                    {resultBacktest(item.result,i + 1,item.id)}
                  </div>
                )
              })
              :
              <div className='text-center mx-auto col-span-3 text-2xl py-2'>هنوز اضافه نشده</div>
            }
          </div>
          <div className="border-t border-sky-500 pt-4 flex justify-between items-center">
            <h3 className='badge-backtest'>تعداد معاملات: {total}</h3>
            <h3 className='badge-backtest'>سود: {wins}</h3>
            <h3 className='badge-backtest'>ضرر: {losses}</h3>
            <h3 className='badge-backtest'>وین ریت : % {winRate}</h3>
          </div>
        </article>
      </main>
    </div>
  );
}