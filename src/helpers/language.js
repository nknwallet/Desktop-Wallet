const background = {
  wallet: {
    en: 'Wallet',
    zh: '钱包',
  },
  openSource: {
    en: 'Open Source',
    zh: '开源',
  },
  fast: {
    en: 'Fast',
    zh: '快速',
  },
  safe: {
    en: 'Safe',
    zh: '安全',
  },
};

const fields = {
  walletName: {
    en: 'Wallet name',
    zh: '钱包名称',
  },
  privateKey: {
    en: 'Private key',
    zh: '私钥',
  },
  password: {
    en: 'Password',
    zh: '密码',
  },
  confirmPassword: {
    en: 'Confirm password',
    zh: '确认密码',
  },
  eightToTwentyChars: {
    en: '8-20 characters',
    zh: '8-20个字符',
  },
  defaultToMyWallet: {
    en: 'default to MyWallet',
    zh: '默认为 MyWallet',
  },
  yourPrivateKey: {
    en: 'Your private key',
    zh: '你的私钥',
  },
  passwordOfTheWalletToOpen: {
    en: 'Password of the wallet to open',
    zh: '打开钱包的密码',
  },
  uploadWalletFile: {
    en: 'Upload wallet file',
    zh: '上传钱包文件',
  },
  walletFileToOpen: {
    en: 'Wallet file to open',
    zh: '钱包文件打开',
  },
};

const loginTitle = {
  restoreWallet: {
    en: 'Restore Wallet',
    zh: '恢复钱包',
  },
  restoreFromPrivateKey: {
    en: 'Restore from private key!',
    zh: '从私钥恢复！',
  },
  restore: {
    en: 'Restore',
    zh: '恢复',
  },
  openWallet: {
    en: 'Open Wallet',
    zh: '打开钱包',
  },
  open: {
    en: 'Open',
    zh: '打开',
  },
  createWallet: {
    en: 'Create Wallet',
    zh: '创造钱包',
  },
  createNewWallet: {
    en: 'Create New Wallet',
    zh: '创造新的钱包',
  },
  create: {
    en: 'Create',
    zh: '创建',
  },
};

const errors = {
  thisFieldIsNotValid: {
    en: 'This field is not valid.',
    zh: '此字段无效',
  },
  passwordAndConfirmNotTheSame: {
    en: 'Password and confirm password are not the same!',
    zh: '密码和确认密码不一样！',
  },
  fileFormatMustBe: {
    en: 'File format must be JSON or DAT.',
    zh: '文件格式必须是JSON或DAT',
  },
  noFileSelected: {
    en: 'No file selected!',
    zh: '没有选择文件！',
  },
  internetNotConnecting: {
    en: 'Internet not connecting!',
    zh: '互联网没有连接！',
  },
  pleaseCheckYourInternet: {
    en: 'Please check your connection to internet.',
    zh: '请检查您与互联网的连接',
  },
  pleaseEnterANumber: {
    en: 'Please enter a number.',
    zh: '请输入一个号码',
  },
  passwordIsIncorrect: {
    en: 'Password is incorrect.',
    zh: '密码不正确',
  },
  notEnoughBalance: {
    en: 'Not enough balance.',
    zh: '没有足够的余额',
  },
  invalidFileFormat: {
    en: 'Invalid file format.',
    zh: '文件格式无效',
  },
};

const dashboard = {
  block: {
    en: 'Block',
    zh: '块',
  },
  price: {
    en: 'Price',
    zh: '价钱',
  },
  lastTransactions: {
    en: 'Last Transactions',
    zh: '最后交易',
  },
  availableBalance: {
    en: 'Available Balance',
    zh: '可用余额',
  },
  showPrivateKey: {
    en: 'Show private key',
    zh: '显示私钥',
  },
  showingYourPrivateKey: {
    en: 'Showing your private key',
    zh: '显示您的私钥',
  },
  download: {
    en: 'Download',
    zh: '下载',
  },
  downloadWalletFromHere: {
    en: 'Download Wallet from here',
    zh: '从这里下载钱包',
  },
  backup: {
    en: 'Backup',
    zh: '备用',
  },
  send: {
    en: 'Send',
    zh: '发送',
  },
  address: {
    en: 'Address',
    zh: '地址',
  },
  name: {
    en: 'Name',
    zh: '名称',
  },
  account: {
    en: 'Account',
    zh: '帐户',
  },
};

const download = {
  downloadYourWallet: {
    en: 'Download your wallet file and save',
    zh: '下载您的钱包文件并保存',
  },
  thePrivateKey: {
    en: 'the private key',
    zh: '私钥',
  },
  yourAddress: {
    en: 'Your address',
    zh: '你的地址',
  },
  noteKeepYourPrivate: {
    en: 'Note: Keep your private key very safely, because anyone with the private key can rebuild this wallet!',
    zh: '注意：保密私钥Show非常安全，因为拥有私钥的任何人都可以重建这个钱包！',
  },
};

const modals = {
  transferNKNTo: {
    en: 'Transfer NKN to',
    zh: '将NKN转移到',
  },
  transferToAddress: {
    en: 'Transfer to address',
    zh: '转移到地址',
  },
  amount: {
    en: 'Amount',
    zh: '量',
  },
  howMuchNKNToTransfer: {
    en: 'How much NKN to transfer',
    zh: 'NKN要转移多少',
  },
  yourWalletPassword: {
    en: 'Your wallet password',
    zh: '你的钱包密码',
  },
  ok: {
    en: 'OK',
    zh: '好',
  },
  error: {
    en: 'Error',
    zh: '错误',
  },
  successfulSending: {
    en: 'Successful Sending',
    zh: '成功发送',
  },
  scanQrCode: {
    en: 'SCAN QRCODE',
    zh: '扫描二维码',
  },
  show: {
    en: 'Show',
    zh: '节目',
  },
};

export default {
  ...background,
  ...fields,
  ...loginTitle,
  ...dashboard,
  ...errors,
  ...download,
  ...modals,
};
