
function showResult() {
    var score = calculateScore();

    if (score > 0) {
      var resultText = "";

      if (score >= 14) {
        resultText = "<div><h2 class = 'result__title'>Ведення</h2><img src = 'img/tests/Zcilenna.png' class = 'result__img'></img><p class = 'result__info'>Ви знаєте дійсність. Ви віддаєте перевагу справедливості. Ви завжди знайдете вихід у безнадійній ситуації. Ви можете допомогти там, де інші не впораються. Ви поважаєте ввічливість та вмієте читати людей як відкриті книги. Не важливо якої ви статті - ви Відьмак. І цей дар вимагатиме розвитку рано чи пізно.</p></div>";
      } else {
        resultText = "<div><h2 class = 'result__title'>Зцілення</h2><img src = 'img/tests/Vedenya.png' class = 'result__img'></img><p class = 'result__info'>Ви можете лікувати душу та тіло. Ви не багато кажете, але вмієте зробити – диво: зрозуміти на ноги, мотивувати, знайти потрібні слова. Ви - промінь світла у темному царстві. Біди відступають перед вашими знаннями. Ви посланець добра у цьому світі.</p></div>";
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