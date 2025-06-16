const wrapper = document.querySelector('.wrapper'),
qrInput=wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img'),
 downloadBtn = document.querySelector('.download-btn');

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerHTML="Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generating QR Code..."
        downloadBtn.href = qrImg.src; 
    })
})
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active")
    }
})