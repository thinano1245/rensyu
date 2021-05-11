const targetElement = document.querySelectorAll(".animationtarget");
console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll", function(){
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistans = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistans)
    targetElement[i].classList.add("show");
  }
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("menubutton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("header-nav").classList.toggle("active");
  })
});