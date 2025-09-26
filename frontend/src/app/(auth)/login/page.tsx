"use client";
import { useMemo, useState } from "react";

const PAGE_BG = "#F5EFE6";
const LOGO_SRC = "/logo-petshop.png";
const RIGHT_IMG = "/auth-hero.jpg";

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
    <main className="min-h-screen grid grid-cols-12" style={{ backgroundColor: PAGE_BG }}>
      {/* LEFT: FORM */}
      <section className="col-span-12 lg:col-span-7 flex flex-col">
        {/* Logo lớn hơn */}
        <div className="h-16 flex items-center px-6 lg:px-12" style={{ backgroundColor: PAGE_BG }}>
          <img src={LOGO_SRC} alt="PET SHOP APP" className="h-12 w-auto object-contain" />
        </div>

        {/* Card form nền trắng */}
        <div className="flex-1 flex items-center justify-center">
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md px-6 py-6 bg-white rounded-2xl shadow-sm border border-gray-200"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">Đăng nhập</h1>

            {/* Email */}
            <label className="block text-sm text-gray-700 mb-1">Nhập email của bạn</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="email@vd.com"
              className="w-full h-11 bg-white outline-none placeholder-gray-400
                         border-b border-gray-300 focus:border-emerald-600 transition"
            />

            {/* Password */}
            <label className="block text-sm text-gray-700 mt-4 mb-1">Mật khẩu</label>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              minLength={6} placeholder="Mật khẩu"
              className="w-full h-11 bg-white outline-none placeholder-gray-400
                         border-b border-gray-300 focus:border-emerald-600 transition"
            />

            {/* Options */}
            <div className="flex items-center justify-between text-sm mt-3">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="w-4 h-4 border border-gray-400 rounded-sm accent-emerald-600" />
                <span>Giữ đăng nhập</span>
              </label>
              <a href="#" className="text-sm text-orange-600 hover:underline">Quên mật khẩu?</a>
            </div>

            {/* Submit (cam) */}
            <button
              type="submit" disabled={!isValid}
              className={`mt-6 w-full rounded-full py-3 font-semibold transition ${
                isValid ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-orange-200 text-white/70 cursor-not-allowed"
              }`}
            >
              Đăng nhập
            </button>

            {/* Social */}
            <p className="text-center text-sm text-gray-500 mt-4">Đăng nhập bằng phương thức khác</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button type="button"
                className="w-full py-3 rounded-full bg-[#1877F2] text-white font-semibold flex items-center justify-center gap-3 hover:brightness-95 transition">
                <img src="/facebook.svg.png" alt="Facebook" className="w-5 h-5" /> Facebook
              </button>
              <button type="button"
                className="w-full py-3 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-3 hover:brightness-95 transition">
                <img src="/google.svg.png" alt="Google" className="w-5 h-5" /> Google
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Chưa có tài khoản?{" "}
              <a href="/register" className="text-orange-600 hover:underline">Đăng ký</a>
            </p>
          </form>
        </div>
      </section>

      {/* RIGHT: ẢNH FULL, KHÔNG OVERLAY */}
      <aside className="relative hidden lg:block col-span-5">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${RIGHT_IMG}')` }} />
      </aside>
    </main>
  );
}
