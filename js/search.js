// Danh sách sách
const books = [
  // --- sản phẩm mới ---
  {
    title: "Rắc Rối Đáng Yêu - Love Com - Tập 3",
    img: "images/racroidangyeu.jpg",
    link: "racroidangyeu.html",
    price: "47.500đ",
    oldPrice: "50.000đ",
    discount: "-5%",
  },
  {
    title: "My Little Pony - Bộ Sưu Tập Đề Can Lấp Lánh - Tập 1 (Tái Bản 2025)",
    img: "images/mylittlepony.jpg",
    link: "mylittlepony.html",
    price: "40.500đ",
    oldPrice: "45.000đ",
    discount: "-10%",
  },
  {
    title:
      "Dạy Con Kĩ Năng Tự Bảo Vệ Bản Thân - Giúp Con An Toàn Mọi Lúc, Mọi Nơi",
    img: "images/tubaovebanthan.jpg",
    link: "tubaovebanthan.html",
    price: "45.000đ",
    oldPrice: "50.000đ",
    discount: "-10%",
  },
  {
    title: "Sổ Tô Màu - Dù Bạn Ở Đâu, Hạnh Phúc Ở Đó",
    img: "images/dubanodau.jpg",
    link: "dubanodau.html",
    price: "89.100đ",
    oldPrice: "99.000đ",
    discount: "-10%",
  },
  {
    title: "What You Are Looking For Is In The Library",
    img: "images/whatyouarelookingfor.jpg",
    link: "whatyouarelookingfor.html",
    price: "324.000đ",
  },
  {
    title:
      "Tủ Sách Thế Giới Động Vật - Giác Quan Và Giao Tiếp (Hình Minh Họa 3D)",
    img: "images/giacquan.jpg",
    link: "giacquan.html",
    price: "99.000đ",
    oldPrice: "110.000đ",
    discount: "-10%",
  },
  {
    title: "Tư Duy Tích Cực Để Thành Công",
    img: "images/tuduytichcucdethanhcong.jpg",
    link: "tuduytichcucdethanhcong.html",
    price: "15.000đ",
    oldPrice: "35.000đ",
    discount: "-55%",
  },
  {
    title:
      "Phương pháp giáo dục con của người do thái-- Giúp Trẻ Tự Tin Bước Vào Cuộc Sống",
    img: "images/ppgdcuanguoidothai.jpg",
    link: "dothai.html",
    price: "191.400đ",
    oldPrice: "319.000đ",
    discount: "-40%",
  },
  {
    title: "Hộp Những Câu Chuyện Phiêu Lưu Kỳ Thú 2",
    img: "images/phieuluukythu.jpg",
    link: "phieuluu.html",
    price: "419.400đ",
    oldPrice: "699.000đ",
    discount: "-40%",
  },
  {
    title: "Thay Đổi Câu Hỏi Thay Đổi Cuộc Đời-Tư duy bằng cách đặt câu hỏi",
    img: "images/thaydoicuocdoi.jpg",
    link: "cauhoi.html",
    price: "95.000đ",
    oldPrice: "110.000đ",
    discount: "-55%",
  },

  // --- ngôn tình ---
  {
    title: "Siêu cấp cưng chiều - Tập 1",
    img: "images/sieucapcungchieu.png",
    link: "sieucapcungchieu.html",
    price: "151.000đ",
    oldPrice: "189.000đ",
    discount: "-5%",
  },
  {
    title: "Anh Đến Cùng Ánh Sao Trời - Tập 1",
    img: "images/anhsao.png",
    link: "anhdencunganhsaotroi.html",
    price: "159.000đ",
    oldPrice: "199.000đ",
    discount: "-5%",
  },
  {
    title: "Mượn em một lần yêu",
    img: "images/muonem.png",
    link: "muonemmotlanyeu.html",
    price: "122.000đ",
    oldPrice: "129.000đ",
    discount: "-5%",
  },
  {
    title: "Trăm Năm Gắn Bó, Một Lời Hẹn Ước - Tập 1",
    img: "images/tramnamganbo.png",
    link: "tramnamganbo-1loihenuoc.html",
    price: "119.000đ",
    oldPrice: "140.000đ",
    discount: "-5%",
  },
  {
    title: "Ương Ngạnh - Tập 2",
    img: "images/uongnganh.png",
    link: "uongnganh.html",
    price: "159.000đ",
    oldPrice: "199.000đ",
    discount: "-5%",
  },
  // thơ-tản văn
  {
    title: "Hai Vạn Dặm Dưới Biển (Tái Bản 2024)",
    img: "images/haivandamduoibien.png",
    link: "haivandamduoibien.html",
    price: "69.000đ",
    oldPrice: "99.000đ",
    discount: "-5%",
  },
  {
    title: "Hồ Điệp Và Kình Ngư",
    img: "images/hodiepkinhngu.png",
    link: "hodiepkinhngu.html",
    price: "116.000đ",
    oldPrice: "155.000đ",
    discount: "-5%",
  },
  {
    title: "Người Bà Tài Giỏi Vùng Saga",
    img: "images/nguoibataigioi.png",
    link: "nguoibataigioi.html",
    price: "102.000đ",
    oldPrice: "128.000đ",
    discount: "-5%",
  },
  {
    title: "Lũ Trẻ Đường Tàu",
    img: "images/lutreduongtau.png",
    link: "lutreduongtau.html",
    price: "76.000đ",
    oldPrice: "109.000đ",
    discount: "-5%",
  },
  {
    title: "Muôn Trùng Xứ Sở",
    img: "images/muontrungxuso.png",
    link: "muontrungxuso.html",
    price: "103.000đ",
    oldPrice: "129.000đ",
    discount: "-5%",
  },
  // khoa học
  {
    title:
      "AI lắng nghe tôi trải lòng - Cuộc đối thoại giữa cảm xúc và công nghệ",
    img: "images/ailangnghetoitrailong.png",
    link: "ailangnghetoitrailong.html",
    price: "69.000đ",
    oldPrice: "99.000đ",
    discount: "-5%",
  },
  {
    title: "Các thế giới song song",
    img: "images/tgsongsong.png",
    link: "tgsongsong.html",
    price: "168.000đ",
    oldPrice: "210.000đ",
    discount: "-20%",
  },
  {
    title: "Di truyền học - Khám phá mã nguồn sự sống",
    img: "images/ditruyenhoc.png",
    link: "ditruyenhoc.html",
    price: "150.000đ",
    oldPrice: "180.000đ",
    discount: "-17%",
  },
  {
    title: "Tâm Lý Học Tiến Hoá",
    img: "images/tamlyhoakhoahoc.png",
    link: "tamlyhoakhoahoc.html",
    price: "189.000đ",
    oldPrice: "250.000đ",
    discount: "-24%",
  },
  {
    title: "Trí tuệ nhân tạo: Một cách tiếp cận hiện đại",
    img: "images/trituenhantao.png",
    link: "trituenhantao.html",
    price: "250.000đ",
    oldPrice: "320.000đ",
    discount: "-22%",
  },
  //trinh thám
  {
    title: "Ác quỷ khoác áo blouse",
    img: "images/acquykhoacaoblouse.png",
    link: "acquykhoacaoblouse.html",
    price: "119.000đ",
    oldPrice: "150.000đ",
    discount: "-21%",
  },
  {
    title: "Cảnh sát trưởng",
    img: "images/canhsattruong.png",
    link: "canhsattruong.html",
    price: "120.000đ",
    oldPrice: "160.000đ",
    discount: "-25%",
  },
  {
    title: "Mộ Khâu Tử - Tập 1",
    img: "images/mokhautu.png",
    link: "mokhautu.html",
    price: "135.000đ",
    oldPrice: "180.000đ",
    discount: "-25%",
  },
  {
    title: "Cầu cơ",
    img: "images/cauco.png",
    link: "cauco.html",
    price: "99.000đ",
    oldPrice: "130.000đ",
    discount: "-24%",
  },
  {
    title: "Trăng Máu",
    img: "images/trangmau.png",
    link: "trangmau.html",
    price: "179.000đ",
    oldPrice: "230.000đ",
    discount: "-22%",
  },
  //tiểu thuyết
  {
    title: "Bảy ngày phiêu lãng",
    img: "images/bay-ngay-phieu-lang.png",
    link: "bayngayphieulang.html",
    price: "110.000đ",
    oldPrice: "145.000đ",
    discount: "-24%",
  },
  {
    title: "Bông hồng trên ngọn đồi xanh",
    img: "images/bong-hong-tren-ngon-doi-xanh.png",
    link: "bonghongtrenngondoixanh.html",
    price: "98.000đ",
    oldPrice: "130.000đ",
    discount: "-25%",
  },
  {
    title: "Bước chân thiên thần",
    img: "images/buoc-chan-thien-than.png",
    link: "buocchanthienthan.html",
    price: "109.000đ",
    oldPrice: "145.000đ",
    discount: "-25%",
  },
  {
    title: "Chờ trăng lên",
    img: "images/chotranglen.png",
    link: "chotranglen.html",
    price: "105.000đ",
    oldPrice: "140.000đ",
    discount: "-25%",
  },
  {
    title: "Chuyện tình lúc nửa đêm",
    img: "images/chuyen-tinh-luc-nua-dem.png",
    link: "chuyentinhlucnuadem.html",
    price: "112.000đ",
    oldPrice: "150.000đ",
    discount: "-25%",
  },
  //tâm linh
  {
    title: "Bí Ẩn Mãi Mãi Là Bí Ẩn - Tôn Giáo Tâm Linh",
    img: "images/.png",
    link: "chuyentinhlucnuadem.html",
    price: "112.000đ",
    oldPrice: "150.000đ",
    discount: "-25%",
  },
  {
    title: "Suối Nguồn Tâm Linh",
    img: "images/suoinguontamlinh.jpg",
    link: "suoinguontamlinh.html",
    price: "131.000đ",
    oldPrice: "155.000đ",
    discount: "-15%",
  },
  {
    title: "Thức Tỉnh Tâm Linh",
    img: "images/thuctinhtamlinh.jpg",
    link: "thuctinhtamlinh.html",
    price: "135.000đ",
    oldPrice: "169.000đ",
    discount: "-20%",
  },
  {
    title: "Chiêm Tinh Học Dưới Góc Nhìn Tâm Linh",
    img: "images/chiemtinhhoc.jpg",
    link: "chiemtinhhoc.html",
    price: "240.000đ",
    oldPrice: "300.000đ",
    discount: "-20%",
  },
  {
    title: "Trí Tuệ Tâm Linh",
    img: "images/trituetamlinh.jpg",
    link: "trituetamlinh.html",
    price: "117.000đ",
    oldPrice: "138.000đ",
    discount: "-5%",
  },
  //sách thiếu nhi
  {
    title: "Búp Sen Xanh (Tái Bản 2020)",
    img: "images/bupsenxanh.jpg",
    link: "bupsenxanh.html",
    price: "64.500đ",
    oldPrice: "72.000đ",
    discount: "-10%",
  },
  {
    title: "Tuổi Thơ Dữ Dội - Tập 1 (Tái Bản 2019)",
    img: "images/tuoithodudoi.jpg",
    link: "tuoithodudoi.html",
    price: "64.000đ",
    oldPrice: "80.000đ",
    discount: "-20%",
  },
  {
    title: "Cái Tết Của Mèo Con (Tái Bản 2019)",
    img: "images/caitetcuameocon.jpg",
    link: "caitetcuameocon.html",
    price: "40.500đ",
    oldPrice: "45.000đ",
    discount: "-10%",
  },
  {
    title:
      "Những Câu Chuyện Truyền Cảm Hứng - I Will Be Better - Con Sẽ Tự Giác",
    img: "images/consetugiac.jpg",
    link: "consetugiac.html",
    price: "45.000đ",
    oldPrice: "50.000đ",
    discount: "-10%",
  },
  {
    title: "Những Truyện Hay Viết Cho Thiếu Nhi - Tô Hoài (Tái Bản 2019)",
    img: "images/tohoai.jpg",
    link: "tohoai.html",
    price: "64.000đ",
    oldPrice: "80.000đ",
    discount: "-20%",
  },
  //sức khoẻ-làm đẹp
  {
    title: "Ăn Chay Tốt Cho Sức Khỏe",
    img: "images/anchaytotchosuckhoe.jpg",
    link: "anchaytotchosuckhoe.html",
    price: "38.000đ",
    oldPrice: "45.000đ",
    discount: "-15%",
  },
  {
    title: "Bí Mật Dinh Dưỡng Cho Sức Khỏe Toàn Diện (Tái Bản 2024)",
    img: "images/bimatdinhduong.jpg",
    link: "bimatdinhduong.html",
    price: "240.000đ",
    oldPrice: "300.000đ",
    discount: "-20%",
  },
  {
    title: "Ăn Xanh Để Khỏe (Tái Bản 2022)",
    img: "images/anxanhdekhoe.jpg",
    link: "anxanhdekhoe.html",
    price: "80.500đ",
    oldPrice: "95.000đ",
    discount: "-15%",
  },
  {
    title: "Khỏe Đẹp Từ Gốc",
    img: "images/khoedeptugoc.jpg",
    link: "khoedeptugoc.html",
    price: "424.000đ",
    oldPrice: "499.000đ",
    discount: "-15%",
  },
  {
    title: "Ăn Uống Tận Hưởng, Vòng Eo Lý Tưởng",
    img: "images/anuongtanhuong.jpg",
    link: "anuongtanhuong.html",
    price: "92.000đ",
    oldPrice: "115.000đ",
    discount: "-20%",
  },
  //kinh doanh-làm giàu
  {
    title: "Bán Bạc Cắc Thu Bạc Tỷ",
    img: "images/banbaccac.jpg",
    link: "banbaccac.html",
    price: "64.500đ",
    oldPrice: "72.000đ",
    discount: "-10%",
  },
  {
    title: "Tiền Đẻ Ra Tiền - Đầu Tư Tài Chính Thông Minh (Tái Bản 2025)",
    img: "images/tien-de-ra-tien.jpg",
    link: "tien.html",
    price: "64.500đ",
    oldPrice: "72.000đ",
    discount: "-10%",
  },
  {
    title: "Khởi Nghiệp 4.0 - Từ Ý Tưởng Đến Thành Công",
    img: "images/khoinghiep4.0.jpg",
    link: "khoinghiep4.0.html",
    price: "64.500đ",
    oldPrice: "72.000đ",
    discount: "-10%",
  },
  {
    title: "Người Giàu Có Nhất Thành Babylon",
    img: "images/nguoigiauconhatthanhbabylon.jpg",
    link: "nguoigiauconhatthanhbabylon.html",
    price: "64.500đ",
    oldPrice: "72.000đ",
    discount: "-10%",
  },
  {
    title:
      "Nghệ Thuật Manifest Tiền Bạc - 15 Phương Pháp Thu Hút Sự Giàu Có, Thành Công Và Thịnh Vượng",
    img: "images/manifest.jpg",
    link: "manifest.html",
    price: "64.500đ",
    oldPrice: "72.000đ",
    discount: "-10%",
  },
  //học tập-hướng nghiệp
  {
    title: "BCây cam ngọt của tôi",
    img: "images/cay-cam-ngot-cua-toi.png",
    link: "caycamngotcuatoi.html",
    price: "86.000đ",
    oldPrice: "108.000đ",
    discount: "-20%",
  },
  {
    title: "Giao tiếp lanh lợi nói lời khôn ngoan",
    img: "images/giao-tiep-lanh-loi-khon-ngoan.jpg",
    link: "giaotieplanhloikhonngoan.html",
    price: "95.000đ",
    oldPrice: "120.000đ",
    discount: "-21%",
  },
  {
    title: "Học tập suốt đời",
    img: "images/hoc-tap-suot-doi.png",
    link: "hoctapsuotdoi.html",
    price: "115.000đ",
    oldPrice: "140.000đ",
    discount: "-18%",
  },
  {
    title: "Nghề ơi, mở ra!",
    img: "images/nghe-oi-mo-ra.png",
    link: "ngheoimora.html",
    price: "120.000đ",
    oldPrice: "150.000đ",
    discount: "-20%",
  },
  {
    title: "Nuôi dạy đứa trẻ tự chủ",
    img: "images/nuoi-day-dua-tre-tu-chu.png",
    link: "nuoidayduatretuchu.html",
    price: "132.000đ",
    oldPrice: "165.000đ",
    discount: "-20%",
  },
];
// --- PHẦN 1: autocomplete ở thanh tìm kiếm (index.html và các trang khác) ---
const input = document.getElementById("searchInput");
const resultsBox = document.getElementById("searchResults");

