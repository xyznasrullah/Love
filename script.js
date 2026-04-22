const welcomeSection = document.getElementById('welcomeSection');
const loveRain = document.getElementById('loveRain');
const loveRainContainer = document.getElementById('loveRain');

// ১. পেজের যেকোনো জায়গায় ক্লিক করলে রেইন শুরু হবে
welcomeSection.addEventListener('click', () => {
    welcomeSection.style.display = 'none'; // ওয়েলকাম স্ক্রিন মুছে যাবে
    loveRain.style.display = 'block'; // রেইন সেকশন আসবে
    startLoveRain();
});

// ২. ওপর থেকে পড়া লেখাগুলো যোগ করার ফাংশন
function startLoveRain() {
    // তোমার দেওয়া সব লাইন এবং লাভ ইমোজি
    const messages = [
        "I Love You Mohona",
        "Marzia Mohona",
        "Juthika Jikra Zarin",
        "My Lovee",
        "I wanna be yours🤍",
        "I Love You Jann",
        "❤️", "💖", "💙", "💝", "❤️‍🔥", "🖤"
    ];

    // বারবার লাইনগুলো তৈরি করার জন্য লুপিং
    setInterval(() => {
        const message = messages[Math.floor(Math.random() * messages.length)];
        const fallingElement = document.createElement('div');

        // যদি ইমোজি হয়, তাহলে 'falling-heart' স্টাইল পাবে
        if (isEmoji(message)) {
            fallingElement.className = 'falling-heart';
        } else {
            fallingElement.className = 'falling-text';
        }

        fallingElement.innerText = message;
        
        // র্যান্ডম সাইজ এবং পজিশন
        const sizeRandom = Math.random() * 0.7 + 0.8;
        fallingElement.style.transform = `scale(${sizeRandom})`;
        fallingElement.style.left = Math.random() * 90 + 'vw'; // ডানে-বামে র্যান্ডম পজিশন
        fallingElement.style.animationDuration = (Math.random() * 4 + 5) + 's'; // র্যান্ডম স্পিড
        
        loveRainContainer.appendChild(fallingElement);
        
        // এনিমেশন শেষ হলে এলিমেন্ট মুছে ফেলার জন্য
        setTimeout(() => {
            fallingElement.remove();
        }, 8000);
    }, 400); // নতুন এলিমেন্ট তৈরি করার ফ্রিকোয়েন্সি
}

// ৩. ইমোজি নাকি লেখা সেটি বোঝার ফাংশন
function isEmoji(str) {
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/u;
    return emojiRegex.test(str);
}
