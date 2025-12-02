// --- 1. Canvas Logo Animation (Heart Edition) ---

const canvas = document.getElementById('kkuLogoCanvas');
const ctx = canvas.getContext('2d');
let rotation = 0;
let pulse = 0; // ตัวแปรสำหรับควบคุมการเต้น

function drawHeart(ctx, rotation, scale) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);

    // Heart drawing starts here (using a parametric equation approach)
    ctx.beginPath();
    
    // Scale factor is now dynamic, controlled by 'scale' (pulsing)
    const dynamicScale = 50 * scale; 
    
    // Move to the starting point (bottom tip)
    ctx.moveTo(0, dynamicScale * 1.5);

    // Draw the heart shape
    for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        // Parametric equations for a standard heart shape
        const x = dynamicScale * (16 * Math.pow(Math.sin(t), 3)) / 20;
        const y = -dynamicScale * (
            13 * Math.cos(t) - 
            5 * Math.cos(2 * t) - 
            2 * Math.cos(3 * t) - 
            Math.cos(4 * t)
        ) / 20;
        
        ctx.lineTo(x, y);
    }
    
    ctx.closePath();
    ctx.fillStyle = '#cdebf3ff'; // Pink/Red color for the heart
    ctx.fill();

    ctx.restore();
}


function drawLogo(ctx, rotation) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 60;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Outer Circle (KKU Green)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd4e8ff'; // KKU Green
    ctx.fill();
    ctx.closePath();
    
    // 2. Heart Shape (Animated)
    const scaleFactor = 1 + (Math.sin(pulse) * 0.05); // Pulsing effect (1.0 to 1.05)
    drawHeart(ctx, rotation, scaleFactor); 

    // 3. Text "KKU"
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Mali'; // เพิ่มขนาดฟอนต์เล็กน้อย
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('KKU', centerX, centerY);
}

function animate() {
    rotation += 0.01; // ปรับความเร็วในการหมุนให้ช้าลง
    pulse += 0.1; // ความเร็วในการเต้น
    drawLogo(ctx, rotation);
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// --- 2. Form Success Message Handler ---
// (โค้ดส่วนนี้ยังคงเดิม)
document.addEventListener('DOMContentLoaded', () => {
    // Check if the URL has a success parameter (from Web3Forms redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success message and hide the form
        document.getElementById('suggest').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';

        // Optionally clear the success param from URL after a short delay
        setTimeout(() => {
            history.replaceState(null, null, window.location.pathname);
        }, 5000);
    }
});