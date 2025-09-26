"use client";
const suggestedProducts = [
  {
    id: 1,
    name: "Thức ăn cho mèo Whiskas Ocean Fish",
    price: 120000,
    oldPrice: 150000,
    image: "/suggested/whiskas1.png",
  },
  {
    id: 2,
    name: "Pate cho chó Pedigree Beef",
    price: 95000,
    oldPrice: 120000,
    image: "/suggested/pedigree1.png",
  },
  {
    id: 3,
    name: "Sữa tắm thú cưng SOS 530ml",
    price: 110000,
    oldPrice: 140000,
    image: "/suggested/sos-shampoo.png",
  },
  {
    id: 4,
    name: "Vòng cổ thú cưng Pet Collar",
    price: 45000,
    oldPrice: 70000,
    image: "/suggested/collar.png",
  },
  {
    id: 5,
    name: "Đồ chơi bóng cho mèo",
    price: 30000,
    oldPrice: 50000,
    image: "/suggested/cat-toy.png",
  },
  {
    id: 6,
    name: "Chuồng chó inox size M",
    price: 650000,
    oldPrice: 750000,
    image: "/suggested/dog-cage.png",
  },
  {
    id: 7,
    name: "Cát vệ sinh cho mèo 5kg",
    price: 85000,
    oldPrice: 110000,
    image: "/suggested/cat-sand.png",
  },
  {
    id: 8,
    name: "Thức ăn hạt Royal Canin Puppy",
    price: 320000,
    oldPrice: 380000,
    image: "/suggested/royal-canin.png",
  },
];
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6efe6]">
      {/* HEADER */}
      <header className="w-full bg-[#f7931a]">
  <div className="mx-auto max-w-[1400px] h-[84px] px-6 flex items-center gap-8">
    {/* LOGO dạng pill xám, chỉ cần thay src */}
    <a
      href="/"
      className="bg-[#efefef] rounded-[14px] px-5 py-2 flex items-center"
    >
      <img
        src="/logo-petshop.png"             // 👉 đường dẫn logo
        alt="Pet Shop Logo"
        className="h-10 w-auto object-contain"
      />
    </a>

    {/* Ô TÌM KIẾM to, cao hơn */}
    <div className="flex-1">
      <div className="h-12 bg-white rounded-[4px] pl-5 pr-2 flex items-center">
        <input
          type="text"
          placeholder="BẠN MUỐN TÌM GÌ CHO HÔM NAY ?"
          className="w-full h-full outline-none text-[14px] font-semibold uppercase tracking-wide placeholder:opacity-80"
        />
        <button
          aria-label="Tìm kiếm"
          className="ml-3 h-10 w-10 rounded-[4px] bg-white flex items-center justify-center"
        >
          {/* icon kính lúp đậm như ảnh */}
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-[#1b1b1b] stroke-[2.5]">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </button>
      </div>
    </div>

    {/* NAV – chữ trắng đậm, giãn cách lớn */}
    <nav className="hidden lg:flex items-center gap-10">
      <a className="text-white font-bold text-[14px]" href="#">
        DANH MỤC SẢN PHẨM
      </a>
      <a className="text-white font-bold text-[14px]" href="#">
        ABOUT PET SHOP
      </a>

      {/* Giỏ hàng */}
      <a href="#" aria-label="Giỏ hàng" className="ml-2">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-[#1b1b1b] stroke-[2.5]">
          <path d="M6 6h15l-2 8H8L6 6Z" />
          <circle cx="9" cy="19" r="1.6" />
          <circle cx="17" cy="19" r="1.6" />
        </svg>
      </a>

      <span className="text-white/90 text-[13px]">XIN CHÀO</span>
      <a className="text-white font-bold text-[14px]" href="/login">ĐĂNG NHẬP</a>
      <a className="text-white font-bold text-[14px]" href="/register">ĐĂNG KÝ</a>
    </nav>
  </div>
</header>

<main className="mx-auto max-w-[1400px] px-6 md:px-12 py-10 flex items-center">
  {/* Text trái */}
  <div className="flex-1 pr-6">
    <h1 className="text-[#0f0f0f] italic font-extrabold leading-snug 
                   text-[28px] md:text-[40px] lg:text-[43px]">
      Ở PET SHOP, Chúng tôi có mọi
      <br />
      điều tuyệt vời nhất dành cho
      <br />
      thú cưng của bạn
    </h1>
  </div>

  {/* Ảnh phải */}
  <div className="flex-1 flex justify-end">
    {/* 👉 thay đường dẫn ảnh chó/mèo của bạn */}
    <img
      src="/background1.png"
      alt="Dogs"
      className="w-[340px] md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</main>
{/* DANH MỤC SẢN PHẨM */}
<section className="w-full bg-white">
  <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12">
    <h2 className="text-center text-[40px] font-extrabold mb-10">
      Danh mục sản phẩm
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {[
        "Thú cưng thuần chủng",
        "Thức ăn cho thú cưng",
        "Phụ kiện cho thú cưng",
        "Chăm sóc thú cưng",
        "Tiêm phòng và kiểm tra sức khỏe",
        "Trông giữ thú cưng",
      ].map((label, i) => (
        <a key={i} href="#" className="block group">
          {/* 👉 Thay ảnh thật của danh mục */}
          <div className="bg-[#d9d9d9] rounded-md aspect-[1/1] w-full overflow-hidden">
            {/* <img src={`/categories/cat-${i+1}.png`} className="w-full h-full object-cover" alt={label}/> */}
          </div>
          <p className="mt-3 font-bold leading-snug text-center">{label}</p>
        </a>
      ))}
    </div>
  </div>
</section>

{/* FLASH SALE */}
<section className="w-full bg-[#f7df8a]">
  <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-8">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="bg-[#ffa11e] text-black font-extrabold text-[28px] px-5 py-2">
          FLASH SALE
        </span>

        {/* Countdown đơn giản – bạn có thể thay số */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-8 min-w-10 bg-[#d9d9d9] font-bold">
            36
          </span>
          <span className="font-bold text-xl">:</span>
          <span className="inline-flex items-center justify-center h-8 w-8 bg-[#d9d9d9]"></span>
          <span className="inline-flex items-center justify-center h-8 w-8 bg-[#d9d9d9]"></span>
        </div>
      </div>

      <a href="#" className="font-extrabold text-lg">
        Xem thêm &gt;
      </a>
    </div>

    {/* List sản phẩm */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[1, 2, 3, 4].map((i) => (
        <a key={i} href="#" className="block">
          <div className="relative bg-white rounded-md shadow-sm overflow-hidden">
            {/* Tag -36% góc phải */}
            <div className="absolute right-0 top-0 bg-[#f7931a] text-black text-sm font-bold px-4 py-2 rounded-bl-md">
              −36%
            </div>

            {/* Ảnh sản phẩm (placeholder xám) */}
            <div className="bg-[#d9d9d9] aspect-[3/4] w-full">
              {/* 👉 thay bằng ảnh thật:
                  <img src={`/products/p-${i}.png`} className="w-full h-full object-cover" alt="Whiskas" />
              */}
            </div>

            {/* Nội dung dưới (tùy chọn) */}
            <div className="p-4">
              <h3 className="font-semibold">Whiskas Ocean Fish Loaf</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-extrabold text-lg">36.000đ</span>
                <span className="line-through text-black/60">3.636.000đ</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
{/* SẢN PHẨM GỢI Ý */}
<section className="w-full bg-white">
  <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-10 pb-14">
    <h2 className="text-center text-[40px] font-extrabold mb-8">
      Sản phẩm gợi ý từ PET Shop
    </h2>

    {/* Hàng bộ lọc */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
      {[
        { key: "pet", label: "Thú cưng" },
        { key: "price", label: "Giá cả" },
        { key: "topic", label: "Chủ đề" },      // 👈 lọc thứ 3
        { key: "brand", label: "Thương hiệu" }, // 👈 lọc thứ 4
      ].map((f) => (
        <button
          key={f.key}
          className="flex items-center justify-between bg-[#d9d9d9] rounded-md px-6 h-[52px] font-extrabold text-[20px]"
          type="button"
        >
          <span>{f.label}</span>
          {/* icon phễu */}
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-black stroke-[2.5]">
            <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
          </svg>
        </button>
      ))}
    </div>
    {/* Lưới sản phẩm */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
  {suggestedProducts.map((p) => (
    <a key={p.id} href="#" className="block">
      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        {/* Ảnh sản phẩm */}
        <div className="bg-[#d9d9d9] aspect-[3/4] w-full flex items-center justify-center">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nội dung dưới */}
        <div className="p-4">
          <h3 className="font-semibold text-[16px] leading-snug line-clamp-2">
            {p.name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-extrabold text-lg text-[#000]">
              {p.price.toLocaleString("vi-VN")}đ
            </span>
            <span className="line-through text-black/60">
              {p.oldPrice.toLocaleString("vi-VN")}đ
            </span>
          </div>
        </div>
      </div>
    </a>
  ))}
</div>
  </div>
</section>
{/* TOP NGÀNH HÀNG BÁN CHẠY NHẤT TẠI PET SHOP */}
<section className="w-full bg-[#f7df8a]">
  <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Cột trái: 2 ảnh xếp dọc */}
      <div className="space-y-10">
        {/* 👉 thay src bằng ảnh thật của bạn */}
        <div className="bg-[#d9d9d9] rounded-md w-full aspect-[16/11] overflow-hidden">
          {/* <img src="/topsales/left-1.jpg" className="w-full h-full object-cover" alt="" /> */}
        </div>
        <div className="bg-[#d9d9d9] rounded-md w-full aspect-[16/11] overflow-hidden">
          {/* <img src="/topsales/left-2.jpg" className="w-full h-full object-cover" alt="" /> */}
        </div>
      </div>

      {/* Cột phải: tiêu đề lớn + 1 ảnh to */}
      <div className="space-y-10">
        <h2 className="text-[#0f0f0f] font-extrabold uppercase leading-tight
                       text-[32px] md:text-[46px] lg:text-[56px]">
          Top ngành hàng
          <br /> bán chạy nhất tại
          <br /> Pet Shop
        </h2>

        <div className="bg-[#d9d9d9] rounded-md w-full aspect-[16/10] overflow-hidden">
          {/* <img src="/topsales/right-1.jpg" className="w-full h-full object-cover" alt="" /> */}
        </div>
      </div>
    </div>
  </div>
</section>
{/* DỊCH VỤ TUYỆT VỜI TẠI PET SHOP */}
<section className="w-full bg-[#f6f8f2]">
  <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Cột trái: Tiêu đề */}
      <div className="flex items-center">
        <h2 className="text-[#0f0f0f] font-extrabold leading-tight
                       text-[32px] md:text-[42px] lg:text-[52px]">
          Dịch vụ tuyệt vời
          <br /> tại PET SHOP
        </h2>
      </div>

      {/* Cột phải: 1 ảnh to */}
      <div className="bg-[#d9d9d9] rounded-md w-full aspect-[16/9] overflow-hidden">
        {/* <img src="/services/service-1.jpg" className="w-full h-full object-cover" alt="Dịch vụ 1"/> */}
      </div>
    </div>

    {/* 2 box dịch vụ dưới */}
    <div className="mt-10 grid md:grid-cols-2 gap-10">
      <div className="bg-[#d9d9d9] rounded-md w-full aspect-[16/9] overflow-hidden">
        {/* <img src="/services/service-2.jpg" className="w-full h-full object-cover" alt="Dịch vụ 2"/> */}
      </div>
      <div className="bg-[#d9d9d9] rounded-md w-full aspect-[16/9] overflow-hidden">
        {/* <img src="/services/service-3.jpg" className="w-full h-full object-cover" alt="Dịch vụ 3"/> */}
      </div>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="relative w-full bg-[#f7df8a] text-[#111]">
  <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-10">
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Cột trái: Logo + thông tin */}
      <div className="space-y-4">
        <a href="/">
          <img
            src="/logo-petshop.png" // 👉 thay bằng logo của bạn
            alt="Pet Shop Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        <p className="font-bold">
          PET SHOP - CỬA HÀNG CHO THÚ CƯNG TỪ 20XX
        </p>
        <p>
          Địa chỉ: [Nhập địa chỉ cửa hàng của bạn]
          <br />
          Điện thoại: [SĐT 1] | [SĐT 2]
        </p>
        <p>Email: [email của bạn]</p>
        <p>Zalo Official: [Tên Zalo Shop]</p>
      </div>
    </div>

    {/* Bản quyền */}
    <div className="pt-6 text-sm text-gray-700 text-center border-t border-black/20 mt-8">
      - Bản quyền website thuộc về PET SHOP -
    </div>

    {/* ICON MẠNG XÃ HỘI (cố định ở góc phải) */}
    <div className="absolute bottom-6 right-6 flex flex-col items-center gap-4">
      <a href="https://facebook.com" target="_blank">
        <img
          src="/facebook.png"
          alt="Facebook"
          className="h-12 w-12 object-contain"
        />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img
          src="/instagram.png"
          alt="Instagram"
          className="h-12 w-12 object-contain"
        />
      </a>
      <a href="https://zalo.me" target="_blank">
        <img
          src="/zalo.png"
          alt="Zalo"
          className="h-12 w-12 object-contain"
        />
      </a>
    </div>
  </div>
</footer>




    </div>
  );
}
