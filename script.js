const welcomeBtn = document.getElementById('welcomeBtn');
const mainContainer = document.getElementById('mainContainer');
const loveStage = document.getElementById('loveStage');

// তোমার দেওয়া লাইনসহ আরও রোমান্টিক লাইন যোগ করা হয়েছে
const textArray = [
    'I Love You Mohona', 
    'Marzia Mohona', 
    'Juthika Jikra Zarin', 
    'My Lovee', 
    'I wanna be yours🤍', 
    'I Love You Jann',
    'You are my everything',
    'Always yours',
    'MohoNasrullah❤️',
    'My Queen 👑',
    'I need you forever',
    'Stay with me',
    '❤️', '💖', '✨'
];

welcomeBtn.addEventListener('click', () => {
    mainContainer.style.transition = '1s';
    mainContainer.style.opacity = '0';
    setTimeout(() => {
        mainContainer.style.display = 'none';
        setInterval(createFallingItem, 300); // রেইন শুরু
    }, 1000);
});

function createFallingItem() {
    const item = document.createElement('div');
    item.className = 'falling-item';
    item.innerText = textArray[Math.floor(Math.random() * textArray.length)];
    
    const startX = Math.random() * 90; // ডানে বামে পজিশন
    const duration = Math.random() * 4 + 4; // পড়ার গতি
    
    item.style.left = startX + 'vw';
    item.style.fontSize = '1.4rem'; // মিডিয়াম মোটা ফন্ট সাইজ
    item.style.animationDuration = duration + 's';
    
    loveStage.appendChild(item);

    setTimeout(() => { item.remove(); }, duration * 1000);
}
