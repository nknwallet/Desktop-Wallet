import fetch from 'node-fetch';

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });

  return global.btoa(binary);
}

export default string => new Promise((resolve, reject) => {
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${string}`,
  )
    .then((res) => {
      res.arrayBuffer().then((buffer) => {
        const base64Flag = 'data:image/png;base64,';
        const imageStr = arrayBufferToBase64(buffer);

        resolve(base64Flag + imageStr);
      });
    })
    .catch((error) => {
      reject(error);
    });
});
