import fetch from 'node-fetch';

export default async () => new Promise((resolve, reject) => {
  fetch('https://api.coinmarketcap.com/v1/ticker/nkn/?convert=USD')
    .then(res => res.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});
