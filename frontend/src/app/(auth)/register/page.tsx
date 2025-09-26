"use client";
import { useMemo, useState } from "react";

const PAGE_BG = "#F5EFE6"; // nền trang, trùng nền khu logo
const LOGO_SRC = "/logo-petshop.png";
const RIGHT_IMG = "/auth-hero.jpg";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "", password: "", firstName: "", lastName: "",
    day: "", month: "", year: "", country: "VN", accepted: false,
  });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const v = e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
      setForm((s) => ({ ...s, [key]: v }));
    };

  const isValid = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    const passOk = form.password.trim().length >= 6;
    const nameOk = form.firstName.trim() && form.lastName.trim();
    const d = +form.day, m = +form.month, y = +form.year;
    const dateOk = d>=1 && d<=31 && m>=1 && m<=12 && y>=1900 && y<=new Date().getFullYear();
    return emailOk && passOk && nameOk && dateOk && form.accepted;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("Đăng ký thành công! (demo)");
  };

  return (
    <main className="min-h-screen grid grid-cols-12" style={{ backgroundColor: PAGE_BG }}>
      {/* LEFT: FORM */}
      <section className="col-span-12 lg:col-span-7 flex flex-col">
        {/* Logo (to hơn) */}
        <div className="h-16 flex items-center px-6 lg:px-12" style={{ backgroundColor: PAGE_BG }}>
          <img src={LOGO_SRC} alt="PET SHOP APP" className="h-12 w-auto object-contain" />
        </div>

        {/* Card form nền trắng */}
        <div className="flex-1 flex items-center justify-center">
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md px-6 py-6 bg-white rounded-2xl shadow-sm border border-gray-200"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
              Tạo một tài khoản mới
            </h1>

            {/* Email */}
            <label className="block text-sm text-gray-700 mb-1">Nhập email của bạn</label>
            <input
              type="email" value={form.email} onChange={onChange("email")} placeholder="email@vd.com"
              className="w-full h-11 bg-white outline-none placeholder-gray-400
                         border-b border-gray-300 focus:border-emerald-600 transition"
            />

            {/* Password */}
            <label className="block text-sm text-gray-700 mt-4 mb-1">Vui lòng nhập mật khẩu</label>
            <input
              type="password" value={form.password} onChange={onChange("password")} minLength={6}
              placeholder="Tối thiểu 6 ký tự"
              className="w-full h-11 bg-white outline-none placeholder-gray-400
                         border-b border-gray-300 focus:border-emerald-600 transition"
            />

            {/* Họ / Tên */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Họ</label>
                <input
                  type="text" value={form.lastName} onChange={onChange("lastName")} placeholder="Nguyễn"
                  className="w-full h-11 bg-white outline-none placeholder-gray-400
                             border-b border-gray-300 focus:border-emerald-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Tên</label>
                <input
                  type="text" value={form.firstName} onChange={onChange("firstName")} placeholder="Văn A"
                  className="w-full h-11 bg-white outline-none placeholder-gray-400
                             border-b border-gray-300 focus:border-emerald-600 transition"
                />
              </div>
            </div>

            {/* Ngày sinh */}
            <p className="text-xs text-gray-500 mt-4 mb-2">Thông tin ngày sinh</p>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text" placeholder="Ngày" value={form.day} onChange={onChange("day")}
                className="h-11 bg-white outline-none placeholder-gray-400
                           border-b border-gray-300 focus:border-emerald-600 transition"
              />
              <input
                type="text" placeholder="Tháng" value={form.month} onChange={onChange("month")}
                className="h-11 bg-white outline-none placeholder-gray-400
                           border-b border-gray-300 focus:border-emerald-600 transition"
              />
              <input
                type="text" placeholder="Năm" value={form.year} onChange={onChange("year")}
                className="h-11 bg-white outline-none placeholder-gray-400
                           border-b border-gray-300 focus:border-emerald-600 transition"
              />
            </div>

            {/* Quốc gia */}
            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-1">Quốc gia/Khu vực</label>
              <select
                value={form.country} onChange={onChange("country")}
                className="w-full h-11 bg-white outline-none
                           border-b border-gray-300 focus:border-emerald-600 transition"
              >
                <option value="VN">Việt Nam</option>
                <option value="US">United States</option>
                <option value="JP">Japan</option>
              </select>
            </div>

            {/* Điều khoản */}
            <label className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox" checked={form.accepted} onChange={onChange("accepted")}
                className="mt-1 h-4 w-4 border border-gray-400 rounded-sm accent-emerald-600"
              />
              <span>
                Tôi đồng ý với <span className="underline">Điều khoản</span> và{" "}
                <span className="underline">Chính sách bảo mật</span>.
              </span>
            </label>

            {/* Nút chính vẫn màu cam */}
            <button
              type="submit" disabled={!isValid}
              className={`mt-6 w-full rounded-full py-3 font-semibold transition ${
                isValid ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-orange-200 text-white/70 cursor-not-allowed"
              }`}
            >
              Đăng ký
            </button>

            {/* Social */}
            <p className="text-center text-sm text-gray-500 mt-4">Hoặc sử dụng tài khoản</p>
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
              Đã có tài khoản?{" "}
              <a href="/login" className="text-orange-600 hover:underline">Đăng nhập</a>
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
