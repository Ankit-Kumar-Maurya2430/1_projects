const nav = document.getElementById("nav");
const hambar = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const bars = document.getElementById("bars");


hambar.addEventListener('click', function(e){
  
  
  if(navbar.style.display ='grid'){
    bars.style.display = "none";
    console.log("add menus");
  }else{
    bars.style.display = "display";
  }

  
})

nav.addEventListener('click', function(e){
 if ((navbar.style.display = "none")) {
     bars.style.display = "flex";
     console.log("remove menu");
   } else {
     hambar.style.display = "none";
   }
})