function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu ('.burger-menu');


var acc = document.getElementsByClassName("accordion");
const acc2 = document.querySelector('.accordion > span');
let topics = document.querySelector('.topics__container')
var i;
let acrd = document.getElementById("acrd");
let marginTop = document.getElementById("marginTop");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    acc2.innerHTML = (acc2.innerHTML === 'Читати далі...') ? acc2.innerHTML = 'Сховати' : acc2.innerHTML = 'Читати далі...';
    topics.classList.toggle("pdbottom")
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    acrd.classList.toggle("topics__box_accordion");
    marginTop.classList.toggle("marginTop")
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

var acc3 = document.getElementsByClassName("accordion2");
var h;

for (h = 0; h < acc3.length; h++) {
  acc3[h].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel2 = this.nextElementSibling;
    if (panel2.style.display === "block") {
      panel2.style.display = "none";
    } else {
      panel2.style.display = "block";
    }
  });
}

let herbsBtn = document.querySelector("#herbs__btn");
let herbsMore = document.querySelector(".herbs__more");

herbsBtn.addEventListener("click", function() {
  herbsMore.style.display = "block";
  herbsBtn.style.paddingTop = "-8px";
  herbsBtn.style.display = "none";
});


function showResult() {
  var score = calculateScore();

  if (score > 0) {
    var resultText = "";

    if (score >= 14) {
      resultText = "Ведення";
    } else {
      resultText = "Зцілення";
    }

    document.getElementById("resultText").innerHTML = resultText;
    document.getElementById("popupContainer").style.display = "flex";
}
}

function closePopup() {
document.getElementById("popupContainer").style.display = "none";
}

function calculateScore() {
var score = 0;
var inputs = document.querySelectorAll('input[type="radio"]:checked');

if (inputs.length === 8) {
    inputs.forEach(function(input) {
    score += parseInt(input.value);
});
} else {
    alert("Будь ласка, виберіть відповідь на кожне питання!");
    return 0;
}

return score;
}