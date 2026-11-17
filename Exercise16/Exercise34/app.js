function updateAttributes() {
  const imgElement = document.querySelector('#my-image');
  if (!imgElement) return;

  imgElement.setAttribute('src', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=60');
  imgElement.setAttribute('alt', 'Updated landscape image');

  console.log('Image source updated to:', imgElement.getAttribute('src'));
}

function toggleDarkMode() {
  const body = document.querySelector('#main-body');
  if (!body) return;

  body.classList.toggle('dark-mode');
}