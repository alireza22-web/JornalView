import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportExcel(trades) {

    const totalTrades = trades.length;

    const winTrades = trades.filter(t => t.result === "TP").length;

    const lossTrades = trades.filter(t => t.result === "SL").length;

    const breakevenTrades = trades.filter(t => t.result === "FR").length;

    const totalProfit = trades
        .filter(t => Number(t.pnl) > 0)
        .reduce((sum, t) => sum + Number(t.pnl), 0);

    const totalLoss = trades
        .filter(t => Number(t.pnl) < 0)
        .reduce((sum, t) => sum + Math.abs(Number(t.pnl)), 0);

    const winRate = totalTrades
        ? ((winTrades / totalTrades) * 100).toFixed(1)
        : "0";

    const profitFactor = totalLoss
        ? (totalProfit / totalLoss).toFixed(2)
        : "-";

    const avgRR = trades.length
        ? (
            trades.reduce(
                (sum, trade) =>
                    sum + Number(trade.riskReward || 0),
                0
            ) / trades.length
        ).toFixed(2)
        : "-";

    const rows = [];

    // ======================
// HEADER
// ======================

rows.push(["Journal View"]);
rows.push(["Trading Performance Report"]);
rows.push([]);
rows.push([]);

// تیترها
rows.push([
    "تاریخ گزارش",
    "تعداد معاملات",
    "Win Rate",
    "سود کل",
    "ضرر کل",
    "Profit Factor",
    "Avg RR",
    "TP",
    "SL",
    "FR"
]);

// مقادیر
rows.push([
    new Date().toLocaleDateString("fa-IR"),
    totalTrades,
    `${winRate}%`,
    totalProfit,
    totalLoss,
    profitFactor,
    avgRR,
    winTrades,
    lossTrades,
    breakevenTrades
]);

rows.push([]);
rows.push([]);

    // ======================
    // TABLE HEADER
    // ======================

    rows.push([
        "تاریخ",
        "نماد",
        "نوع معامله",
        "نتیجه",
        "سود / ضرر",
        "استراتژی",
        "تایم فریم",
        "سشن",
        "ورود",
        "حد ضرر",
        "حد سود",
        "حجم",
        "ریسک / ریوارد",
        "توضیحات"
    ]);

    // ======================
    // DATA
    // ======================

    trades.forEach(trade => {

        rows.push([
            trade.date,
            trade.symbol,
            trade.type,
            trade.result,
            trade.pnl,
            trade.strategy,
            trade.timeframe,
            trade.session,
            trade.entry,
            trade.stopLoss,
            trade.takeProfit,
            trade.lotSize,
            trade.riskReward,
            trade.note,
        ]);

    });

    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    worksheet["!merges"] = [
      {
          s: { r: 0, c: 0 },
          e: { r: 0, c: 9 }
      },
      {
          s: { r: 1, c: 0 },
          e: { r: 1, c: 9 }
      },
  ];

  worksheet["!cols"] = [
    { wch: 16 },
    { wch: 14 },
    { wch: 12 },
    { wch: 14 },
    { wch: 14 },
    { wch: 16 },
    { wch: 12 },
    { wch: 8 },
    { wch: 8 },
    { wch: 8 },
    { wch: 14 },
    { wch: 14 },
    { wch: 14 },
    { wch: 14 },
    { wch: 40 },
];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "معاملات"
    );

    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });

    const blob = new Blob(
        [excelBuffer],
        {
            type:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        }
    );

    saveAs(
        blob,
        `JournalView-${new Date().toLocaleDateString("fa-IR")}.xlsx`
    );
}