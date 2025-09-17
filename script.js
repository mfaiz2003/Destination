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
   