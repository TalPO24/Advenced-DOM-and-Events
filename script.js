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