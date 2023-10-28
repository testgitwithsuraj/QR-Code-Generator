const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQRCode();
});

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorLight: "#fff",
        colorDark: '#000',
    });
}
