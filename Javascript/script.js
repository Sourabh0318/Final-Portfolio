//Preloader script
var loader=document.getElementById('preloader');
window.addEventListener("load", function(){
loader.style.display="none";
})

//Aos Script
AOS.init();

//offcanvas Script
document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('canvas');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("OpenMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });

  //Cursor Script
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

  document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500)
  })
