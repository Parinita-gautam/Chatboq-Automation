const { request } = require('@playwright/test');
const { AUTH_COOKIE_NAME, BASE_URL, getSessionId, saveStorageState } = require('./utils/auth');

module.exports = async function globalSetup() {
  const sessionId = getSessionId();
  const storageStatePath = saveStorageState(sessionId);
  const api = await request.newContext({
    baseURL: 'https://api.stagingv2.chatboq.com',
    extraHTTPHeaders: { Cookie: `${AUTH_COOKIE_NAME}=${sessionId}` },
  });

  try {
    const response = await api.get('/api/v1/auth/me');
    if (!response.ok()) {
      throw new Error(
        `Chatboq session is invalid or expired (auth API returned ${response.status()}). ` +
        'Log in again, copy the new session_uuid into session.json or set CHATBOQ_SESSION_ID, then rerun the test.'
      );
    }

    console.log(`Session accepted by auth API (${response.status()}).`);
  } finally {
    await api.dispose();
  }

  console.log(`Chatboq session loaded for ${BASE_URL}.`);
  console.log(`Browser storage state saved to: ${storageStatePath}`);
};
