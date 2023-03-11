// nav 
let lis = document.querySelectorAll(".navbar .container .navbar-nav li a ");
let li = Array.from(lis)

li.forEach((el)=>{
  el.addEventListener("click",removeactive)
})

function removeactive (){
  li.forEach((el)=>{
    el.classList.remove("active");
    this.classList.add("active")
  })
}

let icon = document.getElementById("top-icon");

window.onscroll = function(){
  if(this.scrollY >= 1000) {
    icon.classList.add("shw")
  }else{
    icon.classList.remove("shw")
  }
}
icon.onclick = function(){
  window.scrollTo ({
    top :0,
    behavior: "smooth" 
  })
}
// claculator
let meter = document.getElementById("meter") ;

let price = document.getElementById("price");
let calc = document.getElementById("calc");
calc.addEventListener("click",calculation)

function calculation (){
  document.getElementById("total").value =Math.ceil (meter.value) * (price.value) +"$"
}

// Gallary 
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


// 
let signupForm = document.getElementById("signup");
let signupbtu = document.getElementById("newsgin");
let signupcancel = document.getElementById ("cancel");
console.log(signupcancel)

signupbtu.onclick = function(){
  signupForm.classList.add("active")
}
signupcancel.onclick = function(){
  signupForm.classList.remove("active")
}