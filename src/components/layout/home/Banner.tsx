"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useConfigByTenant } from "@/hooks/config/useConfigByTenant";

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const moved = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const { data: config, isLoading, isError } = useConfigByTenant();

  // Nếu data chưa có thì chưa render
  if (isLoading || isError || !config) {
    return (
      <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] bg-gray-200" />
    );
  }

  // Lấy banner từ config
  const slides = config?.banner?.map((url: any, idx: any) => ({
    id: idx + 1,
    img: url,
    clickable: true,
  }));

  // ⚙️ Hàm tự chạy
  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides?.length);
    }, 4000);
  };

  // ⏸️ Dừng chạy
  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Điều khiển autoplay
  useEffect(() => {
    if (!paused && !dragging) startAutoPlay();
    else stopAutoPlay();
    return stopAutoPlay;
  }, [paused, dragging]);

  // 🖱️ Xử lý kéo slide
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    startX.current = e.clientX;
    moved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 10) moved.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!dragging) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setIndex((i) => (i - 1 + slides?.length) % slides?.length);
      else setIndex((i) => (i + 1) % slides?.length);
    }
    setDragging(false);
  };

  // 🖱️ Click slide → sang trang /san-pham
  const handleClick = (slide: any) => {
    if (moved.current || !slide.clickable) return;
    router.push("/san-pham");
  };

  return (
    <>
      <section
        className="relative w-full overflow-hidden select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Dải slide */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides?.map((s: any) => (
            <div
              key={s.id}
              className={`w-full flex-shrink-0 relative ${
                s.clickable ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={() => handleClick(s)}
            >
              <img
                src={s.img}
                alt={`Slide ${s.id}`}
                className="w-full h-[200px] sm:h-[350px] md:h-[500px] sm:object-cover bg-gray-100"
              />
            </div>
          ))}
        </div>

        {/* Nút điều hướng */}
        <button
          onClick={() => {
            stopAutoPlay();
            setIndex((i) => (i - 1 + slides?.length) % slides?.length);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition z-10"
        >
          ‹
        </button>
        <button
          onClick={() => {
            stopAutoPlay();
            setIndex((i) => (i + 1) % slides?.length);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition z-10"
        >
          ›
        </button>

        {/* Chấm chỉ báo */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides?.map((_: any, i: any) => (
            <div
              key={i}
              onClick={() => {
                stopAutoPlay();
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === index ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 4 Features Section */}
      <section className="w-full bg-[#f8f6f0] py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hàng hoá */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-[#7db83e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Hàng hoá</h3>
              <p className="text-gray-600 text-sm">Luôn luôn tươi ngon</p>
            </div>
          </div>

          {/* Giao hàng */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-[#7db83e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Giao hàng</h3>
              <p className="text-gray-600 text-sm">Nhanh chóng, tiết kiệm</p>
            </div>
          </div>

          {/* Tư vấn */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-[#7db83e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Tư vấn</h3>
              <p className="text-gray-600 text-sm">Chu đáo, tận tâm</p>
            </div>
          </div>

          {/* Thực phẩm */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-[#7db83e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
                <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Thực phẩm
              </h3>
              <p className="text-gray-600 text-sm">Vệ sinh, an toàn</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}