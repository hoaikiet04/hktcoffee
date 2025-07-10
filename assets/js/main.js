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
        price: "20.000₫",
        img: "./assets/image/cafe.png",
      },
      {
        name: "Cafe Sữa",
        price: "22.000₫",
        img: "./assets/image/cafe_sua.png",
      },
      {
        name: "Bạc Xỉu",
        price: "27.000₫",
        img: "./assets/image/bacxiu.png",
      },
      {
        name: "Cafe Muối",
        price: "27.000₫",
        img: "./assets/image/cafe_muoi.png",
      },
      {
        name: "Cacao Sữa",
        price: "27.000₫",
        img: "./assets/image/caocao.png",
      },
      {
        name: "Phindi Hạnh Nhân",
        price: "32.000₫",
        img: "./assets/image/phindi.png",
      },
      {
        name: "Cappuchino",
        price: "32.000₫",
        img: "./assets/image/cappuchino.png",
      },
    ],
    "tra-trai-cay": [
      {
        name: "Trà Đào Cam Xả",
        price: "32.000₫",
        img: "./assets/image/tradao.png",
      },
      {
        name: "Trà Vải Lài",
        price: "32.000₫",
        img: "./assets/image/travai.png",
      },
      {
        name: "Trà Ổi Hồng Ngọc Trai",
        price: "32.000₫",
        img: "./assets/image/traoi.png",
      },
      {
        name: "Trà Olong Sen Nhãn",
        price: "32.000₫",
        img: "./assets/image/tranhan.png",
      },
      {
        name: "Trà Dứa Đác Rim",
        price: "32.000₫",
        img: "./assets/image/tradua.png",
      },
      {
        name: "Trà Olong Dứa Chanh Dây",
        price: "32.000₫",
        img: "./assets/image/trachanhday.png",
      },
    ],
    "matcha-latte": [
      {
        name: "Matcha Latte",
        price: "30.000₫",
        img: "./assets/image/matcha.png",
      },
      {
        name: "Matcha Latte Sữa Gấu",
        price: "35.000₫",
        img: "./assets/image/matchagau.png",
      },
    ],
    "sua-chua": [
      {
        name: "Sữa Chua Đá",
        price: "27.000₫",
        img: "./assets/image/suachuada.png",
      },
      {
        name: "Sữa Chua Dâu",
        price: "32.000₫",
        img: "./assets/image/suachuadau.png",
      },
      {
        name: "Sữa Chua Việt Quất",
        price: "32.000₫",
        img: "./assets/image/suachuavietquoc.png",
      },
    ],
    "nuoc-ep": [
      {
        name: "Cam Ép",
        price: "30.000₫",
        img: "./assets/image/camep.png",
      },
      {
        name: "Thơm Ép",
        price: "30.000₫",
        img: "./assets/image/thomep.png",
      },
      {
        name: "Ổi Ép",
        price: "30.000₫",
        img: "./assets/image/oiep.png",
      },
      {
        name: "Dưa Hấu",
        price: "30.000₫",
        img: "./assets/image/duahauep.png",
      },
      {
        name: "Cà Rốt",
        price: "30.000₫",
        img: "./assets/image/carotep.png",
      },
      {
        name: "Táo Ép",
        price: "30.000₫",
        img: "./assets/image/eptao.png",
      },
      {
        name: "Dừa Trái",
        price: "23.000₫",
        img: "./assets/image/epdua.png",
      },
      {
        name: "Dừa Tắc",
        price: "25.000₫",
        img: "./assets/image/duatac.png",
      },
    ],
    "sinh-to": [
      {
        name: "Sinh Tố Bơ",
        price: "32.000₫",
        img: "./assets/image/bo.png",
      },
      {
        name: "Sinh Tố Dâu",
        price: "32.000₫",
        img: "./assets/image/dau.png",
      },
      {
        name: "Sinh Tố Dừa",
        price: "32.000₫",
        img: "./assets/image/sap.png",
      },
      {
        name: "Sinh Tố Sapoche",
        price: "32.000₫",
        img: "./assets/image/sapoche.png",
      },
      {
        name: "Sinh Tố Mãng Cầu",
        price: "32.000₫",
        img: "./assets/image/mangcau.png",
      },
    ],
    "nuoc-ngot": [
      {
        name: "Sting",
        price: "16.000₫",
        img: "./assets/image/sting.png",
      },
      {
        name: "Coca Cola",
        price: "16.000₫",
        img: "./assets/image/coca.png",
      },
      {
        name: "7up",
        price: "16.000₫",
        img: "./assets/image/7up.png",
      },
      {
        name: "Redbull",
        price: "16.000₫",
        img: "./assets/image/redbull.png",
      },
      {
        name: "Trà Xanh",
        price: "16.000₫",
        img: "./assets/image/traxanh.png",
      },
      {
        name: "Olong",
        price: "16.000₫",
        img: "./assets/image/olong.png",
      },
      {
        name: "Nước suối",
        price: "16.000₫",
        img: "./assets/image/suoi.png",
      },
    ],
  };
  function renderMenu(category) {
    const grid = $("#menu-grid");
    grid
      .empty()
      .removeClass()
      .addClass("row menu-grid d-flex justify-content-center flex-wrap");
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
