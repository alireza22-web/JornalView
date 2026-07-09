export function resultBacktest(result , id){
  if(result == 'win'){
    return (
      <div className="bg-green-500 w-full py-2 px-3 flex gap-1">
        <span>{id} - </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
        <span>نتیجه درست</span>
      </div>
    )
  }else{
    return (
      <div className="bg-red-500 w-full py-2 px-3 flex gap-1">
        <span>{id} - </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>      <span>نتیجه غلط</span>
      </div>
    )
  }
}