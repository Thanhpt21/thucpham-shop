'use client'

import React from 'react'
import { Image, Spin } from 'antd'
import { getImageUrl } from '@/utils/getImageUrl'
import { useAllCategories } from '@/hooks/category/useAllCategories'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Category {
  id: number
  name: string
  slug: string
  thumb?: string
}

export default function TopCategories() {
  // Gọi API để lấy danh sách categories
  const { data: categories, isLoading, isError } = useAllCategories()

  // Loading state
  if (isLoading) {
    return (
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Danh mục sản phẩm
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <Spin size="large" />
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (isError) {
    return (
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Danh mục sản phẩm
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-red-600 font-semibold text-lg">Không thể tải danh mục</p>
            <p className="text-gray-500 text-sm mt-2">Vui lòng thử lại sau</p>
          </div>
        </div>
      </section>
    )
  }

  // Empty state
  if (!categories || categories.length === 0) {
    return (
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Danh mục sản phẩm
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-semibold">Chưa có danh mục nào</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50/20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Danh mục <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Sản phẩm</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            Khám phá thực phẩm tươi ngon theo từng danh mục
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {categories.map((cat: Category) => (
            <Link
              key={cat.id}
              href={`/san-pham?categoryId=${cat.id}`}
              className="group"
            >
              <div className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-4 group-hover:ring-green-200 transition-all duration-300">
                    <Image
                      src={getImageUrl(cat.thumb ?? null) || '/images/no-image.png'}
                      alt={cat.name}
                      preview={false}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Category Name */}
                <span className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 w-full px-1">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button (Optional) */}
        {categories.length > 12 && (
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/danh-muc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Xem tất cả danh mục
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}