input.addEventListener("keyup", () => {
  const query = input.value.toLowerCase().trim();
  resultsBox.innerHTML = "";

  if (query === "") {
    resultsBox.style.display = "none";
    return;
  }

  // Tách từ khóa người dùng nhập (vd: "tư duy" -> ["tư", "duy"])
  const keywords = query.split(/\s+/).filter((word) => word.length > 0);

  // Tìm sách chứa tất cả từ khóa (không cần đúng thứ tự)
  const matchedBooks = books.filter((book) =>
    keywords.every((kw) => book.title.toLowerCase().includes(kw))
  );

  if (matchedBooks.length > 0) {
    matchedBooks.forEach(function (book) {
      var item = document.createElement("a");
      item.href = book.link;
      item.innerHTML =
        "<strong>" +
        book.title +
        "</strong><br>" +
        '<span style="color:#3366ff; font-weight:600;">' +
        book.price +
        "</span> " +
        '<span style="background:#7367f0; color:white; padding:1px 4px; border-radius:3px; font-size:12px;">' +
        book.discount +
        "</span>";
      item.style.display = "block";
      item.style.padding = "8px 12px";
      item.style.textDecoration = "none";
      item.style.color = "#333";
      item.style.borderBottom = "1px solid #eee";
      item.addEventListener("mouseover", function () {
        item.style.background = "#f2f2f2";
      });
      item.addEventListener("mouseout", function () {
        item.style.background = "white";
      });
      resultsBox.appendChild(item);
    });

    resultsBox.style.display = "block";
  } else {
    resultsBox.innerHTML =
      '<p style="padding: 8px; color: gray;">Không tìm thấy kết quả</p>';
    resultsBox.style.display = "block";
  }
});

