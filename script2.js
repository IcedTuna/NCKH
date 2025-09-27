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

    next.style.display = 'block';
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

    next.style.display = 'block';
    setTimeout(() => {
      next.classList.add('active');
    }, 10); // Chờ một chút để trigger transition
  }, 400); // = thời gian fade-out trong CSS
}