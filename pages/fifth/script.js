document.addEventListener("DOMContentLoaded", function () {
  let isDragging = false;
  let isRotating = false;
  let offsetX, offsetY, currentX, currentY;
  let rotationAngle = 0;

  const draggableElements = document.querySelectorAll('.draggable');
  
  document.addEventListener('mouseup', function () {
    isDragging = false;
    checkConditions();
});
  draggableElements.forEach(element => {
      element.addEventListener('mousedown', function (e) {
              isDragging = true;
              offsetX = e.clientX - element.getBoundingClientRect().left;
              offsetY = e.clientY - element.getBoundingClientRect().top / 2;
      });

      element.addEventListener('mousemove', function (e) {

          if (isDragging) {
              currentX = e.clientX - offsetX;
              currentY = e.clientY - offsetY;

              element.style.left = `${e.clientX-element.getBoundingClientRect().width / 2}px`;
              element.style.top = `${e.clientY - element.getBoundingClientRect().height / 2 - 100}px`;
          }
      });


      element.addEventListener('mouseout', function () {
        isDragging = false;
    }); 


      element.addEventListener('dblclick', function () {
          rotationAngle += 45;
          element.style.transform = `rotate(${rotationAngle}deg)`;
      });

  });

  document.addEventListener('mouseup', function () {
      isRotating = false;
  });
});

function checkConditions()
{
  let item = document.getElementById("window");
  let item2 = document.getElementById("wall");
  let item3 = document.getElementById("roof");
  let item4 = document.getElementById("triangle1");
  let item5 = document.getElementById("triangle2");
  let item6 = document.getElementById("triangle3");
  let item7 = document.getElementById("treebase");
  let checker = true;
  if ((item.getBoundingClientRect().left > item2.getBoundingClientRect().left) && (item.getBoundingClientRect().left < (item2.getBoundingClientRect().left + 50)))
  {
    item.style.backgroundColor = 'blue';
  }
  else
  {
    item.style.backgroundColor = 'olive';
    checker = checker && false;
  }

  if ((item3.getBoundingClientRect().left > item2.getBoundingClientRect().left-70) && (item3.getBoundingClientRect().left < (item2.getBoundingClientRect().left -40)))
  {
    item3.style.borderBottomColor = 'darksalmon';
  }
  else
  {
    item3.style.borderBottomColor = 'grey';
    checker = checker && false;
  }

  if ((item4.getBoundingClientRect().left > item7.getBoundingClientRect().left-40) && (item4.getBoundingClientRect().left < (item7.getBoundingClientRect().left)))
  {
    item4.style.borderBottomColor = 'lightgreen';
  }
  else
  {
    item4.style.borderBottomColor = 'grey';
    checker = checker && false;
  }

  if ((item5.getBoundingClientRect().left > item7.getBoundingClientRect().left-40) && (item5.getBoundingClientRect().left < (item7.getBoundingClientRect().left)))
  {
    item5.style.borderBottomColor = 'lightseagreen';
  }
  else
  {
    item5.style.borderBottomColor = 'grey';
    checker = checker && false;
  }

  if ((item6.getBoundingClientRect().left > item7.getBoundingClientRect().left-40) && (item6.getBoundingClientRect().left < (item7.getBoundingClientRect().left)))
  {
    item6.style.borderBottomColor = 'green';
  }
  else
  {
    item6.style.borderBottomColor = 'grey';
    checker = checker && false;
  }

  if ((item7.getBoundingClientRect().left > (item2.getBoundingClientRect().left-300)) && (item7.getBoundingClientRect().left < (item2.getBoundingClientRect().left-200)))
  {
    item7.style.backgroundColor = 'brown';
  }
  else
  {
    item7.style.backgroundColor = 'grey';
    checker = checker && false;
  }
  if (checker)
  {
    item.style.animationName = 'spin';
    item2.style.animationName = 'spin';
    item3.style.animationName = 'spin';
    item4.style.animationName = 'spin';
    item5.style.animationName = 'spin';
    item6.style.animationName = 'spin';
    item7.style.animationName = 'spin';
  }

}
