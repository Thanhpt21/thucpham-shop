"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ShoppingOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export default function AboutUsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const storeInfo = {
    address: "Địa chỉ cửa hàng của bạn, Quận/Huyện, Thành phố",
    phone: "0123 456 789",
    email: "contact@shop.vn",
    hours: "Từ Thứ Hai đến Chủ Nhật: 7h00 - 21h00",
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Trang chủ
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Giới thiệu</span>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
          alt="Welcome to our Market"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Chào Mừng Đến Với Shop Thực Phẩm
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Nơi mua sắm tin cậy, thân thiện cho mọi gia đình
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* About Section */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=80"
                alt="Sản Phẩm Chọn Lọc"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                  <ShoppingOutlined className="text-green-600 text-lg" />
                  <span className="text-green-700 font-semibold text-sm">
                    Về chúng tôi
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trải Nghiệm Mua Sắm
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Shop Thực Phẩm là nơi mua sắm tin cậy, thân thiện để quý khách
                khám phá, trải nghiệm sự đa dạng của văn hóa ẩm thực và nghệ
                thuật thưởng thức.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Sản phẩm chất lượng
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cam kết nguồn gốc rõ ràng, an toàn vệ sinh thực phẩm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Đa dạng lựa chọn
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Hàng nghìn sản phẩm từ thực phẩm tươi sống đến hàng khô,
                      gia vị
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Giá cả hợp lý
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cam kết giá tốt nhất, nhiều chương trình khuyến mãi hấp
                      dẫn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Dịch vụ tận tâm
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Đội ngũ nhân viên chuyên nghiệp, nhiệt tình phục vụ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 md:py-24">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sẵn sàng mua sắm cùng chúng tôi?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ghé thăm cửa hàng hoặc đặt hàng trực tuyến để nhận ưu đãi hấp dẫn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Mua sắm ngay
              </button>
              <button className="px-8 py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Xem sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
