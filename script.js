const slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");  
      index = (index + 1) % slides.length;       
      slides[index].classList.add("active");     
    }, 4000);


  function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
  }


  const heading = document.getElementById("main-heading");
  setTimeout(()=>{
    heading.innerHTML ='Book Your <span class="highlight">Next Trip</span><br>with Us';
  }, 3000);
   

const image = document.getElementById('card-image');
const video = document.getElementById('card-video');

// 5 sec ke baad video start hoga
setTimeout(() => {
  image.style.display = 'none';
  video.style.display = 'block';
  video.play();
}, 5000);

// jab video khatam ho jaaye
video.addEventListener('ended', () => {
  video.style.display = 'none';
  image.style.display = 'block';

  // phir 5 sec ke baad video dobara play hoga
  setTimeout(() => {
    image.style.display = 'none';
    video.style.display = 'block';
    video.play();
  }, 5000);
});
