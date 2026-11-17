function changeContent() {
  const heading = document.querySelector('#main-heading');
  heading.textContent = 'Updated Heading Text!';

  const box = document.querySelector('#content-box');
  box.innerHTML = '<h2>New Subheading</h2><p>The <strong>HTML content</strong> has been successfully updated.</p>';
}