
// navigation
const navigation=document.querySelector(".navigation");
const buttonShowNavigation=document.querySelector(".button-show-navigation ");
const buttonCloseNavigation=document.querySelector(".close-navigation-button");
function ShowNavigation(){
  navigation.classList.add("opacity-100");
  buttonShowNavigation.classList.remove("opacity-100");
  buttonShowNavigation.classList.add("opacity-0");
}
function closeNavigation(){
  navigation.classList.remove("opacity-100");
  buttonShowNavigation.classList.add("opacity-100");
  buttonShowNavigation.classList.remove("opacity-0");
}
buttonShowNavigation.addEventListener("click",ShowNavigation)
buttonCloseNavigation.addEventListener("click",closeNavigation)
// navigation-end

//modal
const modal=document.querySelector(".modal");
const body=document.querySelector('body');
const submitButton=document.querySelector(".submit-button");
const input=document.querySelector(".input");
const errorMessage=document.querySelector(".error-message")
const root=document.querySelector(".root")

  setTimeout(function showModal(){
  modal.classList.add("opacity-100","cursor-default")
  root.classList.add("opacity-30","cursor-not-allowed","blur-sm")
},3500)
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
