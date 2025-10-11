
/* Small, framework-free JS for carousels and testimonial slider */
(function(){
  // Carousels
  document.querySelectorAll('[data-role="carousel"]').forEach(function(carousel){
    var imgs = Array.from(carousel.querySelectorAll('img'));
    if(!imgs.length) return;
    var i = 0;
    function show(idx){
      imgs.forEach(function(im, k){ im.classList.toggle('active', k===idx); });
    }
    show(0);
    var prev = carousel.querySelector('.prev');
    var next = carousel.querySelector('.next');
    if(prev) prev.addEventListener('click', function(e){ e.stopPropagation(); i=(i-1+imgs.length)%imgs.length; show(i); });
    if(next) next.addEventListener('click', function(e){ e.stopPropagation(); i=(i+1)%imgs.length; show(i); });
  });

  // Testimonial simple rotator
  var quotes = [
    {q:"The house was amazing, and the views were breathtaking. We had a fantastic time snorkeling in the bay and exploring the area. The hosts were incredibly helpful and responsive. We can't wait to come back!", a:"— Jessica M."},
    {q:"An absolute paradise. Waking up to the sound of the ocean was a dream. The property was immaculate and had everything we needed for a comfortable stay. Highly recommend!", a:"— David L."}
  ];
  var fig = document.querySelector('[data-role="testimonial"]');
  if(fig){
    var qEl = fig.querySelector('.testimonial__quote');
    var aEl = fig.querySelector('.testimonial__author');
    var idx = 0;
    function render(){ qEl.textContent = quotes[idx].q; aEl.textContent = quotes[idx].a; }
    render();
    var prevBtn = fig.querySelector('[data-action="prev-testimonial"]');
    var nextBtn = fig.querySelector('[data-action="next-testimonial"]');
    prevBtn && prevBtn.addEventListener('click', function(){ idx=(idx-1+quotes.length)%quotes.length; render(); });
    nextBtn && nextBtn.addEventListener('click', function(){ idx=(idx+1)%quotes.length; render(); });
  }
})();
