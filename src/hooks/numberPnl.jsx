export function numberPnl(num){
  if(num >= 0){
    return <span className="text-green-600 text-xl">{num}$</span>
  }else{
    return <span className="text-red-700 text-xl">{num}$</span>
  }

}