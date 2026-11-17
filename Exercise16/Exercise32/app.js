
const mainTitle = document.querySelector('.title');
console.log('Single Element (querySelector):', mainTitle);


const firstListItem = document.querySelector('ul li.list-item');
console.log('First List Item:', firstListItem);


const allListItems = document.querySelectorAll('.list-item');
console.log('All List Items (querySelectorAll):', allListItems);


allListItems.forEach((item, index) => {
  console.log(`Item ${index + 1}:`, item.textContent);
});