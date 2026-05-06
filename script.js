/*Start Scroller */
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
/*End Scroller */

/*Start Slider Image  */

// Get slider Image

var slideImage = Array.from(document.querySelectorAll(".slider-container img"));

// Get Slide Count

var slideCount = slideImage.length;

// Set Current Item

var currentItem = 1;

// Creat Pagination Element

var paginationElement = document.createElement("ul");

// Add Id to pagination

paginationElement.setAttribute("id", "pagination-ul");

// Create List Of Number
for (var i = 1; i <= slideCount; i++) {
  // Create li Of Number
  var paginationItem = document.createElement("li");
  // Add data index
  paginationItem.setAttribute("data-index", i);

  // Append Number in li

  paginationItem.appendChild(document.createTextNode(i));

  // Append li in ul

  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicator").appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");

console.log(paginationCreatedUl);

var paginationBullet = Array.from(
  document.querySelectorAll("#pagination-ul li"),
);

console.log(paginationBullet);

for (var i = 0; i < paginationBullet.length; i++) {
  paginationBullet[i].onclick = function () {
    currentItem = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Get Next and Prev Element

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Trigger Function slide

nextButton.onclick = nextslide;
prevButton.onclick = prevslide;

// Set Nextslide Function

function nextslide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentItem++;
    theChecker();
  }
}
// Set prevsldie Function

function prevslide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentItem--;
    theChecker();
  }
}

theChecker();
// Set The Checker Function

function theChecker() {
  removeActiveAll();
  slideImage[currentItem - 1].classList.add("active");

  paginationCreatedUl.children[currentItem - 1].classList.add("active");

  if (currentItem == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentItem == slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// Remove Active Class From All

function removeActiveAll() {
  slideImage.forEach((img) => {
    img.classList.remove("active");
  });
  paginationBullet.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}

/*End Slider image */
/*Start Skill-progress */
let skills = document.querySelector('.skills');
let spans =document.querySelectorAll('.progress span')

let testimonial = document.querySelector(".testimonial")
let boxes = document.querySelectorAll(".testimonial .box")

window.onscroll = function(){
  if( window.scrollY >= skills.offsetTop -800){
    spans.forEach(span => {
      span.style.width = span.dataset.width;
    })
  }
  if(window.scrollY >= testimonial.offsetTop - 500){
    boxes.forEach(box =>{
      box.classList.add('show')
    })
  }
}
/*End Skill-progress */









