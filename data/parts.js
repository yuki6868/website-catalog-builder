export const parts = [
  // ======================
  // HEADER
  // ======================
  {
    id: "header-simple",
    category: "header",
    name: "シンプルヘッダー",
    thumbnailClass: "thumb-header-simple",
    thumbnailLabel: "Header A",
    thumbnailImage: "./images/header-simple.png",
    html: `
      <header class="part-header-simple">
        <h1 class="part-header-simple__logo">MySite</h1>
        <nav>
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
        padding: 16px 24px;
        background: #222;
        color: white;
      }
      .part-header-simple a {
        color: white;
        margin-left: 12px;
        text-decoration: none;
      }
    `,
    init: () => {}
  },

  {
    id: "header-centered",
    category: "header",
    name: "中央ロゴヘッダー",
    thumbnailClass: "thumb-header-centered",
    thumbnailLabel: "Header B",
    thumbnailImage: "./images/header-centered.png",
    html: `
      <header class="part-header-centered">
        <h1>MySite</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Works</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    `,
    css: `
      .part-header-centered {
        text-align: center;
        padding: 20px;
        background: #444;
        color: white;
      }
      .part-header-centered nav {
        margin-top: 10px;
      }
      .part-header-centered a {
        margin: 0 10px;
        color: white;
      }
    `,
    init: () => {}
  },

  // ======================
  // HERO
  // ======================
  {
    id: "hero-simple",
    category: "hero",
    name: "シンプルヒーロー",
    thumbnailClass: "thumb-hero-simple",
    thumbnailLabel: "Hero A",
    thumbnailImage: "./images/hero-simple.png",
    html: `
      <section class="part-hero-simple">
        <h2>シンプルなサイト</h2>
        <p>これはサンプルです</p>
        <button class="hero-btn">クリック</button>
      </section>
    `,
    css: `
      .part-hero-simple {
        text-align: center;
        padding: 80px 20px;
        background: #f5f5f5;
      }
      .hero-btn {
        padding: 10px 20px;
        cursor: pointer;
      }
    `,
    init: () => {
      const btn = document.querySelector(".part-hero-simple .hero-btn");
      if (!btn) return;

      btn.addEventListener("click", () => {
        alert("シンプルヒーロー！");
      });
    }
  },

  {
    id: "hero-image",
    category: "hero",
    name: "背景画像ヒーロー",
    thumbnailClass: "thumb-hero-image",
    thumbnailLabel: "Hero B",
    thumbnailImage: "./images/hero-image.png",
    html: `
      <section class="part-hero-image">
        <h2>Welcome</h2>
      </section>
    `,
    css: `
      .part-hero-image {
        height: 300px;
        background: linear-gradient(45deg, #0bd, #09f);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
      }
    `,
    init: () => {}
  },

  // ======================
  // SECTION
  // ======================
  {
    id: "cards-simple",
    category: "section",
    name: "3カラムカード",
    thumbnailClass: "thumb-cards-simple",
    thumbnailLabel: "Section A",
    thumbnailImage: "./images/cards-simple.png",
    html: `
      <section class="part-cards-simple">
        <div class="card">サービス1</div>
        <div class="card">サービス2</div>
        <div class="card">サービス3</div>
      </section>
    `,
    css: `
      .part-cards-simple {
        display: flex;
        gap: 20px;
        padding: 40px;
      }
      .part-cards-simple .card {
        flex: 1;
        padding: 20px;
        background: #eee;
        transition: transform 0.3s;
      }
    `,
    init: () => {
      const cards = document.querySelectorAll(".part-cards-simple .card");

      cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
          card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "scale(1)";
        });
      });
    }
  },

  {
    id: "section-text",
    category: "section",
    name: "テキストセクション",
    thumbnailClass: "thumb-section-text",
    thumbnailLabel: "Section B",
    thumbnailImage: "./images/section-text.png",
    html: `
      <section class="part-section-text">
        <h2>About</h2>
        <p>ここに説明文が入ります</p>
      </section>
    `,
    css: `
      .part-section-text {
        padding: 60px;
        text-align: center;
      }
    `,
    init: () => {}
  },

  // ======================
  // FOOTER
  // ======================
  {
    id: "footer-simple",
    category: "footer",
    name: "シンプルフッター",
    thumbnailClass: "thumb-footer-simple",
    thumbnailLabel: "Footer A",
    thumbnailImage: "./images/footer-simple.png",
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
    `,
    init: () => {}
  },

  {
    id: "footer-dark",
    category: "footer",
    name: "濃いフッター",
    thumbnailClass: "thumb-footer-dark",
    thumbnailLabel: "Footer B",
    thumbnailImage: "./images/footer-dark.png",
    html: `
      <footer class="part-footer-dark">
        <p>All Rights Reserved</p>
      </footer>
    `,
    css: `
      .part-footer-dark {
        text-align: center;
        padding: 30px;
        background: black;
        color: white;
      }
    `,
    init: () => {}
  }
];