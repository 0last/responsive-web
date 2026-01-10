document.querySelectorAll('.video-card').forEach(card => {
  const cover = card.querySelector('.video-cover');
  const bvid = card.dataset.bvid;

  cover.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=1`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allow =
      'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    card.innerHTML = '';
    card.appendChild(iframe);
  });
});
