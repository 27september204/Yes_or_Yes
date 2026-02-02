const API_URL = "https://script.google.com/macros/s/AKfycbxbjV-BRXO0-__Gkf8YaD6I83ZEmQIf0x5wpZNMUMpCQsH-cJmt3H7GeuVD61oBwFqPjQ/exec";

function sendData(name, action) {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      action: action
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Saved:", data);
  })
  .catch(err => console.error(err));
}

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

    // Xử lý sự kiện khi bấm bắt đầu
    startBtn.addEventListener("click", function() {
        const playerName = playerNameInput.value.trim();

        if (playerName) {
            localStorage.setItem("playerName", playerName);
            playerNameDisplay.textContent = playerName;

            namePopup.style.display = "none";
            popup.style.display = "block";
        } else {
            alert("nhập tên của bạn!");
        }
    });

    // Khi bấm ĐỒNG Ý
    agreeBtn.addEventListener("click", function() {
        const playerName = localStorage.getItem("playerName") || "Không tên";

        // GỬI DỮ LIỆU LÊN GOOGLE SHEETS
        sendData(playerName, "Đồng ý");

        const congratMessage = document.createElement("div");
        congratMessage.textContent = "Vậy Giờ Mình Là Người Yêu Rồi Nhé :)) Nhắn Tin Đi";
        congratMessage.style.position = "fixed";
        congratMessage.style.top = "50%";
        congratMessage.style.left = "50%";
        congratMessage.style.transform = "translate(-50%, -50%)";
        congratMessage.style.fontSize = "24px";
        congratMessage.style.fontWeight = "bold";
        congratMessage.style.color = "#ff6347";
        congratMessage.style.padding = "20px";
        congratMessage.style.backgroundColor = "#fff";
        congratMessage.style.borderRadius = "8px";
        congratMessage.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        document.body.appendChild(congratMessage);

        setTimeout(function() {
            window.location.href = "https://www.facebook.com/djpbeat2k4";
        }, 3000);

        popup.style.display = "none";
    });

    // Khi bấm TỪ CHỐI
    declineBtn.addEventListener("click", function() {
        const playerName = localStorage.getItem("playerName") || "Không tên";

        // GỬI DỮ LIỆU LÊN GOOGLE SHEETS
        sendData(playerName, "Từ chối");

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;

        const newX = Math.random() * (screenWidth - popupWidth);
        const newY = Math.random() * (screenHeight - popupHeight);

        popup.style.left = newX + "px";
        popup.style.top = newY + "px";
    });
});
