function randomizeWidthAndColor() {
    var growingLine = document.getElementById("growingLine","growingLine1");
    var randomWidth = Math.floor(Math.random() * 900) + 200; // Largeur aléatoire entre 50 et 250 pixels
    growingLine.style.width = randomWidth + "px";
  
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Générer une couleur hexadécimale aléatoire
    growingLine.style.backgroundColor = randomColor;
  }
  
  setInterval(randomizeWidthAndColor, 1000); // Appel de la fonct


  window.addEventListener('scroll', function() {
    var button = document.getElementById('fixedButton');
    if (window.scrollY > 0) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });
  
  document.getElementById("fixedButton").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });