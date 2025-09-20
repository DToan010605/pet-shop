"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: gọi API login ở đây
    alert(`Đăng nhập với ${email}`);
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Left: nội dung form + logo */}
      <div className="flex-1 flex flex-col justify-center p-10 bg-white">
        <header className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold text-[#0FA958]">PET SHOP</h1>
          <span className="text-sm text-gray-500">App</span>
        </header>

        <div className="max-w-md mx-auto w-full">
          <div className="bg-[#fbf8f6] rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Đăng nhập
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Nhập email của bạn
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 outline-none placeholder-gray-400 focus:border-[#0FA958]"
                  placeholder="email@vd.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 outline-none placeholder-gray-400 focus:border-[#0FA958]"
                  placeholder="Mật khẩu"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Giữ đăng nhập</span>
                </label>
                <a href="#" className="text-sm text-gray-600 underline">
                  Quên mật khẩu?
                </a>
              </div>

              <button
                type="submit"
                disabled={!email || password.length < 6}
                className={`w-full py-3 rounded-full font-semibold transition-colors
                  ${!email || password.length < 6
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-[#0FA958] text-white hover:bg-green-700 cursor-pointer"
                  }`}
              >
                Đăng nhập
              </button>

              <p className="text-center text-sm text-gray-600">
                Đăng nhập bằng phương thức khác
              </p>

              {/* Social buttons */}
              <div className="space-y-4 mt-4">
                <button
                  type="button"
                  className="w-full flex items-center gap-4 justify-center px-6 py-3 rounded-full bg-blue-700 text-white font-medium"
                >
                  <Image
                    src="/facebook.svg.png"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                  <span>FACEBOOK</span>
                </button>

                <button
                  type="button"
                  className="w-full flex items-center gap-4 justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium"
                >
                  <Image
                    src="/google.svg.png"
                    alt="google"
                    width={20}
                    height={20}
                  />
                  <span>GOOGLE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right: green welcome panel */}
      <div className="w-[420px] bg-[#0FA958] p-10 flex flex-col justify-between">
        <div />
        <div className="text-center text-white">
          <h3 className="text-3xl font-semibold mb-3">Chào mừng trở lại</h3>
          <p className="text-sm opacity-90">
            Chúc bạn có trải nghiệm vui vẻ tại Pet Shop
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/register"
            className="px-6 py-2 border border-white rounded-full text-white inline-block mt-6"
          >
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  );
}
