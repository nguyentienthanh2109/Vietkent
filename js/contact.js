emailjs.init({
  publicKey: "JkH2xl4-F3yBwJFp8",
});

const form = document.getElementById("contactForm");
const btn = document.getElementById("btnSend");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    Swal.fire({
      icon: "warning",
      title: "Thiếu thông tin",
      text: "Vui lòng nhập họ và tên.",
    });
    return;
  }

  if (email === "") {
    Swal.fire({
      icon: "error",
      title: "Email không hợp lệ",
      text: "Vui lòng nhập email.",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Email không hợp lệ",
      text: "Vui lòng nhập đúng định dạng email.",
    });
    return;
  }

  if (phone === "") {
    Swal.fire({
      icon: "error",
      title: "Số điện thoại không hợp lệ",
      text: "Vui lòng nhập số điện thoại.",
    });
    return;
  }

  const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

  if (!phoneRegex.test(phone)) {
    Swal.fire({
      icon: "error",
      title: "Số điện thoại không hợp lệ",
      text: "Vui lòng kiểm tra lại số điện thoại.",
    });
    return;
  }

  if (title === "") {
    Swal.fire({
      icon: "error",
      title: "Tiêu đề trống",
      text: "Vui lòng nhập tiêu đề.",
    });
    return;
  }

  if (message === "") {
    Swal.fire({
      icon: "error",
      title: "Nội dung trống",
      text: "Vui lòng nhập nội dung",
    });
    return;
  }

  btn.disabled = true;

  Swal.fire({
    title: "Đang gửi...",
    text: "Vui lòng chờ trong giây lát.",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  const now = new Date();

  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    title: title,
    message: message,
    time: now.toLocaleString("vi-VN"),
  };

  emailjs
    .send("service_7p8q64q", "template_e6yaj5y", templateParams)

    .then(function () {
      Swal.fire({
        icon: "success",
        title: "Gửi thành công!",
        text: "VietKent đã nhận được yêu cầu của bạn và sẽ phản hồi trong thời gian sớm nhất.",
        confirmButtonText: "Đóng",
        confirmButtonColor: "#0d6efd",
      });

      form.reset();

      btn.disabled = false;
      btn.innerHTML = "GỬI LIÊN HỆ";
    })

    .catch(function (error) {
      Swal.close();

      Swal.fire({
        icon: "error",
        title: "Gửi thất bại",
        text: "Không thể gửi yêu cầu. Vui lòng thử lại.",
        confirmButtonColor: "#dc3545",
      });

      btn.disabled = false;
      btn.innerHTML = "GỬI LIÊN HỆ";

      console.log(error);
    });
});
