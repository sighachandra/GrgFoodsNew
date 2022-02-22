// function leftSideDropdownone() {
//   document.getElementById("leftDropdownone").classList.toggle("show_l");
// }
// function leftSideDropdowntwo() {
//   document.getElementById("leftDropdowntwo").classList.toggle("show_l");
// }
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn_l')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content_l");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show_l')) {
//         openDropdown.classList.remove('show_l');
//       }
//     }
//   }
// }


//         window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
    
 window.addEventListener("scroll", function() {
        var mainH = document.getElementById("myHeader");
       
        mainH.classList.toggle("sticky", window.scrollY > mainH.scrollHeight);
        
      });



 const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
       a.addEventListener('click', b => {
              const next = b.target.nextElementSibling;
              next.classList.toggle('toggle');
              next.style.zIndex = index++;
       })
})
option.forEach(a => {
       a.addEventListener('click', b => {
              b.target.parentElement.classList.remove('toggle');
              
              const parent = b.target.closest('.select').children[0];
              parent.setAttribute('data-type', b.target.getAttribute('data-type'));
              parent.innerText = b.target.innerText;
       })
})