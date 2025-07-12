// vitest.setup.js
import { webcrypto } from 'node:crypto';

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}
