function showPage(id) {
  const pages = document.querySelectorAll('.page1');
  const current = document.querySelector('.page1.active');
  const next = document.getElementById(id);
  const nextb = document.getElementById(id +"1");
  const buttons = document.querySelectorAll('.button1');
  const currentb = document.querySelector('.button1.active');
  if (current === next) return; // Không làm gì nếu bấm lại cùng mục

  // Bắt đầu ẩn phần hiện tại
  current.classList.remove('active');
  currentb.classList.remove('active');
  nextb.classList.add('active');
  // Sau khi ẩn xong (đợi fade-out), mới hiện phần mới
  setTimeout(() => {
    current.style.display = 'none';

    next.style.display = 'flex';
    setTimeout(() => {
      next.classList.add('active');
    }, 10); // Chờ một chút để trigger transition
  }, 400); // = thời gian fade-out trong CSS
}
function showPage2(id) {
  const pages = document.querySelectorAll('.page2');
  const current = document.querySelector('.page2.active');
  const next = document.getElementById(id);

  if (current === next) return; // Không làm gì nếu bấm lại cùng mục
  const nextb = document.getElementById(id +"1");
  const buttons = document.querySelectorAll('.button2');
  const currentb = document.querySelector('.button2.active');

  // Bắt đầu ẩn phần hiện tại
  current.classList.remove('active');
  currentb.classList.remove('active');
  nextb.classList.add('active');
  // Sau khi ẩn xong (đợi fade-out), mới hiện phần mới
  setTimeout(() => {
    current.style.display = 'none';

    next.style.display = 'flex';
    setTimeout(() => {
      next.classList.add('active');
    }, 10); // Chờ một chút để trigger transition
  }, 400); // = thời gian fade-out trong CSS
}



const pages = Array.from({ length: 9 }, (_, i) => `SanPham/${i + 1}.jpg`);

let current = 0;
const img = document.getElementById("flipImage");
const dotsContainer = document.getElementById("dots");

function createDots() {
  dotsContainer.innerHTML = "";
  pages.forEach((_, index) => {
    const dot = document.createElement("span");
    Object.assign(dot.style, {
      display: "inline-block",
      width: "12px",
      height: "12px",
      margin: "0 5px",
      borderRadius: "50%",
      cursor: "pointer",
      backgroundColor: index === current ? "#116f59" : "#ccc"
    });
    dot.onclick = () => { current = index; showImage(); };
    dotsContainer.appendChild(dot);
  });
}

function showImage() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = pages[current];
    img.style.opacity = 1;
    createDots();
  }, 300);
}

function nextPage() {
  current = (current + 1) % pages.length;
  showImage();
}

function prevPage() {
  current = (current - 1 + pages.length) % pages.length;
  showImage();
}

// Auto play (3s mỗi ảnh)
//let autoPlay = setInterval(nextPage, 3000);

// Dừng autoplay khi hover
//img.addEventListener("mouseenter", () => clearInterval(autoPlay));
//img.addEventListener("mouseleave", () => autoPlay = setInterval(nextPage, 3000));

// Hiển thị ảnh đầu tiên
showImage();

function show(btn) {
  if (btn.id === "menub1") {
    document.getElementById("menu").style.display = "flex";
    btn.style.opacity = "0%";
    document.getElementById("menub2").style.opacity = "100%";
  }
  else {
    document.getElementById("menu").style.display = "none";
    btn.style.opacity = "0%";
    document.getElementById("menub1").style.opacity = "100%";
  }
}

function showPage3(id) {
  const pages = document.querySelectorAll('.page1');
  const current = document.querySelector('.page1.active');
  const next = document.getElementById(id);
  const nextb = document.getElementById(id +"1");
  const buttons = document.querySelectorAll('.button3');
  const currentb = document.querySelector('.button3.active');
  if (current === next) return; // Không làm gì nếu bấm lại cùng mục

  // Bắt đầu ẩn phần hiện tại
  current.classList.remove('active');
  currentb.classList.remove('active');
  nextb.classList.add('active');
  // Sau khi ẩn xong (đợi fade-out), mới hiện phần mới
  setTimeout(() => {
    current.style.display = 'none';

    next.style.display = 'flex';
    setTimeout(() => {
      next.classList.add('active');
    }, 10); // Chờ một chút để trigger transition
  }, 400); // = thời gian fade-out trong CSS
}
