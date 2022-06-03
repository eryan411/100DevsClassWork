import fetch from 'node-fetch';

const promise = fetch('Place API here')

promise
    .then(res => res.json())
    .then(user => console.log(':)', user.title))
    .catch(err => console.error(':(', err));

console.log('Synchronous')