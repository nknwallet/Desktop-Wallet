import checkToken from 'Root/actions/wallet/checkToken';

export default async ({ push }) => {
  if (!global.navigator.onLine) {
    return false;
  }

  await checkToken();

  push('/');

  return true;
};
