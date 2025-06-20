// グローバルで即時実行
(() => {
    /**
     * IntersectionObserver を使ったフェードインアニメーション
     */
    const targets = document.querySelectorAll('.reveal, section, .card, figure');
    targets.forEach(el => {
        el.classList.add('reveal');
    });

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => io.observe(el));

    /**
     * スクロール時にヘッダーを変化させる
     */
    const header = document.querySelector('header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        onScroll(); // 初期状態
        window.addEventListener('scroll', onScroll, { passive: true });
    }
})(); 
