export const parts = [
  {
    id: "header-simple",
    category: "header",
    name: "シンプルヘッダー",
    html: `
      <header class="part-header-simple">
        <h1 class="part-header-simple__logo">MySite</h1>
        <nav class="part-header-simple__nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    `,
    css: `
      .part-header-simple {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background: #222;
        color: white;
      }

      .part-header-simple__logo {
        margin: 0;
        font-size: 24px;
      }

      .part-header-simple__nav a {
        color: white;
        margin-left: 16px;
        text-decoration: none;
      }
    `,
    js: ``
  },

  {
    id: "hero-simple",
    category: "hero",
    name: "シンプルヒーロー",
    html: `
      <section class="part-hero-simple">
        <h2 class="part-hero-simple__title">シンプルなホームページ</h2>
        <p class="part-hero-simple__text">これはサンプルです</p>
        <button class="part-hero-simple__button" id="part-hero-simple-btn">クリック</button>
      </section>
    `,
    css: `
      .part-hero-simple {
        text-align: center;
        padding: 80px 20px;
        background: #f5f5f5;
      }

      .part-hero-simple__title {
        margin-bottom: 16px;
        font-size: 32px;
      }

      .part-hero-simple__text {
        margin-bottom: 20px;
        color: #555;
      }

      .part-hero-simple__button {
        padding: 10px 20px;
        cursor: pointer;
        border: none;
        border-radius: 6px;
        background: #222;
        color: white;
      }
    `,
    js: `
      const heroBtn = document.getElementById('part-hero-simple-btn');
      if (heroBtn) {
        heroBtn.addEventListener('click', () => {
          alert('クリックされました！');
        });
      }
    `
  },

  {
    id: "cards-simple",
    category: "section",
    name: "3カラムカード",
    html: `
      <section class="part-cards-simple">
        <div class="part-cards-simple__card">
          <h3>サービス1</h3>
          <p>説明文です</p>
        </div>
        <div class="part-cards-simple__card">
          <h3>サービス2</h3>
          <p>説明文です</p>
        </div>
        <div class="part-cards-simple__card">
          <h3>サービス3</h3>
          <p>説明文です</p>
        </div>
      </section>
    `,
    css: `
      .part-cards-simple {
        display: flex;
        gap: 20px;
        padding: 40px;
      }

      .part-cards-simple__card {
        flex: 1;
        padding: 20px;
        background: #eee;
        border-radius: 8px;
        transition: transform 0.3s;
      }
    `,
    js: `
      const cards = document.querySelectorAll('.part-cards-simple__card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)';
        });
      });
    `
  },

  {
    id: "footer-simple",
    category: "footer",
    name: "シンプルフッター",
    html: `
      <footer class="part-footer-simple">
        <p>© 2026 MySite</p>
      </footer>
    `,
    css: `
      .part-footer-simple {
        text-align: center;
        padding: 20px;
        background: #222;
        color: white;
      }

      .part-footer-simple p {
        margin: 0;
      }
    `,
    js: ``
  }
];