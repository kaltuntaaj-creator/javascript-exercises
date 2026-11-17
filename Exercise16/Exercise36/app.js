const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryButton = document.querySelector('#clearHistoryButton');

function updateColor(selectedColor) {
  colorPreview.style.backgroundColor = selectedColor;
  addColorToHistory(selectedColor);
}

function updatePreview(selectedColor) {
  colorPreview.style.backgroundColor = selectedColor;
}

if (!colorPicker || !colorPreview || !colorHistory || !clearHistoryButton) {
  console.error('One or more color picker elements are missing.');
} else {
  colorPicker.addEventListener('input', function () {
    updatePreview(colorPicker.value);
  });

  clearHistoryButton.addEventListener('click', function () {
    colorHistory.replaceChildren();
  });

  updateColor(colorPicker.value);
}

function addColorToHistory(color) {
  const li = document.createElement('li');
  li.textContent = color;
  li.style.color = color;
  colorHistory.appendChild(li);
}