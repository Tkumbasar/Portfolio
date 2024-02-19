const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
window.addEventListener('scroll', function() {
    var scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 100) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// image sous la nav


