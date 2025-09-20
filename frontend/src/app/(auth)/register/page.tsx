"use client";
import { useState, useMemo } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    country: "VN",
    accepted: false,
  });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((s) => ({ ...s, [key]: value }));
    };

  const isValid = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    const passOk = form.password.trim().length >= 6;
    const nameOk = form.firstName.trim() && form.lastName.trim();
    const d = Number(form.day),
      m = Number(form.month),
      y = Number(form.year);
    const dateOk =
      d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1900 && y <= new Date().getFullYear();
    return emailOk && passOk && nameOk && dateOk && form.accepted;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("Đăng ký thành công! (demo)");
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
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
              Tạo một tài khoản mới
            </h1>

            {/* Email */}
            <label className="block text-sm text-gray-600 mb-1">
              Nhập email của bạn
            </label>
            <input
              type="email"
              value={form.email}
              onChange={onChange("email")}
              className="w-full h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
            />

            {/* Password */}
            <label className="block text-sm text-gray-600 mt-4 mb-1">
              Vui lòng nhập mật khẩu
            </label>
            <input
              type="password"
              value={form.password}
              onChange={onChange("password")}
              className="w-full h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
            />

            {/* Name */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Họ</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className="w-full h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Tên</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className="w-full h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Birthday */}
            <p className="text-xs text-gray-500 mt-4 mb-2">Thông tin ngày sinh</p>
            <div className="grid grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="Ngày"
                value={form.day}
                onChange={onChange("day")}
                className="h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
              />
              <input
                type="text"
                placeholder="Tháng"
                value={form.month}
                onChange={onChange("month")}
                className="h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
              />
              <input
                type="text"
                placeholder="Năm"
                value={form.year}
                onChange={onChange("year")}
                className="h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
              />
            </div>

            {/* Country */}
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                Quốc gia/Khu vực
              </label>
              <select
                value={form.country}
                onChange={onChange("country")}
                className="w-full h-10 border-b border-gray-300 outline-none focus:border-emerald-600"
              >
                <option value="VN">Việt Nam</option>
                <option value="US">United States</option>
                <option value="JP">Japan</option>
              </select>
            </div>

            {/* Terms */}
            <label className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={form.accepted}
                onChange={onChange("accepted")}
                className="mt-1 h-4 w-4 border-gray-400 accent-emerald-600"
              />
              <span>
                Tôi đồng ý với <span className="underline">Điều khoản</span> và{" "}
                <span className="underline">Chính sách bảo mật</span>.
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`mt-6 w-full rounded-full py-3 font-semibold transition-all ${
                isValid
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Đăng ký
            </button>

            {/* Divider */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Hoặc sử dụng tài khoản
            </p>

            {/* Social buttons */}
            <div className="mt-3 space-y-3">
              <button className="w-full py-3 rounded-full bg-[#1877F2] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#145dbf] transition">
                <img src="/facebook.svg.png" alt="Facebook" className="w-5 h-5" />
                Đăng nhập với Facebook
              </button>

              <button className="w-full py-3 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-3 hover:bg-gray-900 transition">
                <img src="/google.svg.png" alt="Google" className="w-5 h-5" />
                Đăng nhập với Google
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RIGHT */}
      <aside className="hidden lg:flex col-span-5 bg-emerald-600 text-white items-center justify-center">
        <div className="text-center px-8">
          <h2 className="text-2xl font-bold mb-3">
            Chào mừng bạn đến với PET SHop
          </h2>
          <p className="text-sm opacity-90">
            Vui lòng đăng kí tạo tài khoản để sử dụng các dịch vụ của chúng tôi
          </p>
          <div className="mt-10">
            <p className="text-xs opacity-90 mb-2">
              Nếu đã có tài khoản, vui lòng chọn đăng nhập
            </p>
            <button className="px-6 py-2 rounded-full border border-white hover:bg-white/10">
              <a href="/login">Đăng nhập</a>
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}
