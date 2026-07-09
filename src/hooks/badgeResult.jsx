export function badgeResult(result){
  if(result == 'SL'){
    return (
      <button className="px-8 py-0.5 rounded-md bg-red-400/60 text-red-600 inset-ring inset-ring-red-400/20">
        <span>SL</span>
      </button>
    )
  }else if(result == 'TP'){
    return (
      <button className="px-8 py-0.5 rounded-md bg-green-400/60 text-green-600 inset-ring inset-ring-green-400/20">
        <span>TP</span>
      </button>
    )
  }else{
    return (
      <button className="px-8 py-0.5 rounded-md bg-yellow-400/60 text-yellow-600 inset-ring inset-ring-yellow-400/20">
        <span>FR</span>
      </button>
    )
  }

}
export function explaneResult(result){
  if(result == 'SL'){
    return (
        <span>ضرر</span>
    )
  }else if(result == 'TP'){
    return (
        <span>سود</span>
    )
  }else{
    return (
        <span>برابر</span>
    )
  }

}