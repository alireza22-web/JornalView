"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const STORAGE_KEY = "dashboard-announcement-v1";

export default function InfoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);

    if (!seen) {
      setOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[90%] max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
              transition: { duration: 0.25 }
            }}
          >
            <button
              onClick={closeModal}
              className="absolute cursor-pointer left-4 top-4 text-xl"
            >
              ✕
            </button>

            <h2 className="mb-4 text-2xl font-bold">
              اطلاعیه
            </h2>

            <p className="leading-8 text-gray-600 text-justify flex-col flex items-start">
              <h2 className="text-xl text-gray-800">به ژورنال ویو خوش آمدید</h2>              
              <span>با سلام و احترام،</span>
              <p>از اینکه ژورنال ویو را برای مدیریت و تحلیل معاملات خود انتخاب کرده‌اید، صمیمانه سپاسگزاریم.</p>
              <p>ژورنال ویو با هدف کمک به معامله‌گران طراحی شده است تا بتوانند تمامی اطلاعات مربوط به معاملات خود را به‌صورت منظم ثبت، بررسی و تحلیل کنند. با استفاده از این ابزار می‌توانید نقاط قوت و ضعف استراتژی‌های خود را شناسایی کرده، عملکرد معاملاتی‌تان را بهبود دهید و با تصمیم‌گیری آگاهانه‌تر، مسیر موفقیت خود را هموارتر کنید.</p>
              <p>هدف ما این است که با ارائه امکانات کاربردی، شما را در مسیر تبدیل شدن به یک معامله‌گر منظم و حرفه‌ای همراهی کنیم.</p>
              <p>پیشنهاد می‌کنیم پیش از شروع، حتماً صفحه <Link className="text-sky-600" to={'/guide'}>«راهنمای سایت»</Link> را مطالعه کنید. در این بخش با تمامی امکانات ژورنال ویو، نحوه ثبت معاملات و استفاده صحیح از ابزارهای تحلیلی آشنا خواهید شد تا بتوانید از تمام قابلیت‌های سایت به بهترین شکل استفاده کنید.</p>
              <p>از همراهی و اعتماد شما سپاسگزاریم و برایتان معاملاتی موفق و پرسود آرزو می‌کنیم.</p>
              <h3 className="text-lg text-gray-900">تیم ژورنال ویو</h3>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}