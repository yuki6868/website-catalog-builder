// ボタンを押したらメッセージ
const btn = document.getElementById('cta-btn');

btn.addEventListener('click', () => {
  alert('クリックされました！');
});

// カードにホバーアニメーション
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});