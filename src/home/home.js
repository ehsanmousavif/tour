// navigation
const showNavigation=document.querySelector(".button-show-navigation");
const navigation=document.querySelector(".navigation");
const root=document.querySelector(".root")
const closeButton=document.querySelector(".close-button")
function showButton(){
  showNavigation.classList.add("opacity-0");
  navigation.classList.remove("opacity-0");
  navigation.classList.add("opacity-100");
}
function close(){
  showNavigation.classList.remove(".opacity-0")
  showNavigation.classList.add(".opacity-100")
  navigation.classList.remove(".opacity-100")
  navigation.classList.add(".opacity-0")
}
showNavigation.addEventListener("click",showButton)
closeButton.addEventListener("click",close)
// navigation-end

//modal
const modal=document.querySelector(".modal");
const body=document.querySelector('body');
const submitButton=document.querySelector(".submit-button");
const input=document.querySelector(".input");
const errorMessage=document.querySelector(".error-message")

  setTimeout(function showModal(){
  modal.classList.add("opacity-100","cursor-default")
  root.classList.add("opacity-50","cursor-not-allowed")
},0)
function submit(){
  }
  function modalHandler (){
    if(input.value.length === 11){
      modal.classList.remove("opacity-100")
      root.classList.remove("opacity-50","cursor-not-allowed")
    }else{
    errorMessage.classList.add("opacity-100")
  }
  }
submitButton.addEventListener("click",modalHandler);
//modal-end
