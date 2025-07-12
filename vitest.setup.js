// vitest.setup.js
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = require('crypto');
  globalThis.crypto.getRandomValues = (arr) => require('crypto').randomFillSync(arr);
}
