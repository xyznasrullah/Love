const welcomeBtn = document.getElementById('welcomeBtn');
const mainContainer = document.getElementById('mainContainer');
const loveStage = document.getElementById('loveStage');

const textArray = [
    'I Love You Mohona', 
    'Marzia Mohona', 
    'Juthika Jikra Zarin', 
    'My Lovee', 
    'I wanna be yours🤍', 
    'I Love You Jann',
    '❤️', '💖', '💍', '✨'
];

welcomeBtn.addEventListener('click', () => {
    mainContainer.style.transition = '2s';
    mainContainer.style.opacity = '0';
    setTimeout(() => {
        mainContainer.style.display = 'none';
        startGorgeousRain();
    }, 1500);
});

function createFallingItem() {
    const item = document.createElement('div');
    item.className = 'falling-item';
    item.innerText = textArray[Math.floor(Math.random() * textArray.length)];
    
    // র্যান্ডম সেটিংস
    const startX = Math.random() * 100;
    const duration = Math.random() * 5 + 4; // ৪ থেকে ৯ সেকেন্ড
    const fontSize = Math.random() * 1.5 + 1; // বড় ছোট মিক্স
    
    item.style.left = startX + 'vw';
    item.style.fontSize = fontSize + 'rem';
    item.style.animationDuration = duration + 's';
    item.style.opacity = Math.random();
    
    loveStage.appendChild(item);

    // এনিমেশন শেষ হলে ডিলিট
    setTimeout(() => { item.remove(); }, duration * 1000);
}

function startGorgeousRain() {
    // প্রতি ২০০ মিলিসেকেন্ডে একটি করে টেক্সট পড়বে
    setInterval(createFallingItem, 250);
}
