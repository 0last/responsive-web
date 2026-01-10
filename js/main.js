let currentPlayingCard = null;

document.addEventListener('click', (e) => {
  const cover = e.target.closest('.video-cover');
  if (!cover) return;

  const card = cover.closest('.video-card');
  const bvid = card.dataset.bvid;

  /* 如果有其他视频在播放，先停止 */
  if (currentPlayingCard && currentPlayingCard !== card) {
    restoreCover(currentPlayingCard);
  }

  /* 如果点的是当前正在播放的，直接返回 */
  if (currentPlayingCard === card) return;

  /* 创建 iframe */
  const iframe = document.createElement('iframe');
  iframe.src = `https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=1`;
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = true;
  iframe.frameBorder = '0';

  /* loading 层 */
  const loading = document.createElement('div');
  loading.className = 'loading-layer';
  loading.textContent = '视频加载中…';

  card.innerHTML = '';
  card.appendChild(loading);
  card.appendChild(iframe);

  iframe.onload = () => {
    loading.remove();
  };

  currentPlayingCard = card;
});

/* 恢复封面（不再需要重新绑定事件） */
function restoreCover(card) {
  card.innerHTML = `
    <div class="video-cover">
      <img src="${card.dataset.cover}" alt="视频封面">
      <button class="play-btn">▶</button>
    </div>
  `;
  currentPlayingCard = null;
}
