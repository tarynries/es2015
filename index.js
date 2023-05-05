import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import fruits from './foods';
import { remove, choice } from './helpers'
import App from './App';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit} please`)
console.log(`Here you go ${fruit}`)
console.log(`Delicious may I have another?`)

let remaining = remove(fruit, fruits);

console.log(`Sorry we are out. We have ${remaining.length} left`);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);