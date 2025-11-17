"use client";

import { useState } from "react";
import { Pagination } from "antd";
import { Sparkles, Leaf } from "lucide-react";

import { useNonPromotedProducts } from "@/hooks/product/useNonPromotedProducts";
import { Product } from "@/types/product.type";
import ProductCardFeatured from "../product/ProductCardFeatured";

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useNonPromotedProducts({
    page: currentPage,
    limit: PRODUCTS_PER_PAGE,
  });

  const filteredProducts = ((productsResponse?.data as Product[]) || []).filter(
    (p) => p.isPublished && p.isFeatured
  );

  const totalProducts = productsResponse?.total || 0;

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-50/30">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-16 h-16 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
            <Leaf className="w-6 h-6 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <p className="text-gray-600 font-semibold mt-4 text-lg">Đang tải sản phẩm...</p>
          <p className="text-gray-400 text-sm mt-1">Vui lòng đợi trong giây lát</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-50/30">
        <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100 max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-red-600 font-semibold text-lg">Không thể tải sản phẩm</p>
          <p className="text-gray-500 text-sm mt-2">Vui lòng thử lại sau</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-green-50/20 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Leaf decorations */}
      <div className="absolute top-5 left-5 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-600">
          <path d="M50 10 Q20 30 20 60 T50 90 Q80 70 80 40 T50 10Z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-20 w-24 h-24 opacity-5 rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-600">
          <path d="M50 10 Q20 30 20 60 T50 90 Q80 70 80 40 T50 10Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full mb-4 backdrop-blur-sm border border-green-200/50">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-green-700">
              Tuyển chọn đặc biệt
            </span>
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-gray-900">
            Sản phẩm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Nổi bật</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Thực phẩm tươi ngon được lựa chọn kỹ lưỡng dành cho bạn
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-4"></div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {filteredProducts.map((p, index) => (
                <ProductCardFeatured key={p.id} product={p} index={index} />
              ))}
            </div>

            {/* Pagination */}
            {totalProducts > PRODUCTS_PER_PAGE && (
              <div className="flex justify-center mt-10 sm:mt-14">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-green-100/50 p-3 sm:p-4 backdrop-blur-sm">
                  <Pagination
                    current={currentPage}
                    total={totalProducts}
                    pageSize={PRODUCTS_PER_PAGE}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                    className="custom-pagination"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 sm:py-20">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl font-bold mb-2">
              Chưa có sản phẩm nổi bật
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Hãy quay lại sau để khám phá những sản phẩm tươi ngon nhé!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}