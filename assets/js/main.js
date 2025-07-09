$(document).ready(function () {
  // Xử lý toggle responsive
  // Khi bắt đầu mở
  $("#navbarNav").on("show.bs.collapse", function () {
    $(this).removeClass("fade-in-menu").addClass("opacity-0");
  });

  // Khi mở xong: hiện chữ
  $("#navbarNav").on("shown.bs.collapse", function () {
    $(this).addClass("bg-white-menu fade-in-menu").removeClass("opacity-0");
  });

  // Khi bắt đầu đóng: ẩn chữ ngay
  $("#navbarNav").on("hide.bs.collapse", function () {
    const $this = $(this);
    $this.removeClass("fade-in-menu");

    // Delay 300ms rồi mới xóa nền
    setTimeout(function () {
      $this.removeClass("bg-white-menu");
    }, 300); // đúng bằng transition opacity
  });

  // grid menu
  // Dữ liệu mẫu cho menu
  const menuData = {
    cafe: [
      {
        name: "Cafe Đen",
        price: "25.000₫",
        img: "./assets/image/banner.jpg",
      },
      {
        name: "Cafe Sữa",
        price: "28.000₫",
        img: "./assets/image/banner.jpg",
      },
      {
        name: "Bạc Xỉu",
        price: "30.000₫",
        img: "./assets/image/banner.jpg",
      },
      {
        name: "Cafe Đen",
        price: "25.000₫",
        img: "./assets/image/banner.jpg",
      },
      {
        name: "Cafe Sữa",
        price: "28.000₫",
        img: "./assets/image/banner.jpg",
      },
      {
        name: "Bạc Xỉu",
        price: "30.000₫",
        img: "./assets/image/banner.jpg",
      },
      {
        name: "Cafe Đen",
        price: "25.000₫",
        img: "././assets/image/banner.jpg",
      },
      {
        name: "Cafe Sữa",
        price: "28.000₫",
        img: "./assets/image/banner.jpg",
      },
    ],
    "tra-trai-cay": [
      {
        name: "Trà Vải",
        price: "40.000₫",
        img: "./assets/image/menu_tea_1.png",
      },
      {
        name: "Trà Cam Đào",
        price: "45.000₫",
        img: "./assets/image/menu_tea_2.png",
      },
      {
        name: "Trà Táo",
        price: "35.000₫",
        img: "./assets/image/menu_tea_3.png",
      },
    ],
    "matcha-latte": [
      {
        name: "Matcha Latte",
        price: "42.000₫",
        img: "./assets/image/menu_matcha_1.png",
      },
      {
        name: "Matcha Đá Xay",
        price: "45.000₫",
        img: "./assets/image/menu_matcha_2.png",
      },
    ],
    "sua-chua": [
      {
        name: "Sữa Chua Đánh Đá",
        price: "32.000₫",
        img: "./assets/image/menu_suachua_1.png",
      },
      {
        name: "Sữa Chua Trái Cây",
        price: "38.000₫",
        img: "./assets/image/menu_suachua_2.png",
      },
    ],
    "nuoc-ep": [
      {
        name: "Nước Ép Cam",
        price: "35.000₫",
        img: "./assets/image/menu_ep_1.png",
      },
      {
        name: "Nước Ép Dứa",
        price: "32.000₫",
        img: "./assets/image/menu_ep_2.png",
      },
    ],
    "sinh-to": [
      {
        name: "Sinh Tố Bơ",
        price: "40.000₫",
        img: "./assets/image/menu_sinhto_1.png",
      },
      {
        name: "Sinh Tố Dâu",
        price: "40.000₫",
        img: "./assets/image/menu_sinhto_2.png",
      },
    ],
    "nuoc-ngot": [
      {
        name: "Coca Cola",
        price: "20.000₫",
        img: "./assets/image/menu_ngot_1.png",
      },
      {
        name: "Sprite",
        price: "20.000₫",
        img: "./assets/image/menu_ngot_2.png",
      },
    ],
  };
  function renderMenu(category) {
    const grid = $("#menu-grid");
    grid.empty();
    const items = menuData[category] || [];
    if (items.length === 0) {
      grid.append('<div class="col-12 text-center">Chưa có sản phẩm.</div>');
      return;
    }
    items.forEach((item) => {
      grid.append(`
            <div class="col-6 col-md-4 col-lg-3 mb-4">
              <div class="menu-item text-center p-3 h-100">
                <div class="menu-img mb-3"><img src="${item.img}" alt="${item.name}" class="img-fluid" style="max-height:180px;object-fit:contain;"></div>
                <div class="menu-name fw-bold mb-1">${item.name}</div>
                <div class="menu-price">Giá: <b>${item.price}</b></div>
              </div>
            </div>
          `);
    });
  }
  $(function () {
    renderMenu("cafe");
    $(".menu-tab").click(function () {
      $(".menu-tab").removeClass("active");
      $(this).addClass("active");
      const cat = $(this).data("category");
      renderMenu(cat);
    });
  });
});
