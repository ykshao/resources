var element = document.querySelector('h2');
var button = document.createElement('button');
button.innerHTML = 'Click me';

element.insertAdjacentElement('beforebegin', button);

button.addEventListener('click', function() {
  alert('Button clicked!');
});
