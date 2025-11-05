'use client';

import React, { useState } from 'react';

const PaymentPolicy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('payment');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        Chính Sách Thanh Toán
      </h1>

      {/* 1. Các hình thức thanh toán */}
      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('payment')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-2xl">💳</span>
            1. Các Hình Thức Thanh Toán
          </h2>
          <span className="text-2xl text-gray-500">
            {expandedSection === 'payment' ? '−' : '+'}
          </span>
        </button>
        {expandedSection === 'payment' && (
          <div className="p-4 bg-white border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              Khách hàng có thể lựa chọn một trong các hình thức thanh toán sau khi mua hàng tại website:
            </p>

            <div className="space-y-4">
              {/* COD */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                  <span className="mr-2 text-xl">💵</span>
                  1.1. Thanh toán tiền mặt khi nhận hàng (COD)
                </h3>
                <p className="text-gray-700 text-sm">
                  Áp dụng với đơn hàng <strong>dưới 2 triệu đồng</strong>
                </p>
              </div>

              {/* Thẻ nạp */}
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                <h3 className="font-bold text-green-700 mb-3 flex items-center">
                  <span className="mr-2 text-xl">💳</span>
                  1.2. Thanh toán bằng Thẻ nạp OneLife - Kingfoodmart
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm ml-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Khách hàng chọn hình thức thanh toán Thẻ nạp OneLife – Kingfoodmart tại mục hình thức thanh toán</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Đơn hàng sẽ chuyển trạng thái đặt hàng thành công sau khi Khách hàng hoàn tất thanh toán</span>
                  </li>
                </ul>

                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-300 rounded">
                  <p className="text-sm text-gray-700">
                    <strong className="text-yellow-700">⚠️ Lưu ý:</strong> Với đơn hàng có mua sản phẩm <strong>rượu/bia</strong>, Khách hàng chỉ được chọn hình thức thanh toán bằng Thẻ nạp OneLife – Kingfoodmart. Trường hợp khách hàng chọn nhầm Phương thức thanh toán tiền mặt khi nhận hàng (COD), nhân viên sẽ liên hệ với khách hàng để hướng dẫn đổi hình thức thanh toán phù hợp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. Quy định về hoàn tiền */}
      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('refund')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-2xl">💰</span>
            2. Quy Định Về Hoàn Tiền
          </h2>
          <span className="text-2xl text-gray-500">
            {expandedSection === 'refund' ? '−' : '+'}
          </span>
        </button>
        {expandedSection === 'refund' && (
          <div className="p-4 bg-white border-t border-gray-200">
            <p className="text-gray-700 mb-4 font-semibold">
              Việc hoàn tiền được thực hiện khi phát sinh các vấn đề sau:
            </p>

            <div className="space-y-3 mb-5">
              <div className="flex items-start p-3 bg-red-50 rounded-lg">
                <span className="text-red-500 text-xl mr-3">📦</span>
                <p className="text-gray-700 text-sm">
                  Kingfoodmart không giao đủ số hàng khách đã đặt & thanh toán
                </p>
              </div>

              <div className="flex items-start p-3 bg-red-50 rounded-lg">
                <span className="text-red-500 text-xl mr-3">🔄</span>
                <p className="text-gray-700 text-sm">
                  Xử lý trả hàng theo <a href="/kingfoodmart/refund-policy" className="text-blue-600 underline hover:text-blue-800">chính sách đổi trả hàng hoá</a>
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-gray-700 mb-3 font-semibold">
                Khoản tiền hoàn sẽ được thực hiện bằng các hình thức sau:
              </p>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 text-xl mr-3">🏦</span>
                  <div>
                    <p className="font-semibold text-gray-800">Chuyển khoản qua tài khoản ngân hàng</p>
                    <p className="text-gray-600 text-sm">Hoàn tiền trực tiếp vào tài khoản ngân hàng của khách hàng</p>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-600 text-xl mr-3">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-800">Chuyển điểm tích lũy</p>
                    <p className="text-gray-600 text-sm">Khách hàng đổi e-Voucher và sử dụng cho lần mua hàng sau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Thời gian xử lý hoàn tiền */}
      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('timeline')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-2xl">⏰</span>
            3. Thời Gian Xử Lý Hoàn Tiền
          </h2>
          <span className="text-2xl text-gray-500">
            {expandedSection === 'timeline' ? '−' : '+'}
          </span>
        </button>
        {expandedSection === 'timeline' && (
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <p className="text-gray-700 text-sm">
                Kingfoodmart sẽ thông báo thời gian hoàn tiền cụ thể cho từng trường hợp cụ thể và <strong className="text-green-700">không quá 7 ngày</strong>.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Liên hệ hỗ trợ */}
      <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">
          📞 Hỗ Trợ Thanh Toán
        </h3>
        <p className="text-gray-700 text-center mb-4">
          Trường hợp cần hỗ trợ, khách hàng có thể liên hệ bộ phận CSKH qua các kênh sau:
        </p>

        <div className="space-y-3 mb-4">
          <a 
            href="https://m.me/kingfoodmarket"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md"
          >
            <span className="mr-2 text-xl">💬</span>
            <span className="font-semibold">Facebook Messenger</span>
          </a>

          <a 
            href="https://zalo.me/1427991321396079702"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition shadow-md"
          >
            <span className="mr-2 text-xl">💬</span>
            <span className="font-semibold">Zalo</span>
          </a>

          <a 
            href="mailto:hotro@kingfoodmart.com"
            className="flex items-center justify-center p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition shadow-md"
          >
            <span className="mr-2 text-xl">✉️</span>
            <span className="font-semibold">hotro@kingfoodmart.com</span>
          </a>
        </div>

        <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-700 text-sm">
            ⏰ <strong>Thời gian làm việc:</strong> 7:00 - 21:00 hằng ngày
          </p>
          <p className="text-gray-600 text-xs mt-1">(Trừ các ngày Lễ, Tết)</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;