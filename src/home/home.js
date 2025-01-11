const showNavigation=document.querySelector(".button-show-navigation");
const navigation=document.querySelector(".navigation");
const root=document.querySelector(".root")
const closeButton=document.querySelector(".close")
function showButton(){
  showNavigation.classList.add("opacity-0");
  navigation.classList.remove("opacity-0");
}
function close(){
  navigation.classList.add("opacity-0");
  showNavigation.classList.remove("opacity-0");
}
showNavigation.addEventListener("click",showButton)
closeButton.addEventListener("click",close)
