var element = document.querySelector('h2');
var button = document.createElement('button');
button.innerHTML = 'Click me';

element.insertAdjacentElement('beforebegin', button);

button.addEventListener('click', function() {
  alert('Button clicked!');
  getInfo();
});

async function getInfo() {
  const response = await fetch("https://api.uomg.com/api/rand.avatar?sort=男&format=json");
  const jsonData = await response.json();
  console.log('resp', jsonData);
}





