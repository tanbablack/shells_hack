// Firebase設定
// 全ファイルで共通利用: /index.html, /feedback/index.html, /followup/index.html, /admin/index.html

const firebaseConfigPrd = {
  apiKey: "AIzaSyCh3-lws2ZISsPRQGArZXEOY8QixJHN_pk",
  authDomain: "shells-hack.firebaseapp.com",
  databaseURL: "https://shells-hack-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shells-hack",
  storageBucket: "shells-hack.firebasestorage.app",
  messagingSenderId: "137176989360",
  appId: "1:137176989360:web:77c86351c7840559b24575",
  measurementId: "G-5E82X9D6G9"
};

// 許可ドメインホワイトリスト
const ALLOWED_DOMAINS = [
  'shells-hack.com',
  'stg.shells-hack.com'
];

// 環境判定
const currentHostname = location.hostname;
const isAllowedDomain = ALLOWED_DOMAINS.includes(currentHostname);

// 許可ドメイン以外はFirebase無効（ローカル含む）
const firebaseDisabled = !isAllowedDomain;
const firebaseConfig = firebaseDisabled ? null : firebaseConfigPrd;

console.log('[ENV]', {
  hostname: currentHostname,
  allowed: isAllowedDomain,
  disabled: firebaseDisabled,
  project: firebaseConfig?.projectId || 'N/A'
});
