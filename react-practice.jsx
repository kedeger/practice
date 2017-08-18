//Codeacademy React Lesson:

//class in html is className in JSX
//JSX looks like HTML except for that its found in a JS file
//self closing tags are NOT optional in JSX. for EX: <img/> and <br/> and <input/>



import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose}/>;

ReactDOM.render(
  gooseImg,
  document.getElementById('app')
);

//in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
  <img 
    onClick={makeDoggy}
    src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
    alt="kitty" />
);

ReactDOM.render(kitty,
               document.getElementById('app')
);

//if statements cannot take place inside JSX code

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty}/>;
}
else {
  img = <img src={pics.doggy}/>;
}

ReactDOM.render(
  img,
  document.getElementById('app')
);

//But ternaries are a more compact way of writing conditionasls:

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
  img, 
  document.getElementById('app')
);

//Accessing arrays is also a bit different:
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
<li>{person}</li>);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,                             document.getElementById('app')
);

// A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.

// keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.

// Not all lists need to have keys. A list needs keys if either of the following are true:

// The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
// A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
<li key={'person_' + i}>{person}</li>);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,                             document.getElementById('app')
);




//How to use React without JSX:
The following JSX expression:

const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);