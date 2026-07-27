import { useEffect, useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { motion } from "framer-motion";
export function GalleryCard({ trade , onOpen }) {
  const [imageUrl, setImageUrl] = useState("");
  const [] = useState(false)
  useEffect(() => {
    if (!trade.image) return;
    const url = URL.createObjectURL(trade.image);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [trade.image]);


  return (
    <>
      <div onClick={()=>onOpen(trade, imageUrl)} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
        <motion.img
          layoutId={`trade-image-${trade.id}`}
          src={imageUrl}
          alt={trade.symbol}
          className="aspect-video "
        />
        <div className="absolute inset-0 group-hover:bg-black/80 dark:group-hover:bg-white/60 transition-all duration-500"/>
        <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 text-white">
          <div className="p-2 flex justify-around items-center flex-row-reverse dark:text-zinc-950">
            <div className="text-left ">
              <h3 className="text-xl font-semibold uppercase">
                {trade.symbol}
              </h3>
              <p className="text-xs opacity-80">
                {trade.date}
              </p>
            </div>
            <div className="flex uppercase items-center gap-3 justify-end mt-3">
              <span>
                {trade.session}
              </span>
              <span>
                {trade.timeframe}
              </span>
            </div>
            <div className="mt-4 flex justify-end gap-3 items-center">
              <span className={Number(trade.pnl) > 0 ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                {Number(trade.pnl) > 0 ? "+" : ""}
                {trade.pnl}
              </span>
              <span className={ trade.result==="TP" ? "bg-green-500 px-2 py-1 rounded-full text-xs text-green-800" : "bg-red-500 text-red-950 px-2 py-1 rounded-full text-xs"}>
                {trade.result}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}