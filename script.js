// Gallery Filter
document.querySelectorAll('.gallery-filters button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.gallery-filters button').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    let filter = this.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

// Testimonials Carousel
let slides = document.querySelectorAll('.testimonial-slide'), idx = 0;
setInterval(()=>{
  slides[idx].classList.remove('active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('active');
}, 4000);

// Fade-in Animation on Scroll
const fadeEls = document.querySelectorAll('.fade-in');
const appear = () => {
  fadeEls.forEach(el=>{
    let winH = window.innerHeight, elT = el.getBoundingClientRect().top;
    if (elT < winH - 60) el.classList.add('visible');
  });
};
window.addEventListener('scroll',appear); window.addEventListener('load',appear);
