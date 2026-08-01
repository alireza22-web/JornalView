import { useState, useRef, useEffect } from "react";
import { exportJson } from "../export/exportJson";
import { exportPdf } from "../export/exportPdf";
import { ExportReport } from "../export/ExportReport";
import { exportExcel } from "../export/exportExcel";

export function ExportDropdown({ trades }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleExport = (type) => {
    setOpen(false);

    switch (type) {
      case "json":
        exportJson(trades);
        break;

      case "excel":
        exportExcel(trades)
        break;

      case "pdf":
        exportPdf(trades)
        break;

      default:
        break;
    }
  };

  return (
    <div ref={ref} className="relative ">
      <button onClick={() => setOpen(!open)} className="px-6 py-2 rounded-xl dark:bg-zinc-800 transition-colors duration-100 hover:bg-zinc-400/60 bg-zinc-300 dark:hover:bg-zinc-700 flex items-start gap-2 cursor-pointer">
        <span>Export</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6l6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-52 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl z-50">

          <button
            onClick={() => handleExport("json")}
            className="w-full text-right px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            📁 Export JSON
          </button>

          <button
            onClick={() => handleExport("excel")}
            className="w-full text-right px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            📊 Export Excel
          </button>

          <button
            onClick={() => handleExport("pdf")}
            className="w-full text-right px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            📄 Export PDF
          </button>

        </div>
      )}
      <div className="fixed -left-24999.75 top-0">
          <ExportReport trades={trades} />
      </div>
    </div>
  );
}