"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden my-10">
      {/* Hình nền - Fresh vegetables and fruits */}
      <div className="relative w-full h-[400px] sm:h-[500px] z-0">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-vegetables-2305192_1280.jpg"
          alt="Thực phẩm tươi ngon"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Nội dung */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <p className="text-white text-3xl sm:text-5xl font-bold mb-4">
          Tươi ngon mỗi ngày
        </p>
        <p className="text-gray-100 max-w-2xl text-sm sm:text-base mb-6 leading-relaxed">
          Khám phá thực phẩm tươi sống & sản phẩm chất lượng cao. Từ rau củ hữu cơ 
          đến thực phẩm dinh dưỡng, chúng tôi mang đến nguồn thực phẩm sạch & an toàn 
          cho gia đình bạn.
        </p>
        <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Mua sắm ngay
        </button>
      </div>

      {/* Badge tươi sống */}
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg z-20">
        <p className="text-green-600 font-bold text-xs sm:text-sm flex items-center gap-2">
          <span className="text-lg">🌿</span>
          100% Tươi sống
        </p>
      </div>
    </section>
  );
}