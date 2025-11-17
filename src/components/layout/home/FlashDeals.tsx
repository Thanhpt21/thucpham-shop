"use client";

import { useState } from "react";
import { usePromotedProducts } from "@/hooks/product/usePromotedProducts";
import { Product } from "@/types/product.type";
import { Flame, Clock } from "lucide-react";
import ProductCardPromoted from "../product/ProductCardPromoted";

export default function FlashDeals() {
  const PRODUCTS_LIMIT = 8;
  const [page] = useState(1);

  const { data: productsResponse, isLoading, isError } = usePromotedProducts({
    page,
    limit: PRODUCTS_LIMIT,
  });

  const products = ((productsResponse?.data as Product[]) || []).filter(
    (p) =>
      p.isPublished &&
      p.promotionProducts?.some(
        (pp) => pp.promotion?.isFlashSale === true
      )
  );

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10"></div>
      
      {/* Leaf decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-600">
          <path d="M50 10 Q20 30 20 60 T50 90 Q80 70 80 40 T50 10Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4 shadow-lg shadow-red-200/50 transform hover:scale-105 transition-transform">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              FLASH SALE HÔM NAY
            </span>
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-gray-900">
            Ưu đãi <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Hấp dẫn</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Thực phẩm tươi ngon - Giảm giá cực sốc - Số lượng có hạn
          </p>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square"></div>
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="h-3 sm:h-4 bg-gray-200 rounded-full w-1/3"></div>
                  <div className="h-4 sm:h-5 bg-gray-300 rounded-full w-full"></div>
                  <div className="h-4 sm:h-5 bg-gray-300 rounded-full w-4/5"></div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="h-5 sm:h-6 bg-red-200 rounded-full w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-red-600 font-semibold text-lg">Không thể tải sản phẩm</p>
            <p className="text-gray-500 text-sm mt-2">Vui lòng thử lại sau</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((p, index) => (
              <ProductCardPromoted key={p.id} product={p} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-semibold mb-2">Chưa có Flash Sale</p>
            <p className="text-gray-500 text-sm">Hãy quay lại sau để không bỏ lỡ ưu đãi</p>
          </div>
        )}
      </div>
    </section>
  );
}