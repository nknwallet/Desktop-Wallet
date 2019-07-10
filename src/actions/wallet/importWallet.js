import qrCode from 'Root/helpers/qrcode';

export default async (string, password) => {
  const json = JSON.parse(string);

  json.password = password;

  const qr = await qrCode(JSON.stringify(json));

  return qr;
};
