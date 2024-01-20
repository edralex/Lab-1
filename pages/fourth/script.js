const latinPhrases = ["Consuetudo est altera natura", "Nota bene", "Nulla calamitas sola", "Per aspera ad astra"];
const russianTranslations = ["Привычка - вторая натура", "Заметьте хорошо!", "Беда не приходит одна", "Через тернии к звёздам"];

let shuffledIndexes = [];
let clickCount = 0;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initializeIndexes() {        //... => 1,2,3,4 [обратно в массив]
  shuffledIndexes = shuffleArray([...Array(latinPhrases.length).keys()]);
}

initializeIndexes();

function createRow() {
  if (shuffledIndexes.length === 0) {
    alert('Фразы закончились');
    return;
  }

  const tableBody = document.getElementById('phrasesTableBody');
  const latinIndex = shuffledIndexes.pop();
  const row = tableBody.insertRow();

  row.insertCell().textContent = latinPhrases[latinIndex];
  row.insertCell().textContent = russianTranslations[latinIndex];
  row.classList.add(tableBody.children.length % 2 === 0 ? 'class1' : 'class2');
}

function changeFontStyle() {
  clickCount++;
  const boldOrNormal = clickCount % 2 === 0 ? 'bold' : 'normal';
  Array.from(document.querySelectorAll('#phrasesTableBody tr:nth-child(odd) td')).forEach(cell => {
    cell.style.fontWeight = boldOrNormal;
  });
}
  