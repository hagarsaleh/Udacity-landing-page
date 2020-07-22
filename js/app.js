
var ma = document.getElementsByTagName('main');
var nav= document.getElementById("navbar__list");
var i =0;
var list = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();
function addLi(){
  do  {
    var li= document.createElement('li');
    var a=  document.createElement('a');
    var text =document.createTextNode(`section${i+1}`);
    a.setAttribute('href' ,`#section${i+1}`);
    a.setAttribute('target', '_self');
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
var timer = null;
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
  //  list.classList.toggle("your-active-class");
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
