import { useEffect, useState } from "react"
import { db } from "../../db/dexie"
import { GalleryCard } from "./GalleryCard"
import { AnimatePresence } from "framer-motion";
import { GalleryModal } from "./GalleryModal";

export function GalleryView(){
  const [trades , setTrades] = useState([])
  const loadData = async () => {
    try {
      const data = await db.trades.toArray()
      setTrades(data)
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(()=>{
    loadData()
  },[])
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const handleOpen = (trade, imageUrl) => {
    setSelectedTrade(trade);
    setSelectedImage(imageUrl);
  };
  const handleClose = () => {
    setSelectedTrade(null);
    setSelectedImage("");
  };
  return (
    <main className="p-6">
      <div className="flex flex-col justify-center items-center p-2 border-b border-zinc-400/40 border-dashed">
        <span className="text-xl"> آرشیو تصاویر معاملات</span>
        <p className="text-zinc-500 text-sm dark:text-zinc-400">مرور تصویری معاملات گذشته، بهترین راه برای شناسایی اشتباهات و تقویت نقاط قوت است.</p>
      </div>
      <div className="grid grid-cols-3 gap-3 p-6">
        {
          trades.map((trade)=>{
            return <GalleryCard key={trade.id} trade={trade} onOpen={handleOpen} />
          })
        }
      </div>
      <AnimatePresence>
        {selectedTrade && (
          <GalleryModal
            trade={selectedTrade}
            imageUrl={selectedImage}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </main>
  )
}