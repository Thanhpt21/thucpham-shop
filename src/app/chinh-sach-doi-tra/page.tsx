'use client';

import React, { useState } from 'react';

const ReturnPolicy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('general');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-3">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Chính Sách Đổi Trả Hàng Hóa
      </h2>

      <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
        <p className="text-gray-700 leading-relaxed">
          <strong>Lưu ý:</strong> Vui lòng kiểm tra gói hàng hóa giao đúng người nhận trước khi nhận từ nhân viên giao hàng.
        </p>
      </div>

      {/* Quy định chung */}
      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('general')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-2xl">📋</span>
            1. Quy Định Chung
          </h3>
          <span className="text-2xl text-gray-500">
            {expandedSection === 'general' ? '−' : '+'}
          </span>
        </button>
        {expandedSection === 'general' && (
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="mb-4">
              <p className="text-gray-700 mb-4">
                Khách hàng mua hàng tại website hoặc Ứng dụng vui lòng kiểm tra gói hàng hóa giao đúng người nhận trước khi nhận từ nhân viên giao hàng.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-700 mb-2">⏰ Trong vòng 24 giờ</p>
                <p className="text-gray-700 text-sm mb-3">
                  Khách hàng được đổi trả trong các trường hợp sau:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Sản phẩm bị rách bao bì</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Bị hư hỏng do vi khuẩn hoặc côn trùng xâm nhập</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Bị hư hỏng trong quá trình giao hàng</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Giao không đúng sản phẩm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Khách hàng có thể đổi hoặc trả hàng do thay đổi ý định mua hàng đối với những hàng hóa <strong>không thuộc "Nhóm hàng hóa không áp dụng đổi/trả"</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Nhóm hàng hóa không áp dụng đổi trả */}
      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('excluded')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-2xl">🚫</span>
            Nhóm Hàng Hóa Không Áp Dụng Đổi/Trả
          </h3>
          <span className="text-2xl text-gray-500">
            {expandedSection === 'excluded' ? '−' : '+'}
          </span>
        </button>
        {expandedSection === 'excluded' && (
          <div className="p-4 bg-white border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              Do tính chất hàng hóa, bán sản phẩm kiểm soát được nguồn gốc cũng như để bảo vệ lợi ích người tiêu dùng mua sau, chúng tôi không áp dụng đổi trả những sản phẩm được liệt kê sau đây:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                  <span className="mr-2">❄️</span>
                  Sản phẩm bảo quản nhiệt độ thấp
                </h4>
                <ul className="text-gray-700 text-sm space-y-1 ml-6">
                  <li>• Thực phẩm tươi sống</li>
                  <li>• Hàng đông lạnh</li>
                  <li>• Kem</li>
                  <li>• Các sản phẩm Khuyến mãi</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
                  <span className="mr-2">🍼</span>
                  Sản phẩm đặc biệt
                </h4>
                <ul className="text-gray-700 text-sm space-y-1 ml-6">
                  <li>• Các sản phẩm Sữa bột</li>
                  <li>• Các sản phẩm Bia, Rượu</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <h4 className="font-semibold text-yellow-700 mb-2 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Sản phẩm không đạt chất lượng
                </h4>
                <ul className="text-gray-700 text-sm space-y-1 ml-6">
                  <li>• Sản phẩm không tuân thủ quy định sử dụng của nhà sản xuất</li>
                  <li>• Sản phẩm hết hạn sử dụng</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                  <span className="mr-2">🎁</span>
                  Sản phẩm khuyến mại
                </h4>
                <ul className="text-gray-700 text-sm space-y-1 ml-6">
                  <li>• Sản phẩm khuyến mại</li>
                  <li>• Sản phẩm bán thanh lý</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quy trình đổi trả */}
      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('process')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-2xl">🔄</span>
            Quy Trình Đổi Trả
          </h3>
          <span className="text-2xl text-gray-500">
            {expandedSection === 'process' ? '−' : '+'}
          </span>
        </button>
        {expandedSection === 'process' && (
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Kiểm tra hàng khi nhận</h4>
                  <p className="text-gray-600 text-sm">
                    Vui lòng kiểm tra kỹ hàng hóa trước khi nhận từ nhân viên giao hàng. Từ chối nhận nếu phát hiện bất thường.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Liên hệ trong vòng 24h</h4>
                  <p className="text-gray-600 text-sm">
                    Nếu phát hiện vấn đề sau khi nhận hàng, vui lòng liên hệ ngay với chúng tôi trong vòng 24 giờ kể từ khi nhận hàng.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Cung cấp thông tin & hình ảnh</h4>
                  <p className="text-gray-600 text-sm">
                    Cung cấp mã đơn hàng, hình ảnh sản phẩm lỗi hoặc không đúng để chúng tôi xác minh.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Xử lý yêu cầu</h4>
                  <p className="text-gray-600 text-sm">
                    Chúng tôi sẽ xác minh và xử lý đổi trả hoặc hoàn tiền theo đúng quy định.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lưu ý quan trọng */}
      <div className="mt-6 p-5 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg">
        <h3 className="font-bold text-red-700 mb-3 flex items-center text-lg">
          <span className="mr-2 text-2xl">⚠️</span>
          Lưu Ý Quan Trọng
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-red-500 mr-2 mt-1 font-bold">•</span>
            <span>Vui lòng quay video khi mở hàng để làm bằng chứng nếu có vấn đề</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2 mt-1 font-bold">•</span>
            <span>Thời gian đổi trả chỉ có hiệu lực trong vòng <strong>24 giờ</strong> kể từ khi nhận hàng</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2 mt-1 font-bold">•</span>
            <span>Sản phẩm đổi trả phải còn nguyên vẹn, chưa qua sử dụng (trừ trường hợp lỗi từ shop)</span>
          </li>
        </ul>
      </div>

      {/* Liên hệ hỗ trợ */}
      <div className="mt-6 text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="font-bold text-xl text-gray-800 mb-3">Cần Hỗ Trợ Đổi Trả?</h3>
        <p className="text-gray-600 mb-4">Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="tel:1900xxxx"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg"
          >
            📞 Hotline: 1900-xxxx
          </a>
          <a 
            href="mailto:support@shop.vn"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg"
          >
            ✉️ Email hỗ trợ
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;