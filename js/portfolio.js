//WINDOW
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);


let container = document.querySelector('.logoGraphic');

let animation = bodymovin.loadAnimation({
    container: container, 
    path: '/content/mindover.json', 
    renderer: 'svg', 
    loop: true, 
    autoplay: true,
  });