// Ẩn khi click ra ngoài vùng tìm kiếm
document.addEventListener("click", (e) => {
  if (!e.target.closest(".searchbox")) {
    resultsBox.style.display = "none";
  }
});
// Khi người dùng nhấn Enter
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const keyword = input.value.trim();
    if (keyword !== "") {
      // Chuyển sang trang kết quả tìm kiếm
      window.location.href = `search.html?q=${encodeURIComponent(keyword)}`;
    }
  }
});
// --- PHẦN 2: hiển thị kết quả ở search.html ---
// Lấy keyword từ URL
const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase().trim() || "";

document.getElementById("keyword").textContent = query || "Không xác định";

// Tách từ khóa
const keywords = query.split(/\s+/).filter((word) => word.length > 0);

// Lọc sách phù hợp
const matched = books.filter((book) =>
  keywords.every((kw) => book.title.toLowerCase().includes(kw))
);

const container = document.getElementById("results");

if (matched.length === 0) {
  container.innerHTML = `<p>Không tìm thấy sách nào phù hợp.</p>`;
} else {
  matched.forEach((book) => {
    container.innerHTML += `
        <div class="book-card">
          <a href="${book.link}">
            <img src="${book.img}" alt="${book.title}">
            <p class="book-title">${book.title}</p>
          </a>
          <div class="book-price">
            <span class="new-price">${book.price}</span>
            <span class="discount">${book.discount}</span><br>
            <span class="old-price">${book.oldPrice}</span>
          </div>
        </div>`;
  });
}
