export function Validation(formData){
    const fieldNames = {
      symbol: "نماد",
      strategy: "استراتژی",
      type: "نوع معامله",
      result: "نتیجه معامله",
      date: "تاریخ",
      time: "ساعت",
      session: "سشن",
      timeframe: "تایم فریم",
      pnl: "سود / ضرر",
      entry: "نقطه ورود",
      stopLoss: "حد ضرر",
      takeProfit: "حد سود",
      lotSize: "حجم معامله",
      riskReward: "ریسک به ریوارد",
    };
  
    for (const key in fieldNames) {
      if (!formData[key]?.toString().trim()) {
        return `${fieldNames[key]} را وارد کنید.`;
      }
    }
  
    return null;
}