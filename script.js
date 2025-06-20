// ハンバーガーメニューの開閉
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
    });
}

// ページ内リンククリック時にメニューを閉じる
nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
        }
    });
});
