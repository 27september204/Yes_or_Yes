document.addEventListener("DOMContentLoaded", function() {
    const namePopup = document.getElementById("namePopup");
    const popup = document.getElementById("popup");
    const startBtn = document.getElementById("startBtn");
    const playerNameInput = document.getElementById("playerName");
    const agreeBtn = document.getElementById("agreeBtn");
    const declineBtn = document.getElementById("declineBtn");
    const playerNameDisplay = document.getElementById("playerNameDisplay");

    // Hiển thị cửa sổ nhập tên người chơi
    namePopup.style.display = "block";

    // Xử lý sự kiện khi bấm bắt đầu (nhập tên)
    startBtn.addEventListener("click", function() {
        const playerName = playerNameInput.value.trim();
        
        // Kiểm tra nếu tên không trống
        if (playerName) {
            // Lưu tên vào localStorage
            localStorage.setItem("playerName", playerName);

            // Hiển thị tên người chơi trong cửa sổ nổi
            playerNameDisplay.textContent = playerName;

            // Ẩn cửa sổ nhập tên và hiển thị cửa sổ thông báo
            namePopup.style.display = "none";
            popup.style.display = "block";
        } else {
            alert("Vui lòng nhập tên người chơi!");
        }
    });

    // Hàm xử lý sự kiện khi bấm Đồng ý
    agreeBtn.addEventListener("click", function() {
        // Hiển thị dòng chúc mừng trong giao diện
        const congratMessage = document.createElement("div");
        congratMessage.textContent = "Chúc mừng bạn đã có được tôi!";
        congratMessage.style.position = "fixed";
        congratMessage.style.top = "50%";
        congratMessage.style.left = "50%";
        congratMessage.style.transform = "translate(-50%, -50%)";
        congratMessage.style.fontSize = "24px";
        congratMessage.style.fontWeight = "bold";
        congratMessage.style.color = "#ff6347"; // Màu sắc đẹp cho chữ
        congratMessage.style.padding = "20px";
        congratMessage.style.backgroundColor = "#fff";
        congratMessage.style.borderRadius = "8px";
        congratMessage.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        document.body.appendChild(congratMessage);

        // Đợi 5 giây trước khi mở liên kết
        setTimeout(function() {
            window.location.href = "https://www.facebook.com/djpbeat2k4"; // Mở liên kết sau 5 giây
        }, 5000); // 5000 milliseconds = 5 seconds

        popup.style.display = "none"; // Đóng cửa sổ sau khi đồng ý
    });

    // Hàm xử lý sự kiện khi bấm Từ chối
    declineBtn.addEventListener("click", function() {
        // Lấy kích thước màn hình và cửa sổ hiện tại
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Lấy kích thước của cửa sổ nổi
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;

        // Tính toán vị trí mới của cửa sổ sao cho nó không ra ngoài màn hình
        const newX = Math.random() * (screenWidth - popupWidth);
        const newY = Math.random() * (screenHeight - popupHeight);

        // Áp dụng vị trí mới cho cửa sổ
        popup.style.left = newX + "px";
        popup.style.top = newY + "px";
    });
});
