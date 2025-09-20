"use client";
import { useState, useMemo } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(email.trim());
    const passOk = password.trim().length >= 6;
    return emailOk && passOk;
  }, [email, password]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert(`Đăng nhập với ${email}`); // demo
  };

  return (
    <main className="h-screen grid grid-cols-12 bg-[#F5F5F5]">
      {/* LEFT */}
      <section className="col-span-12 lg:col-span-7 flex flex-col">
        {/* Logo */}
        <div className="h-14 flex items-center px-6 lg:px-12">
          <span className="text-emerald-600 font-extrabold text-xl tracking-wide">
            PET SHOP
          </span>
          <span className="ml-2 text-gray-500 font-semibold">APP</span>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center">
          <form onSubmit={onSubmit} className="w-full max-w-md px-6">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
              Đăng nhập
            </h1>

            {/* Email */}
            <label className="block text-sm text-gray-600 mb-1">
              Nhập email của bạn
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@vd.com"
              className="w-full h-10 border-b border-gray-300 outline-none bg-transparent placeholder-gray-400 focus:border-emerald-600"
            />

            {/* Password */}
            <label className="block text-sm text-gray-600 mt-4 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              placeholder="Mật khẩu"
              className="w-full h-10 border-b border-gray-300 outline-none bg-transparent placeholder-gray-400 focus:border-emerald-600"
            />

            {/* Options */}
            <div className="flex items-center justify-between text-sm mt-3">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="w-4 h-4 accent-emerald-600" />
                <span>Giữ đăng nhập</span>
              </label>
              <a href="#" className="text-sm text-gray-600 underline">
                Quên mật khẩu?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className={`mt-6 w-full rounded-full py-3 font-semibold transition-all ${
                isValid
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Đăng nhập
            </button>

            {/* Divider */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Đăng nhập bằng phương thức khác
            </p>

            {/* Social */}
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="w-full py-3 rounded-full bg-[#1877F2] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#145dbf] transition"
              >
                <img src="/facebook.svg.png" alt="Facebook" className="w-5 h-5" />
                FACEBOOK
              </button>

              <button
                type="button"
                className="w-full py-3 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-3 hover:bg-gray-900 transition"
              >
                <img src="/google.svg.png" alt="Google" className="w-5 h-5" />
                GOOGLE
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RIGHT */}
      <aside className="hidden lg:flex col-span-5 bg-emerald-600 text-white items-center justify-center">
        <div className="text-center px-8">
          <h2 className="text-2xl font-bold mb-3">Chào mừng trở lại</h2>
          <p className="text-sm opacity-90">
            Chúc bạn có trải nghiệm vui vẻ tại Pet Shop
          </p>
          <div className="mt-10">
            <p className="text-xs opacity-90 mb-2">Nếu chưa có tài khoản, vui lòng đăng ký</p>
            <button className="px-6 py-2 rounded-full border border-white hover:bg-white/10">
              <a href="/register">Đăng ký</a>
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}
