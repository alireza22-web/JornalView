import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  CrosshairMode,
} from "lightweight-charts";
function generateCandles(count = 120) {
  const data = [];

  let price = 100;

  for (let i = 1; i <= count; i++) {

    let trend = 0;

    // روندها
    if (i < 25) trend = 3;
    else if (i < 40) trend = -2.5;
    else if (i < 60) trend = 0.8;
    else if (i < 85) trend = 4;
    else if (i < 100) trend = -3;
    else trend = 2;

    const open = price;

    const body = trend + (Math.random() * 8 - 4);

    const close = open + body;

    const high =
      Math.max(open, close) + Math.random() * 4 + 2;

    const low =
      Math.min(open, close) - Math.random() * 4 - 2;

    data.push({
      time: i,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
    });

    price = close;
  }

  return data;
}

export function LandingChart() {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainer.current, {
      width: 760,
      height: 420,

      layout: {
        background: {
          color: "transparent",
        },
        textColor: "#94a3b8",
      },

      grid: {
        vertLines: {
          color: "rgba(148,163,184,.08)",
        },
        horzLines: {
          color: "rgba(148,163,184,.08)",
        },
      },

      rightPriceScale: {
        visible: false,
        borderVisible: false,
      },

      leftPriceScale: {
        visible: false,
      },

      timeScale: {
        visible: false,
        borderVisible: false,
      },

      crosshair: {
        mode: CrosshairMode.Normal,
      },

      handleScroll: false,
      handleScale: false,
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",

      borderVisible: false,

      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });
    const candles = generateCandles(60);

    candleSeries.setData(candles);
    
    chart.timeScale().applyOptions({
      rightOffset: 0,
      barSpacing: 20,
    });
    
    chart.timeScale().fitContent();
    
    chart.timeScale().scrollToPosition(0, false);
    
    const resize = () => {
      chart.applyOptions({
        width: chartContainer.current.clientWidth,
      });
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      chart.remove();
    };
  }, []);

  return (
      <div
        ref={chartContainer}
        className="w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl"
      />
  );
}