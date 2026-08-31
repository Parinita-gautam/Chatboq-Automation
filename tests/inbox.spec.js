import { test, expect } from '@playwright/test';
import { AUTH_COOKIE_NAME } from '../utils/auth';
import { InboxPage } from '../pages/InboxPage';

const ORG_ID = '7e4e3977-3e16-4907-903e-14d6f5ebf381';

// test('Session UUID is loaded and inbox is accessible', async ({ page, context }) => {
//   const cookies = await context.cookies();
//   const sessionCookie = cookies.find((cookie) => cookie.name === AUTH_COOKIE_NAME);

//   expect(sessionCookie).toBeTruthy();
//   expect(sessionCookie.value).toBeTruthy();
//   console.log('✓ Session UUID loaded:', sessionCookie.value);

//   const inboxUrl = `https://stagingv2.chatboq.com/app/${ORG_ID}/default-inbox`;

//   await page.goto(inboxUrl, { waitUntil: 'domcontentloaded' });

//   await page.waitForURL(/default-inbox/);
//   await expect(page).toHaveURL(/default-inbox/);

//   const url = page.url();
//   console.log('Inbox URL:', url);

//   expect(url).toContain(`/app/${ORG_ID}/default-inbox`);
//   expect(url).not.toContain('/app/undefined/');
//   console.log('✓ Inbox accessible');
// });

test('inbox', async ({ page }) => {
    const inboxPage = new InboxPage(page);
    await page.goto(`https://stagingv2.chatboq.com/app/${ORG_ID}/default-inbox`);
  await page.waitForURL(/default-inbox/);
  try{
  await inboxPage.visitor();
  await inboxPage.messagebox();
  await inboxPage.bulletpointlist();
  await inboxPage.bulletnolist();
  await inboxPage.inboxlink();
  await inboxPage.voice();
  await inboxPage.attachments();
  await inboxPage.internalnotes();
  await inboxPage.quickresponse();
  await inboxPage.markedAsResolved();
  await inboxPage.snoozeconversation();
  await inboxPage.banvisitor();
  await inboxPage.subInbox();
  await inboxPage.StatusFilter();
  await inboxPage.Filters();
  await inboxPage.channel();
  await inboxPage.searchConversation();
  await inboxPage.activeInactive();
  }
  finally{
     inboxPage.printTestSummary();
  }
});
