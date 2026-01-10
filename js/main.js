document.addEventListener("click", function (e) {
  const placeholder = e.target.closest(".video-placeholder");
  if (!placeholder) return;

  const container = placeholder.parentElement;
  const bvid = placeholder.dataset.bvid;

  /* 1. 停止其他视频 */
  document.querySelectorAll(".video-container").forEach((c) => {
    const iframe = c.querySelector("iframe");
    const ph = c.querySelector(".video-placeholder");
    const loading = c.querySelector(".video-loading");

    if (iframe) iframe.remove();
    if (loading) loading.remove();
    if (ph) ph.classList.remove("hidden");
  });

  /* 2. 显示 loading 状态 */
  const loading = document.createElement("div");
  loading.className = "video-loading";
  container.appendChild(loading);

  /* 3. 创建 iframe */
  const iframe = document.createElement("iframe");
  iframe.src = `//player.bilibili.com/player.html?bvid=${bvid}&autoplay=1`;
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;
  iframe.style.width = "100%";
  iframe.style.height = "100%";

  /* 4. iframe 加载完成后移除 loading */
  iframe.addEventListener("load", () => {
    loading.remove();
  });

  placeholder.classList.add("hidden");
  container.appendChild(iframe);
});
