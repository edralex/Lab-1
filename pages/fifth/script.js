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
  if ((item.style.left > item2.style.left) && i(tem.style.left < (item2.style.left + 100)))
  {
    item.style.backgroundColor = 'green';
  }

}
