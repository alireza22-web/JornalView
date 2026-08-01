export function ExportReport({trades}) {
  return (
    <div
      id="report"
      className="w-[210mm] min-h-[297mm] p-12 font-b"
      style={{
        background: "#ffffff",
        color: "#111827",
      }}
    >
      {/* Header */}
      <div
        className="pb-6 mb-8 font-l px-12 flex justify-between items-center"
        style={{
          borderBottom: "2px solid #d4d4d8",
        }}
      >
          <div className="flex flex-col items-center justify-center">
            <span className="text-base" style={{ color: "#71717a" }}>
              تاریخ گزارش
            </span>
            <h3>
              {new Date().toLocaleDateString("fa-IR")}
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-0">
            <h1 className="text-4xl font-" style={{ color: "#1d4ed8" }}>
              <span style={{color : "#000"}}>ژورنال</span> ویو
            </h1>
            <p className="mt-2 text-base" style={{ color: "#71717a" }}>
              گزارش معاملات
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span style={{ color: "#71717a" }}>
              تعداد معاملات
            </span>
            <h3>
              {trades.length.toLocaleString("fa-IR")}
            </h3>
          </div>

      </div>

      {/* Table */}

      <table
        className="w-full uppercase"
        style={{
          borderCollapse: "collapse",
          border: "1px solid #d4d4d8",
        }}
      >

        <thead>

          <tr
            style={{
              background: "#2563eb",
              color: "#ffffff",
            }}
          >
            <th className="p-3">تاریخ</th>
            <th className="p-3">نماد</th>
            <th className="p-3">نوع</th>
            <th className="p-3">نتیجه</th>
            <th className="p-3">سود</th>
            <th className="p-3">استراتژی</th>
          </tr>

        </thead>

        <tbody>

          {trades.map((trade, i) => (

            <tr
              key={trade.id}
              style={{
                background: i % 2 ? "#f4f4f5" : "#ffffff",
              }}
            >

              <td
                className="p-2 text-center"
                style={{ border: "1px solid #d4d4d8" }}
              >
                {trade.date}
              </td>

              <td
                className="p-2 text-center"
                style={{ border: "1px solid #d4d4d8" }}
              >
                {trade.symbol}
              </td>

              <td
                className="p-2 text-center"
                style={{ border: "1px solid #d4d4d8" }}
              >
                {trade.type}
              </td>

              <td
                className="p-2 text-center"
                style={{ border: "1px solid #d4d4d8" }}
              >
                {trade.result}
              </td>

              <td
                className="p-2 text-center"
                style={{ border: "1px solid #d4d4d8" }}
              >
                {trade.pnl}
              </td>

              <td
                className="p-2 text-center"
                style={{ border: "1px solid #d4d4d8" }}
              >
                {trade.strategy}
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}