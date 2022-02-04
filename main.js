$(document).ready(function(){
  $('.banner').slick({
    dots:true,
  });

});
let background = document.querySelector(".background");
let modelProfile = document.querySelector(".modelprofile");
let profile = document.querySelector(".r");
let burger2 = document.querySelector(".header__burger2")
let arrow = document.querySelector(".feedback");
let burger = document.querySelector(".header__burger");
let model = document.querySelector(".backdrop")
let menu = document.querySelector('.model_burger')
burger.addEventListener("click",function(){
  model.classList.add("open");
  menu.classList.add("opens");
  model.addEventListener("click",function(){
    model.classList.remove("open");
    menu.classList.remove("opens");
  })



burger2.addEventListener("click",function(){
  model.classList.add("open");
  menu.classList.add("opens");
})


})
profile.addEventListener("click",function(){
modelProfile.classList.toggle("opens3");
})

background.addEventListener("click",function(){
  modelProfile.classList.remove("opens3");
})
window.addEventListener("scroll",function(){
    arrow.classList.add("opened");
});


arrow.addEventListener("click",function(){
  console.log('hello');
window.scrollTo({ top: 0, behavior: 'smooth' });
})
