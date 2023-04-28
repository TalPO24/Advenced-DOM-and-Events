'use strict';
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

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

//* Button scrolling
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect(); // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    //* Scrolling
    // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    section1.scrollIntoView({ behavior: 'smooth' });
});


//* Page Navigation 
// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault()
//         const id = this.getAttribute('href')
//         console.log(id)
//         document.querySelector(id).scrollIntoView({ // The Element interface's scrollIntoView() method scrolls the element's ancestor containers such that the element on which scrollIntoView() is called is visible to the user.
//             behavior: 'smooth'
//         })
//     })
// })

// 1. Add event listener to common parent element 
// 2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault()

    //Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href')
        console.log(id)
        document.querySelector(id).scrollIntoView({ // The Element interface's scrollIntoView() method scrolls the element's ancestor containers such that the element on which scrollIntoView() is called is visible to the user.
            behavior: 'smooth'
        })
    }
})

//* Tabbed component 
tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab')

    // Guard clause
    if (!clicked) return

    // Remove tabs
    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))

    // Activate tab
    clicked.classList.add('operations__tab--active')

    // Activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//* Menu fade animation
const handleHover = function(e) {
        if (e.target.classList.contains('nav__link')) {
            const link = e.target
            const siblings = link.closest('.nav').querySelectorAll('.nav__link')
            const logo = link.closest('nav').querySelector('img')

            siblings.forEach(el => {
                if (el !== link) el.style.opacity = this
            })
            logo.style.opacity = this
        }
    }
    // Passing "arguments" into handler 
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))


//* Sticky navigation 
const initCoords = section1.getBoundingClientRect()
console.log(initCoords)

window.addEventListener('scroll', function() {
    console.log(window.scrollY)

    if (window.scrollY > initCoords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky')
})


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



/*
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

*/


/*
//* Event Propagation: Bubbling and Capturing
// rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
console.log(randomColor(0, 255))

document.querySelector('.nav__link').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor()
    console.log('LINK', e.target, e.currentTarget)
    console.log(e.currentTarget === this)

    // Stop propagation
    // e.stopPropagation()  --  // The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. If you want to stop those behaviors, see the preventDefault() method. It also does not prevent propagation to other event-handlers of the current element.
})
document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor()
    console.log('CONTAINER', e.target, e.currentTarget)
})
document.querySelector('.nav').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor()
    console.log('NAV', e.target, e.currentTarget)
})
*/

/*
//* DOM Traversing
const h1 = document.querySelector('h1')

//* Going downwards: child
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color = 'white' // The Element.firstElementChild read-only property returns an element's first child Element, or null if there are no child elements.

h1.lastElementChild.style.color = 'orangered' // The Element.lastElementChild read-only property returns an element's last child Element, or null if there are no child elements.

//* Going upwards: parents
console.log(h1.parentNode)
console.log(h1.parentElement) // The read-only parentElement property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element

h1.closest('.header').style.background = 'var(--gradient-secondary)' // The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

h1.closest('h1').style.background = 'var(--gradient-primary)'

//* Going sideways: siblings
console.log(h1.previousElementSibling) // The Element.previousElementSibling read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list.

console.log(h1.nextElementSibling) // The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
    if (el !== h1) el.style.transform = 'scale(0.5)'
})
*/