const news = [
  { ticker: "PTT", change: "+1.2%", up: true, title: "PTT ประกาศลงทุนพลังงานทดแทน", meta: "2 นาทีที่แล้ว • Energy" },
  { ticker: "AOT", change: "-0.8%", up: false, title: "AOT ปรับแผนขยายสนามบิน", meta: "15 นาทีที่แล้ว • Transport" },
  { ticker: "CPALL", change: "+2.1%", up: true, title: "CPALL ยอดขาย Q3 เติบโต", meta: "1 ชม.ที่แล้ว • Commerce" },
];

const feed = document.getElementById("feed");
const detail = document.getElementById("detail");

function openDetail(item) {
  document.getElementById("detail-title").textContent = item.ticker;
  document.getElementById("detail-body").textContent = item.title + "\n" + item.meta;
  detail.showModal();
}

news.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-head">
      <span class="ticker">${item.ticker}</span>
      <span class="change ${item.up ? "up" : "down"}">${item.change}</span>
    </div>
    <h3 class="card-title">${item.title}</h3>
    <div class="card-meta">${item.meta}</div>
  `;
  card.addEventListener("click", () => openDetail(item));
  feed.appendChild(card);
});
