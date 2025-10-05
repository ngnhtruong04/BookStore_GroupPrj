document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const alertBox = document.getElementById("alertBox");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        function showAlert(msg, field) {
            event.preventDefault();
            alertBox.textContent = msg;
            alertBox.classList.remove("d-none");
            alertBox.classList.add("alert-danger");
            field.focus();
        }

        if (name.value.trim() === "") return showAlert("Vui lòng nhập họ và tên.", name);
        if (email.value.trim() === "") return showAlert("Vui lòng nhập email.", email);
        if (phone.value.trim() === "") return showAlert("Vui lòng nhập số điện thoại.", phone);
        if (message.value.trim() === "") return showAlert("Vui lòng nhập nội dung liên hệ.", message);

        alertBox.classList.add("d-none"); // ẩn cảnh báo
        // KHÔNG gọi event.preventDefault() ở đây, để form gửi thật
    });
});
