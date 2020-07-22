
let ma = document.getElementsByTagName('main');
let nav= document.getElementById("navbar__list");
let i =0;
let list = document.getElementsByTagName('section');
function addLi(){
  do  {
    let li= document.createElement('li');
  let a=  document.createElement('a');
  let text =document.createTextNode(`section${i+1}`);
  a.setAttribute('href' ,`#section${i+1}`);
  a.setAttribute('target', '_self');
  a.setAttribute('class', 'menu__link')
  li.appendChild(a);
  a.appendChild(text);
  li.appendChild(a);
  nav.appendChild(li);

    i++;

  }while (i<list.length);

}
addLi();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// check if not scrolling and hide the navigation bar
let timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);
        nav.style.display='none';
    }
    timer = setTimeout(function()
    {nav.style.display='block'}, 700);
}, false);

// initialize observer
let options = {
//  root: divs,
  rootMargin: '0px',
  threshold: .7
}
//loop on sections in page and give active class to the one in viewport
let n = 0;
for(item of list){
let item= document.getElementsByTagName("section")[n];
let callback = (entries, observer) => {
    entries.forEach(entry => {

function myFunction(item) {
  if (document.querySelector('.your-active-class') !== null) {
  document.querySelector('.your-active-class').classList.remove('your-active-class');
}
item.setAttribute('class', 'your-active-class');
}

      myFunction(item);
      });



};
let observer = new IntersectionObserver(callback, options);
  observer.observe(item);
  n++;
}

// add active class when element in nav bar is clicked
let navList= nav.getElementsByTagName('a');
navList[0].setAttribute('class', 'menu__link active');
for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function() {
  let current = document.getElementsByClassName(" active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
