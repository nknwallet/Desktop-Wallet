import fetch from 'node-fetch';

export default () => new Promise((resolve, reject) => {
  const now = Date.now();
  const week = 1000 * 60 * 60 * 24 * 7 * 52;
  let link = 'https://graphs2.coinmarketcap.com/currencies/nkn';

  link += `/${now - week}/${now}`;

  fetch(link)
    .then(res => res.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});
