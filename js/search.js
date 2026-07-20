const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.classList.add("show-search");
  } else {
    header.classList.remove("show-search");
  }
});
const searchInput = document.querySelector(".header-search input");
const searchBtn = document.querySelector(".header-search button");

const pages = [
  {
    keyword: ["hosting", "host"],
    url: "dichvu/hosting.html",
  },
  {
    keyword: ["cloud", "vps", "cloud vps"],
    url: "dichvu/cloudvps.html",
  },
  {
    keyword: ["email", "email doanh nghiệp"],
    url: "dichvu/emaildoanhnghiep.html",
  },
  {
    keyword: ["website", "web", "thiết kế web", "thiết kế website"],
    url: "dichvu/thietkeweb.html",
  },
  {
    keyword: ["bảo trì", "máy tính", "bảo trì máy tính"],
    url: "dichvu/baotrimaytinh.html",
  },
  {
    keyword: ["thiết bị", "văn phòng", "máy in"],
    url: "dichvu/thietbivanphong.html",
  },
  {
    keyword: ["giới thiệu"],
    url: "gioithieu.html",
  },
  {
    keyword: ["dịch vụ"],
    url: "dichvu.html",
  },
  {
    keyword: ["tin tức"],
    url: "tintuc.html",
  },
  {
    keyword: ["liên hệ"],
    url: "lienhe.html",
  },
];

function searchWebsite() {
  let keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    alert("Vui lòng nhập từ khóa.");

    return;
  }

  for (let page of pages) {
    for (let key of page.keyword) {
      if (keyword.includes(key)) {
        window.location.href = page.url;

        return;
      }
    }
  }

  alert("Không tìm thấy kết quả phù hợp.");
}

searchBtn.addEventListener("click", searchWebsite);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchWebsite();
  }
});
