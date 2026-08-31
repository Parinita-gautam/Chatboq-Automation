import { test, expect } from '@playwright/test';
import { InboxPage } from '../pages/InboxPage';

const ORG_ID = '7e4e3977-3e16-4907-903e-14d6f5ebf381';

test.describe('Inbox - Negative Test Cases', () => {

    let inboxPage;

    test.beforeEach(async ({ page }) => {

        inboxPage = new InboxPage(page);

        await page.goto(`https://stagingv2.chatboq.com/app/${ORG_ID}/default-inbox`);
        await page.waitForURL(/default-inbox/);
        await inboxPage.visitor();
    });


    // test('NEG-001 - Send empty message', async ({ page }) => {

    //     await inboxPage.messagebox1.fill('');
    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-002 - Send whitespace message', async ({ page }) => {

    //     await inboxPage.messagebox1.fill('     ');
    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });

    // test('NEG-003 - Send 10000 character message', async ({ page }) => {

    //     const longMessage = 'Negative '.repeat(10000).slice(0, 10000);
    //     expect(longMessage.length).toBe(10000);
    //     await inboxPage.messagebox1.fill(longMessage);
    //     await inboxPage.sendmessage.click();
    //     await expect(page.getByText('Message is too long. Maximum 10000 characters allowed.', { exact: true })).toBeVisible({ timeout: 5000 });
    // });

    // test('NEG-004 - Send newline-only message', async () => {

    //     await inboxPage.messagebox1.fill('\n\n\n');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });

    // test('NEG-005 - Send message containing only tabs', async () => {

    //     await inboxPage.messagebox1.fill('\t\t\t');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });

    // test('NEG-006 - Verify send button remains disabled after clearing message', async () => {

    //     await inboxPage.messagebox1.fill('Temporary message');

    //     await inboxPage.messagebox1.fill('');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });



    // // ============================================================
    // // MESSAGE FORMATTING NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-007 - Open formatting without message', async () => {

    //     await inboxPage.messageformatting.click();

    //     await expect(inboxPage.messagebox1).toHaveText('');
    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-008 - Apply bold formatting to empty message', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.bold.click();

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-009 - Apply italic formatting to empty message', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.italic.click();

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-010 - Apply underline formatting to empty message', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.underline.click();

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // ============================================================
    // LINK NEGATIVE TEST CASES
    // ============================================================

    // test('NEG-011 - Insert link without message', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.link.click();

    //     await inboxPage.linkurl.fill('https://example.com');

    //     await expect(inboxPage.insertlink).toBeDisabled();
    // });


    // test('NEG-012 - Insert link with empty URL', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.messagebox1.fill('Testing empty URL');

    //     await inboxPage.messagebox1.press('Control+a');

    //     await inboxPage.link.click();

    //     await inboxPage.linkurl.fill('');

    //     await expect(inboxPage.insertlink).toBeDisabled();
    // });


    // test('NEG-013 - Insert link with invalid URL', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.messagebox1.fill('Testing invalid URL');

    //     await inboxPage.messagebox1.press('Control+a');

    //     await inboxPage.link.click();

    //     await inboxPage.linkurl.fill('invalid-url');

    //     await expect(inboxPage.insertlink).toBeDisabled();
    // });


    // test('NEG-014 - Insert link with incomplete URL', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.messagebox1.fill('Testing incomplete URL');

    //     await inboxPage.messagebox1.press('Control+a');

    //     await inboxPage.link.click();

    //     await inboxPage.linkurl.fill('https://');

    //     await expect(inboxPage.insertlink).toBeDisabled();
    // });


    // test('NEG-015 - Insert link with spaces in URL', async () => {

    //     await inboxPage.messageformatting.click();

    //     await inboxPage.messagebox1.fill('Testing URL');

    //     await inboxPage.messagebox1.press('Control+a');

    //     await inboxPage.link.click();

    //     await inboxPage.linkurl.fill('https://example .com');

    //     await expect(inboxPage.insertlink).toBeDisabled();
    // });


    // // ============================================================
    // // BULLET / NUMBER LIST NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-016 - Send empty bullet list', async () => {

    //     await inboxPage.messageformatting.click();
    //     await inboxPage.bulletpoint.click();

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-017 - Send whitespace bullet list', async () => {
    //     await inboxPage.messageformatting.click();

    //     await inboxPage.bulletpoint.click();

    //     await inboxPage.messagebox1.fill('   ');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-018 - Send empty numbered list', async () => {
    //     await inboxPage.messageformatting.click();

    //     await inboxPage.numberlist.click();

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-019 - Send whitespace numbered list', async () => {
    //     await inboxPage.messageformatting.click();

    //     await inboxPage.numberlist.click();

    //     await inboxPage.messagebox1.fill('     ');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // // ============================================================
    // // VOICE MESSAGE NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-020 - Cancel voice recording before sending', async () => {

    //     await inboxPage.voicemessage.click();

    //     await expect(inboxPage.voicedelete).toBeVisible();

    //     await inboxPage.voicedelete.click();

    //     await expect(inboxPage.voicedelete).not.toBeVisible();
    // });


    // test('NEG-021 - Voice recording should not send after deletion', async () => {

    //     await inboxPage.voicemessage.click();

    //     await inboxPage.voicedelete.click();

    //     await expect(inboxPage.messagebox1).toHaveText('');
    // });


    // test('NEG-022 - Prevent empty voice message from being submitted', async () => {

    //     await inboxPage.voicemessage.click();

    //     await inboxPage.voicedelete.click();

    //     await expect(inboxPage.voicesend).not.toBeVisible();
    // });


    // // ============================================================
    // // ATTACHMENT NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-023 - Open attachment menu without selecting file', async () => {

    //     await inboxPage.addattachment.click();

    //     await expect(inboxPage.attach).toBeVisible();

    //     await expect(inboxPage.messagebox1).toHaveText('');
    // });


    // test('NEG-024 - Attachment should not be sent without message/file', async () => {

    //     await inboxPage.addattachment.click();

    //     await inboxPage.attach.click();

    //     await expect(inboxPage.messagebox1).toHaveText('');
    // });


    // test('NEG-025 - Invalid attachment path', async () => {

    //     const fileChooserPromise =
    //         inboxPage.page.waitForEvent('filechooser');

    //     await inboxPage.addattachment.click();
    //     await inboxPage.attach.click();

    //     const fileChooser = await fileChooserPromise;

    //     await expect(
    //         fileChooser.setFiles('C:\\invalid\\file\\does-not-exist.png')
    //     ).rejects.toThrow();
    // });


    // // ============================================================
    // // INTERNAL NOTES NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-026 - Send empty internal note', async () => {

    //     await inboxPage.replybutton.click();

    //     await inboxPage.internalnote.click();

    //     await inboxPage.messagebox1.fill('');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-027 - Send whitespace-only internal note', async () => {

    //     await inboxPage.replybutton.click();

    //     await inboxPage.internalnote.click();

    //     await inboxPage.messagebox1.fill('     ');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // test('NEG-028 - Internal note should not be sent without content', async () => {

    //     await inboxPage.replybutton.click();

    //     await inboxPage.internalnote.click();

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // ============================================================
    // QUICK RESPONSE NEGATIVE TEST CASES
    // ============================================================

    // test('NEG-029 - Quick response shortcut with only slash', async () => {

    //     await inboxPage.messagebox1.fill('/');

    //     await expect(inboxPage.messagebox1).not.toHaveValue('/');

    // });


    // test('NEG-030 - Invalid quick response shortcut', async () => {

    //     await inboxPage.messagebox1.fill('/invalidquickresponse');

    //     await inboxPage.messagebox1.press('Enter');

    //     await expect(inboxPage.messagebox1).toHaveValue('/invalidquickresponse');
    // });


    // test('NEG-031 - Empty quick response should not be sent', async () => {

    //     await inboxPage.messagebox1.fill('');

    //     await expect(inboxPage.sendmessage).toBeDisabled();
    // });


    // ============================================================
    // RESOLVE / UNRESOLVE NEGATIVE TEST CASES
    // ============================================================

    // test('NEG-032 - Resolve conversation with empty subject', async () => {

    //     if (await inboxPage.resolveConvo.isVisible()) {

    //         await inboxPage.resolveConvo.click();

    //         await inboxPage.subject.fill('');

    //         await inboxPage.remarks.fill(
    //             'Resolving conversation negative test'
    //         );

    //         await expect(inboxPage.subjectRequiredError).toBeVisible();
    //     }
    // });


    // test('NEG-033 - Resolve conversation with empty remarks', async () => {

    //     if (await inboxPage.resolveConvo.isVisible()) {

    //         await inboxPage.resolveConvo.click();

    //         await inboxPage.subject.fill('Test subject');

    //         await inboxPage.remarks.fill('');

    //         await expect(inboxPage.resolved).toBeDisabled();
    //     }
    // });


    // test('NEG-034 - Resolve conversation with empty subject and remarks', async () => {

    //     if (await inboxPage.resolveConvo.isVisible()) {

    //         await inboxPage.resolveConvo.click();

    //         await inboxPage.subject.fill('');
    //         await inboxPage.remarks.fill('');

    //         await expect(inboxPage.resolved).toBeDisabled();
    //     }
    // });


    // test('NEG-035 - Resolve conversation with whitespace subject', async () => {

    //     if (await inboxPage.resolveConvo.isVisible()) {

    //         await inboxPage.resolveConvo.click();

    //         await inboxPage.subject.fill('     ');
    //         await inboxPage.remarks.fill('Test remarks');

    //         await expect(inboxPage.resolved).toBeDisabled();
    //     }
    // });


    // test('NEG-036 - Resolve conversation with whitespace remarks', async () => {

    //     if (await inboxPage.resolveConvo.isVisible()) {

    //         await inboxPage.resolveConvo.click();

    //         await inboxPage.subject.fill('Test subject');
    //         await inboxPage.remarks.fill('     ');

    //         await expect(inboxPage.resolved).toBeDisabled();
    //     }
    // });


    // // ============================================================
    // // SNOOZE NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-037 - Snooze without selecting duration', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.snooze.click();

    //     await inboxPage.snoozereason.fill(
    //         'Testing snooze without duration'
    //     );

    //     await expect(inboxPage.snoozeconfirm).toBeDisabled();
    // });


    // test('NEG-038 - Snooze with empty reason', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.snooze.click();

    //     await inboxPage.snnozedfor.click();

    //     await inboxPage.snoozereason.fill('');

    //     await expect(inboxPage.snoozeconfirm).toBeDisabled();
    // });


    // test('NEG-039 - Snooze with whitespace reason', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.snooze.click();

    //     await inboxPage.snnozedfor.click();

    //     await inboxPage.snoozereason.fill('     ');

    //     await expect(inboxPage.snoozeconfirm).toBeDisabled();
    // });


    // test('NEG-040 - Snooze with extremely long reason', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.snooze.click();

    //     await inboxPage.snnozedfor.click();

    //     const reason256 = 'A '.repeat(256);

    //     await inboxPage.snoozereason.fill(reason256);

    //     const enteredReason = await inboxPage.snoozereason.inputValue();

    //     console.log('Expected:', reason256.length);
    //     console.log('Actual:', enteredReason.length);
    //     console.log('Value:', enteredReason);

    //     expect(enteredReason.length).toBe(200);

    //     await expect(inboxPage.snoozeconfirm).toBeEnabled();
    // });


    // ============================================================
    // BAN / UNBAN VISITOR NEGATIVE TEST CASES
    // ============================================================

    // test('NEG-041 - Ban visitor with empty reason', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.ipban.click();

    //     await inboxPage.ipreason.fill('');

    //     await expect(inboxPage.banconfirm).toBeDisabled();
    // });


    // test('NEG-042 - Ban visitor with whitespace reason', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.ipban.click();

    //     await inboxPage.ipreason.fill('     ');

    //     await expect(inboxPage.banconfirm).toBeDisabled();
    // });


    // test('NEG-043 - Ban visitor with excessively long reason', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.ipban.click();

    //     const reason = 'Banning visitor '.repeat(1000);

    //     await inboxPage.ipreason.fill(reason);

    //     const enteredReason = await inboxPage.ipreason.inputValue();

    // expect(enteredReason.length).toBeLessThan(reason.length);
    // });


    // ============================================================
    // SUB-INBOX NEGATIVE TEST CASES
    // ============================================================

    // test('NEG-044 - Open move-to-inbox menu without selecting destination', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.moveToSubInbox.click();

    //     await expect(inboxPage.support).toBeVisible();
    //     await expect(inboxPage.backToGeneral).toBeVisible();
    // });


    // test('NEG-045 - Do not move conversation when destination is not selected', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.moveToSubInbox.click();

    //     await expect(inboxPage.support).toBeVisible();

    //     // Close menu without selecting an inbox.
    //     await inboxPage.page.keyboard.press('Escape');

    //     await expect(inboxPage.visitor1).toBeVisible();
    // });


    // ============================================================
    // STATUS FILTER NEGATIVE TEST CASES
    // ============================================================

    // test('NEG-046 - Status filter should not have invalid option', async () => {

    //     await inboxPage.filter.click();

    //     await expect(
    //         inboxPage.page.getByRole(
    //             'menuitemradio',
    //             { name: 'Invalid Status', exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // test('NEG-047 - Apply Unread filter and verify invalid status is absent', async () => {

    //     await inboxPage.filter.click();

    //     await inboxPage.unreadfilter.click();

    //     await expect(
    //         inboxPage.page.getByRole(
    //             'menuitemradio',
    //             { name: 'Invalid', exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // test('NEG-048 - Apply Unresolved filter and verify invalid status is absent', async () => {

    //     await inboxPage.filter.click();

    //     await inboxPage.unresolvefilter.click();

    //     await expect(
    //         inboxPage.page.getByRole(
    //             'menuitemradio',
    //             { name: 'Invalid', exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // // ============================================================
    // // ASSIGNMENT FILTER NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-049 - Assignment filter should not contain invalid option', async () => {

    //     await inboxPage.MainAllFilter.click();

    //     await expect(
    //         inboxPage.page.getByRole(
    //             'menuitemradio',
    //             { name: 'Invalid Assignment', exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // test('NEG-050 - Assigned to me filter should not show unassigned conversation', async () => {

    //     await inboxPage.MainAllFilter.click();

    //     await inboxPage.assignToMefilter.click();

    //     await expect(
    //         inboxPage.page.getByText('Invalid Unassigned Conversation')
    //     ).toHaveCount(0);
    // });


    // // ============================================================
    // // CHANNEL FILTER NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-051 - Channel filter should not contain invalid channel', async () => {

    //     await inboxPage.channelFilter.click();

    //     await expect(
    //         inboxPage.page.getByRole(
    //             'menuitemcheckbox',
    //             { name: 'Invalid Channel', exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // test('NEG-052 - Invalid channel should not be selectable', async () => {

    //     await inboxPage.channelFilter.click();

    //     const invalidChannel =
    //         inboxPage.page.getByRole(
    //             'menuitemcheckbox',
    //             { name: 'Invalid', exact: true }
    //         );

    //     await expect(invalidChannel).toHaveCount(0);
    // });


    // // ============================================================
    // // SEARCH NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-053 - Search with empty value', async () => {

    //     await inboxPage.searchbutton.click();

    //     await inboxPage.search.fill('');

    //     await expect(inboxPage.search).toHaveValue('');
    // });


    // test('NEG-054 - Search with whitespace only', async () => {

    //     await inboxPage.searchbutton.click();

    //     await inboxPage.search.fill('     ');

    //     await expect(inboxPage.search).toHaveValue('     ');
    // });


    // test('NEG-055 - Search with non-existing conversation', async () => {

    //     await inboxPage.searchbutton.click();

    //     await inboxPage.search.fill(
    //         'THIS_CONVERSATION_DOES_NOT_EXIST_123456789'
    //     );

    //     await expect(
    //         inboxPage.page.getByText(
    //             'Visitor 26',
    //             { exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // test('NEG-056 - Search with special characters', async () => {

    //     await inboxPage.searchbutton.click();

    //     await inboxPage.search.fill(
    //         '@#$%^&*()_INVALID_SEARCH_123'
    //     );

    //     await expect(inboxPage.search).toHaveValue(
    //         '@#$%^&*()_INVALID_SEARCH_123'
    //     );
    // });


    // ============================================================
    // ACTIVE / INACTIVE FILTER NEGATIVE TEST CASES
    // ============================================================

    test('NEG-057 - Active status filter should not contain invalid status', async () => {
        

        await inboxPage.activeStatusFilter.click();
        await inboxPage.onlineFilter.click();

        await expect(
            inboxPage.page.getByRole(
                'menuitemradio',
                { name: 'Offline', exact: true }
            )
        ).toHaveCount(0);
    });


    // test('NEG-058 - Offline filter should not display online-only invalid result', async () => {

    //     await inboxPage.activeStatusFilter.click();

    //     await inboxPage.offlineFilter.click();

    //     await expect(
    //         inboxPage.page.getByText(
    //             'Online',
    //             { exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // test('NEG-059 - Online filter should not display offline-only invalid result', async () => {

    //     await inboxPage.activeStatusFilter.click();

    //     await inboxPage.onlineFilter.click();

    //     await expect(
    //         inboxPage.page.getByText(
    //             'Offline',
    //             { exact: true }
    //         )
    //     ).toHaveCount(0);
    // });


    // // ============================================================
    // // MENU / CONVERSATION NEGATIVE TEST CASES
    // // ============================================================

    // test('NEG-060 - Three-dot menu should close on Escape', async () => {

    //     await inboxPage.threedotmenu.click();

    //     await inboxPage.page.keyboard.press('Escape');

    //     await expect(inboxPage.snooze).not.toBeVisible();
    //     await expect(inboxPage.ipban).not.toBeVisible();
    // });


    // test('NEG-061 - Cannot snooze conversation when snooze menu is closed', async () => {

    //     await expect(inboxPage.snooze).not.toBeVisible();
    // });


    // test('NEG-062 - Cannot ban visitor when three-dot menu is closed', async () => {

    //     await expect(inboxPage.ipban).not.toBeVisible();
    // });


    // ============================================================
    // FINAL SUMMARY
    // ============================================================

    test.afterEach(async () => {

        inboxPage.printTestSummary();

    });

});

   