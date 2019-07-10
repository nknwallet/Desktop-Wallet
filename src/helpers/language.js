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
  contact: {
    en: 'Contact',
    zh: '联系',
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
  eightToTwelveChars: {
    en: '8-12 characters',
    zh: '8到12个字符',
  },
  defaultToMyWallet: {
    en: 'default to mywallet',
    zh: '缺省至我的钱包',
  },
  eightToTwentyChars: {
    en: '8-20 characters',
    zh: '8到20个字符',
  },
  yourPrivateKey: {
    en: 'Your private key',
    zh: '您的私钥',
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
    zh: '打开钱包文件',
  },
};

const loginTitle = {
  restoreWallet: {
    en: 'Restore Wallet',
    zh: '恢复钱包',
  },
  restoreFromPrivateKey: {
    en: 'Restore from private key!',
    zh: '从私钥恢复',
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
    zh: '创建钱包',
  },
  createNewWallet: {
    en: 'Create New Wallet',
    zh: '创建新钱包',
  },
  create: {
    en: 'Create',
    zh: '创建',
  },
  back: {
    en: 'Back',
    zh: '后退',
  },
  phoneWallet: {
    en: 'Phone Wallet',
    zh: '手机钱包',
  },
  desktopWallet: {
    en: 'Desktop Wallet',
    zh: '桌面钱包',
  },
  extensionWallet: {
    en: 'Extension Wallet',
    zh: '浏览器钱包',
  },
  howWouldYouLikeToAccessYourWallet: {
    en: 'How would you like to access your wallet?',
    zh: '用何种方式访问您的钱包？',
  },
  crossPlatformDesktopWallet: {
    en: 'A cross-platform desktop wallet',
    zh: '跨平台桌面钱包',
  },
  openWithDatFile: {
    en: 'Open with a .dat file',
    zh: '打开后缀名是dat的文件',
  },
  connectViaExtension: {
    en: 'Connect via browser extension',
    zh: '通过浏览器扩展连接',
  },
  ledger: {
    en: 'Ledger',
    zh: '莱杰',
  },
  connectViaLedger: {
    en: 'Connect via ledger',
    zh: '通过账本连接',
  },
  comingSoon: {
    en: 'Coming Soon!',
    zh: '即将到来',
  },
};

const errors = {
  thisFieldIsNotValid: {
    en: 'This field is not valid.',
    zh: '无效字段',
  },
  passwordAndConfirmNotTheSame: {
    en: 'Password and confirm password are not the same!',
    zh: '确认密码不匹配',
  },
  fileFormatMustBe: {
    en: 'File format must be JSON or DAT.',
    zh: '必须是JSON或DAT文件格式',
  },
  noFileSelected: {
    en: 'No file selected!',
    zh: '没有选中文件',
  },
  internetNotConnecting: {
    en: 'Internet not connecting!',
    zh: '没有连接网络',
  },
  pleaseCheckYourInternet: {
    en: 'Please check your connection to internet.',
    zh: '请检查您的网络连接',
  },
  pleaseEnterANumber: {
    en: 'Please enter a number.',
    zh: '请输入数字',
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
    zh: '无效的文件格式',
  },
  addressIsInvalid: {
    en: 'Address is invalid.',
    zh: '地址无效',
  },
  fieldMustBeEightToTwelveCharacters: {
    en: 'Field must be 8-12 characters',
    zh: '该字段必须为8-20个字符', // not sure
  },
  onlyLowerCaseLetters: {
    en: 'Field must be only lowercase letters',
    zh: '字段必须只是小写字母', // not sure
  },
};

const dashboard = {
  block: {
    en: 'Block',
    zh: '区块',
  },
  price: {
    en: 'Price',
    zh: '价格',
  },
  lastTransactions: {
    en: 'Last Transactions',
    zh: '最后一笔交易',
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
    zh: '备份',
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
    zh: '账户',
  },
  height: {
    en: 'Height',
    zh: '高度', // not sure
  },
  hash: {
    en: 'Hash',
    zh: '哈希',
  },
  value: {
    en: 'Value',
    zh: '价值',
  },
  time: {
    en: 'Time',
    zh: '时间',
  },
  cancel: {
    en: 'Cancel',
    zh: '取消',
  },
  confirm: {
    en: 'Confirm',
    zh: '确认',
  },
  total: {
    en: 'Total',
    zh: '总计',
  },
  fee: {
    en: 'Transaction Fee',
    zh: '费用',
  },
  youWillSend: {
    en: 'You\'ll Send:',
    zh: '您将发送：',
  },
  to: {
    en: 'To',
    zh: '至',
  },
  from: {
    en: 'From',
    zh: '从',
  },
  confirmTransaction: {
    en: 'Confirm Transaction',
    zh: '确认交易',
  },
  connectWallet: {
    en: 'Connect Wallet',
    zh: '连接钱包',
  },
};

const download = {
  downloadYourWallet: {
    en: 'Download your wallet file and save',
    zh: '下载您的钱包文件并保存私钥',
  },
  thePrivateKey: {
    en: 'the private key',
    zh: '',
  },
  yourAddress: {
    en: 'Your address',
    zh: '您的地址',
  },
  noteKeepYourPrivate: {
    en: 'Note: Keep your private key very safely, because anyone with the private key can rebuild this wallet!',
    zh: '提示：请安全保管您的私钥，任何人知道您的私钥后都可以动用钱包资产',
  },
};

const modals = {
  transferNKNTo: {
    en: 'Transfer NKN to',
    zh: '转NKN至',
  },
  transferToAddress: {
    en: 'Transfer to address',
    zh: '转至地址',
  },
  amount: {
    en: 'Amount',
    zh: '金额',
  },
  howMuchNKNToTransfer: {
    en: 'How much NKN to transfer',
    zh: '转多少NKN',
  },
  yourWalletPassword: {
    en: 'Your wallet password',
    zh: '您的钱包密码',
  },
  ok: {
    en: 'OK',
    zh: '确认',
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
    en: 'SCAN ME',
    zh: '扫描二维码',
  },
  show: {
    en: 'Show',
    zh: '显示',
  },
  transactionSent: {
    en: 'Transaction Sent',
    zh: '已发送交易', // not sure
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
