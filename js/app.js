/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

var ma = document.getElementsByTagName('main');
var nav= document.getElementById("navbar__list");
var i =0;
// make list bel divs in main
var list = document.getElementsByTagName('section');

//var list = ma.querySelectorAll('div');
//create li elements for each div in main
function add(){
  do  {
    var sec = document.getElementById(`section${i+1}`);
    var li=  document.createElement('li');
    var id = `section ${i+1}`;
    li.setAttribute('id' ,`${id}`);
    var text =document.createTextNode(id);
    li.appendChild(text);
    nav.appendChild(li);

    i++;

  }while (i<list.length);

}
add();



// check if div in viewport

let options = {
//  root: divs,
  rootMargin: '0px',
  threshold: 1
}
let n = 0;


for(item of list){
let item= document.getElementsByTagName("section")[n];
let callback = (entries, observer) => {
  entries.forEach(entry => {
    item.setAttribute('class', 'your-active-class');
    console.log(item.id);

    // Each entry describes an intersection change for one observed

  });

};
let observer = new IntersectionObserver(callback, options);
  observer.observe(list[n]);
  n++;
}



//scroll lel section: using html get l location, we function onclick
// how to loop to check which div in viewport? hoa when not scrolling
///// check l link lw feeh l id bta3 l section ,,,train station use observer
//where to get l ul name from ?,, class name ? name attribute azon
//make class active ,style it we use it when in isElementInViewport



//general, observer api helw lel performance ,,,smooth scroll using css
//download l project files

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
