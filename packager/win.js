const electronInstaller = require('electron-winstaller');

const resultPromise = electronInstaller.createWindowsInstaller({
  exe: 'NKNWallet.exe',
  authors: 'NKNWallet',
  outputDirectory: './dist/installer',
  appDirectory: './dist/NKNWallet-win32-x64',
});

resultPromise
  .then(
    () => console.log('Successful'),
    (e) => console.log(`Error: ${e.message}`)
  );
