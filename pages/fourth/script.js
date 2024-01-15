const latinPhrases = ["Consuetudo est altera natura", "Nota bene", "Nulla calamitas sola", "Per aspera ad astra"];
const russianTranslations = ["Привычка - вторая натура", "Заметьте хорошо!", "Беда не приходит одна", "Через тернии к звёздам"];

let shuffledIndexes = [];
let clickCount = 0;

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function initializeIndexes() {
  shuffledIndexes = shuffleArray(Array.from({ length: latinPhrases.length }, (_, index) => index));
}

initializeIndexes();

function createRow() {
  const tableBody = document.getElementById('phrasesTableBody');
  if (shuffledIndexes.length === 0) {
    alert('Фразы закончились');
    return;
  }

  if (shuffledIndexes.length > 0) {
    const latinIndex = shuffledIndexes.pop();
    const russianIndex = latinIndex;

    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = latinPhrases[latinIndex];
    cell2.textContent = russianTranslations[russianIndex];



    if (tableBody.children.length % 2 === 0) {
      row.classList.add('class1');
    } else {
      row.classList.add('class2');
    }
  }
}

function changeFontStyle() {
    clickCount++;
  
    const tableRows = document.getElementById('phrasesTableBody').getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++) {
      if (i % 2 === 1) {
        const cells = tableRows[i].getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++) {
          cells[j].style.fontWeight = clickCount % 2 === 0 ? 'bold' : 'normal';
        }
      }
    }
  }