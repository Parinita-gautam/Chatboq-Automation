const fs = require('fs');
const path = require('path');

const AUTH_DIR = path.resolve(__dirname, '..', '.auth');
const SESSION_ID_FILE = path.join(AUTH_DIR, 'session_id.txt');
const STORAGE_STATE_FILE = path.join(AUTH_DIR, 'storage-state.json');
const LEGACY_STATE_FILE = path.resolve(__dirname, '..', 'session.json');
const AUTH_COOKIE_NAME = 'session_uuid';
const BASE_URL = 'https://stagingv2.chatboq.com';

function validSessionId(sessionId) {
  const value = String(sessionId || '').trim();
  if (!value || path.basename(value) !== value) {
    throw new Error('Session ID must be a non-empty filename-safe value.');
  }
  return value;
}

function saveSessionId(sessionId) {
  const value = validSessionId(sessionId);
  fs.mkdirSync(AUTH_DIR, { recursive: true });
  fs.writeFileSync(SESSION_ID_FILE, `${value}\n`, 'utf8');
  return value;
}

function legacySessionId() {
  if (!fs.existsSync(LEGACY_STATE_FILE)) return undefined;
  const state = JSON.parse(fs.readFileSync(LEGACY_STATE_FILE, 'utf8'));
  return state.cookies?.find((cookie) => cookie.name === AUTH_COOKIE_NAME)?.value;
}

function getSessionId() {
  if (process.env.CHATBOQ_SESSION_ID) return saveSessionId(process.env.CHATBOQ_SESSION_ID);

  // `session.json` is the manually refreshed browser session. Prefer it over
  // the cached value so a new session is picked up without deleting .auth.
  const legacy = legacySessionId();
  if (legacy) return saveSessionId(legacy);

  if (fs.existsSync(SESSION_ID_FILE)) return validSessionId(fs.readFileSync(SESSION_ID_FILE, 'utf8'));

  throw new Error('No Chatboq session ID found. Set CHATBOQ_SESSION_ID once; it will be saved in .auth/session_id.txt.');
}

function saveStorageState(sessionId) {
  const value = validSessionId(sessionId);
  const state = {
    cookies: [{ name: AUTH_COOKIE_NAME, value, domain: '.chatboq.com', path: '/', expires: -1, httpOnly: false, secure: true, sameSite: 'Lax' }],
    origins: [{ origin: BASE_URL, localStorage: [{ name: AUTH_COOKIE_NAME, value }] }],
  };
  fs.mkdirSync(AUTH_DIR, { recursive: true });
  fs.writeFileSync(STORAGE_STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
  return STORAGE_STATE_FILE;
}

module.exports = { AUTH_COOKIE_NAME, BASE_URL, STORAGE_STATE_FILE, getSessionId, saveStorageState };
