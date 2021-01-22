function openNav() {
  document.getElementById("mySidebar").style.width = "220px";
  document.getElementById("main").style.marginLeft = "220px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
/*
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementByld(headerld)
  
  if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () =>
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
      bodypd.classList.toggle('body-pd')
      headerpd.classList.toggle('body-pd')
    )}
  }  

  showNavbar('header-toggle','mySidebar','bodypd','header')
  const linkColor = document.querySelectorAll(.nav__link) 

funcation colorLink(){
   if(linkColor){
    linkColor.forEach(l=>l.classList.remove('active'))
    this.classList.add('active')
 }  
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))
*/
