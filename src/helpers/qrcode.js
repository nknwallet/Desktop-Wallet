import qrcode from 'qrcode';

export default string => new Promise((resolve) => {
  qrcode.toDataURL(string)
    .then((url) => {
      resolve(url);
    });
});
