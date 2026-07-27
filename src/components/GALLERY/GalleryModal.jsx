import { motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Link } from "react-router-dom";

export function GalleryModal({ trade, imageUrl, onClose }) {
  return (
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-2 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl w-225 max-w-[95vw]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          
        >
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={12}
            doubleClick={{
              mode: "zoomIn",
              step: 0.5
          }}
            wheel={{
              step: 0.01,
              smoothStep: 0.00001,
          }}
            pinch={{
              step: 5,
            }}
          >
            {({ resetTransform, zoomIn, zoomOut }) => (
              <>
                <div className="absolute top-4 left-4 z-50 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      zoomIn();
                    }}
                    className="bg-black/70 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      zoomOut();
                    }}
                    className="bg-black/70 text-white px-3 py-1 rounded"
                  >
                    −
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetTransform();
                    }}
                    className="bg-black/70 text-white px-3 py-1 rounded"
                  >
                    Reset
                  </button>
                </div>

                <TransformComponent
                  wrapperClass="w-full max-h-[70vh]"
                  contentClass="flex justify-center items-center"
                >
                  <motion.img
                    layoutId={`trade-image-${trade.id}`}
                    src={imageUrl}
                    className="w-full rounded-3xl object-contain select-none"
                    draggable={false}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
          <div className="p-6">
            <div className="flex flex-row-reverse justify-between items-center">
              <div className="flex flex-col items-end">
                <h2 className="text-2xl font-bold uppercase">
                  {trade.symbol}
                </h2>
                <p className="text-zinc-600">
                  {trade.date}
                </p>
              </div>
              <div className="uppercase">
                <span className="text-yellow-700">{trade.timeframe}</span>
                <span> - {trade.session}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={Number(trade.pnl) > 0 ? "text-green-700 font-bold" : "text-red-700 font-bold"}>
                  {Number(trade.pnl) > 0 ? "+" : ""}
                  {trade.pnl} 
                </span>
                <span className={ trade.result==="TP" ? "bg-green-500 px-2 py-1 rounded-full text-xs text-green-800" : "bg-red-500 text-red-950 px-2 py-1 rounded-full text-xs"}>
                  {trade.result}
                </span>
              </div>
              <Link to={`/journal/${trade.id}`} className="dark:bg-zinc-200 dark:text-zinc-900 rounded-xl hover:opacity-80 transition duration-150 bg-zinc-900 p-2 text-white">مشاهده جزییات بیشتر</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
}