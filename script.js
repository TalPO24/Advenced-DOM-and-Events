'use strict';
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/*
//* Selecting, Creating, and Deleting Elements
// Selecting elements
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('#section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))

// Creating and inserting elements 
const message = document.createElement('div')
message.classList.add('cookie-message')
message.textContent = 'we use cookies to improve functionallity and analytics.'
message.innerHTML = 'we use cookies to improve functionallity and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// The Element.prepend() method inserts a set of Node objects or string objects before the first child of the Element. String objects are inserted as equivalent Text nodes.
//  header.prepend(message)

// The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.
header.append(message)

// header.before(message)
// header.after(message)

// Delete elements
document.querySelector('.btn--close-cookie').
addEventListener('click', function() {
    // message.remove() // The Element.remove() method removes the element from the DOM.
    message.parentElement.removeChild(message)
})
*/


/*
//* Styles Attributes and Classes
// Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'
console.log(message.style.color)
console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

document.documentElement.style.setProperty('--color-primary', 'orangered') // The CSSStyleDeclaration.setProperty() method interface sets a new value for a property on a CSS style declaration object.

// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo'

// Non-standard
console.log(logo.designer)
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'Bankist')

console.log(logo.src)
console.log(logo.getAttribute('src'))

const link = document.querySelector('.twitter-link')
console.log(link.href)
console.log(link.getAttribute('href'))

// Data attributes
console.log(logo.dataset.versionNumber)

// Classes
logo.classList.add("c", "j")
logo.classList.remove("c", "j")
logo.classList.toggle("c")
logo.classList.contains("c")

//* Don't use 
// logo.className = 'Jonas'
*/

//* Types of Events and Event Handlers
const alertH1 = function(e) {
    alert('addEventListener: Great you are reading the heading ')
}

const h1 = document.addEventListener('mouseenter', alertH1) // The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.


// old School / old ways 
// h1.onmouseenter = function(e) {
//     alert('addEventListener: Great you are reading the heading ')
// }

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)