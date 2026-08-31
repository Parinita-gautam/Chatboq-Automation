import { expect } from "playwright/test";
export class InboxPage{
    constructor(page){
        this.page=page;

        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;

        this.testResults = [];
        this.failedTestNames = [];

        this.visitor1=page.getByText('Visitor 80');

        this.messagebox1=page.locator('[data-lexical-editor="true"]');
        this.messageformatting= page.locator('button[data-size="icon-sm"]:has(svg path[d^="M2.00797"])');
        this.bold=page.locator('button[data-size="icon-xs"]:has(svg path[d^="M13 4H10"])');
        this.italic=page.locator('button[data-size="icon-xs"]:has(svg path[d="M12 4H19"])');
        this.underline=page.locator('button[data-size="icon-xs"]:has(svg path[d^="M5.5 3"])');
        this.sendmessage=page.locator('button[data-variant="default"]:has(svg path[d^="M9.50929"])');

        this.bulletpoint=page.locator('button[data-size="icon-xs"]:has(svg path[d^="M8 5.5"])');
        this.numberlist=page.locator('button[data-size="icon-xs"]:has(svg path[d^="M11 6"])');

        this.link=page.locator('button[data-size="icon-xs"][aria-haspopup="dialog"]');
        this.linkurl=page.getByPlaceholder('https://example.com');
        this.insertlink=page.getByRole('button', { name: 'Insert' });

        this.voicemessage=page.locator('button:has(svg path[d^="M12.0009 19"])');
        this.voicedelete=page.locator('button[data-size="icon-xs"]:has(svg path[d^="M4.75 6.49805"])');
        this.voicesend=page.locator('button:has(svg path[d^="M20 7L9"])');

        this.addattachment=page.locator('button[data-size="icon-sm"]:has(svg path[d^="M17 13"])');
        this.attach=page.getByText('Add attachment');

        this.replybutton = page.locator('button[aria-haspopup="menu"]').filter({ hasText: 'Reply' });
        this.internalnote=page.getByText('Notes(Internal Only)');
        this.internalbutton = page.getByRole('button', {name: 'Notes(Internal Only)',exact: true});
        this.reply=page.getByText('Reply');

        this.quickreplybtn=page.getByText('Quick Response');
        this.responsebtn=page.getByRole('button',{name:'+ Add Quick Reply'});
        this.title=page.getByLabel('Title');
        this.groupName=page.getByLabel('Group Name');
        this.shortcut=page.getByLabel('Shortcut');
        this.quickMessage=page.getByLabel('Message');
        this.createQuickbtn=page.getByRole('button',{name:'Create Quick Reply'});

        this.resolveConvo=page.locator('button[data-slot="dialog-trigger"]:has(path[d="M8.75 15.248L15.25 8.74805"])');
        this.subject=page.getByLabel('Subject');
        this.remarks=page.getByLabel('Remarks');
        this.resolved=page.getByRole('button',{name:'Resolve'});
        this.unresolveconvo=page.locator('button[data-variant="gray"]',{ hasText: 'Takeover Conversation' });
        this.subjectRequiredError = page.getByText('Subject is required',{ exact: true });

        this.threedotmenu=page.locator('button[data-slot="dropdown-menu-trigger"]:has(svg path[d^="M7 11.9985C7"])');
        this.snooze=page.locator('div[role="menuitem"]', { hasText: 'Snooze' });
        this.snnozedfor=page.getByRole('button',{name:'15 Minutes'});
        this.snoozereason=page.getByPlaceholder('Why are you snoozing this conversation?');
        this.snoozeconfirm=page.locator('button[data-variant="default"]',{hasText:'Snooze'});
        this.filter=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Status' });
        this.snoozefilter=page.getByRole('menuitemradio', { name: 'Snoozed', exact: true });
        this.undoSnooze=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Snoozed' });
        this.allFilter=page.getByRole('menuitemradio', { name: 'All', exact: true });
        this.convo=page.getByText('Visitor 80');

        this.ipban=page.locator('div[role="menuitem"]', { hasText: 'Ban Visitor' });
        this.ipreason=page.getByPlaceholder('E.g., Spamming, abusive language...');
        this.banconfirm=page.getByRole('button',{name:'Ban IP Address'});
        this.unban=page.locator('div[role="menuitem"]', { hasText: 'Unban Visitor' });
        this.unbanconfirm=page.getByRole('button',{name:'Delete IP Address'});

        this.moveToSubInbox=page.locator('div[role="menuitem"]', { hasText: 'Move to inbox' });     
        this.support=page.getByRole('menuitem', { name: 'Support', exact: true });                 
        this.backToGeneral=page.getByRole('menuitem', { name: 'General', exact: true });  
        
        this.unreadfilter=page.getByRole('menuitemradio', { name: 'Unread', exact: true });
        this.undoUnread=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Unread' });
        this.unresolvefilter=page.getByRole('menuitemradio', { name: 'Unresolved', exact: true });
        this.undoUnresolved=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Unresolved' });
        this.resolvefilter=page.getByRole('menuitemradio', { name: 'Resolved', exact: true });
        this.undoresolved=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Resolved' });
        this.reopenfilter=page.getByRole('menuitemradio', { name: 'Re-open', exact: true });
        this.undoReopen=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Re-open' });
        this.vipfilter=page.getByRole('menuitemradio', { name: 'VIP', exact: true });
        this.undoVip=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'VIP' });

        this.MainAllFilter=page.locator('button[data-slot="dropdown-menu-trigger"]').filter({hasText:'All'});
        this.assignToMefilter=page.getByRole('menuitemradio', { name: 'Assigned to me', exact: true });
        this.undoassignToMeFilter=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Assigned to me' });
        this.Unassignedfilter=page.getByRole('menuitemradio', { name: 'Unassigned', exact: true });
        this.undoUnassignedFilter=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Unassigned' });
        this.Mentionfilter=page.getByRole('menuitemradio', { name: 'Mentions', exact: true });
        this.undoMentionFilter=page.locator('button[data-state="closed"][data-slot="dropdown-menu-trigger"]').filter({ hasText: 'Mentions' });
        this.UndoAllFilter=page.getByRole('menuitemradio',{name:'All Conversation'});

        this.channelFilter=page.locator('button[data-slot="dropdown-menu-trigger"]').filter({hasText:'Channels'});
        this.whatsappFilter=page.getByRole('menuitemcheckbox',{name:'WhatsApp', exact:true});
        this.gmailEmailFilter=page.getByRole('menuitemcheckbox',{name:'Gmail/Email', exact:true});
        this.facebookFilter=page.getByRole('menuitemcheckbox',{name:'Facebook', exact:true});
        this.webFilter=page.getByRole('menuitemcheckbox',{name:'Web', exact:true});

        this.searchbutton=page.locator('button[data-variant="secondary"]:has(svg path[d^="M10.5 18C1"])');
        this.search=page.getByPlaceholder('Search Customers...');

        this.activeStatusFilter=page.locator('button[data-variant="ghost"]:has(svg path[d^="M2.75"])');
        this.offlineFilter=page.getByRole('menuitemradio',{name:'Offline', exact:true});
        this.onlineFilter=page.getByRole('menuitemradio',{name:'Online', exact:true});
        this.all=page.getByRole('menuitemradio',{name:'All', exact:true});

}

async runStep(testName, action) {
    this.totalTests++;
        try {
            // console.log(`\n START: ${testName}`);

            await action();
            this.passedTests++;

            console.log(` PASSED: ${testName}`);

            return true;

        } catch (error) {
            this.failedTests++;
            this.failedTestNames.push(testName);
            console.log(` FAILED: ${testName}`);
            console.log(`   Error: ${error.message}`);

            return false;
        }
    }


    async visitor(){
         await this.runStep('Open Visitor 80',async () => {
                await this.visitor1.click();
            }
        );
    }

    async messagebox(){
        await this.runStep('Open message formatting',async () => {
        await this.messageformatting.click();
        }
        );
        await this.runStep('Fill Message',async () => {
            await this.messagebox1.fill('Playwright message');
        }
        );
        await this.runStep('Copied message',async () => {
            await this.messagebox1.press('Control+a');
        }
        );
        await this.runStep('Bold Text Format',async () => {
            await this.bold.click();
        }
        );
        await this.runStep('Italic Text Format',async () => {
            await this.italic.click();
        }
        );
        await this.runStep('Underline Format',async () => {
            await this.underline.click();
        }
        );
        await this.runStep('Send Message',async () => {
            await this.sendmessage.click();
        }
        );

    }

    async bulletpointlist(){
        await this.bulletpoint.click();
        for (let i = 0; i < 3; i++) {
            await this.runStep('Send bullet point Message',async () => {
                await this.messagebox1.type('Playwright message');
        }
        );
        await this.runStep('Next point',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        await this.runStep('sub bulletpoint',async () => {
            await this.messagebox1.press('Tab');
        }
        );
        }
        await this.runStep('Send bullet point Message',async () => {
            await this.sendmessage.click();
        }
        );
    }
    async bulletnolist(){
        await this.numberlist.click();
        for (let i = 0; i < 3; i++) {
            await this.runStep('Fill Number list Message',async () => {
                await this.messagebox1.fill('Playwright message');
        }
        );
        await this.runStep('Next point',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        await this.runStep('sub bulletpoint',async () => {
            await this.messagebox1.press('Tab');
        }
        );
        }
        await this.runStep('Send number list Message',async () => {
            await this.sendmessage.click();
        }
        );
    }

    async inboxlink(){
        // await this.messageformatting.click();
        await this.runStep('Fill Message',async () => {
            await this.messagebox1.fill('Playwright link');
        }
        );
        await this.runStep('Copied Message',async () => {
            await this.messagebox1.press('Control+a');
        }
        );
        await this.runStep('Open Link',async () => {
            await this.link.click();
        }
        );
        await this.runStep('Filled URL',async () => {
            await this.linkurl.fill('https://fb.com');
        }
        );
        await this.runStep('Insert Link',async () => {
            await this.insertlink.click();
        }
        );
        await this.runStep('Send Link Message',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        
    }

    async voice(){
        await this.runStep('Recording voice... Message',async () => {
            await this.voicemessage.click();
        }
        );
        await this.runStep('Delete Recording',async () => {
            await this.voicedelete.click();
        }
        );
        await this.runStep('Recording voice... Message',async () => {
            await this.voicemessage.click();
        }
        );
        await this.runStep('Confirm Voice Message',async () => {
            await this.voicesend.click();
        }
        );
        await this.runStep('Send Voice Message',async () => {
            await this.messagebox1.press('Enter');
        }
        );
    }

    async attachments(){
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.runStep('Open setting',async () => {
            await this.addattachment.click();
        }
        );
        await this.runStep('Clicked on add attachments',async () => {
            await this.attach.click();
        }
        );
        const fileChooser = await fileChooserPromise;
        await this.runStep('Select image',async () => {
            await fileChooser.setFiles('C:\\Users\\brahm\\Downloads\\chatboq setting color.png');
        }
        );
        await this.runStep('Filled message',async () => {
            await this.messagebox1.fill('Playwright message');
        }
        );
        await this.runStep('Send Message',async () => {
            await this.messagebox1.press('Enter');
        }
        );
    }

    async internalnotes(){
        await this.runStep('Click on reply button',async () => {
            await this.replybutton.click();
        }
        );
        await this.runStep('Click on internal note button',async () => {
            await this.internalnote.click();
        }
        );
        await this.runStep('Filled internal note message',async () => {
            await this.messagebox1.fill('internal notes message');
        }
        );
        await this.runStep('Send internal note message',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        await this.runStep('Click on reply message',async () => {
            await this.replybutton.click();
        }
        );
        await this.runStep('Clicked on internal notes button',async () => {
            await this.internalbutton.click();
        }
        );
        await this.runStep('Click on reply button to change the Internal notes box to reply box',async () => {
            await this.reply.click();
        }
        );
    }

    async quickresponse(){
        await this.runStep('Enter / for shortcut',async () => {
            await this.messagebox1.fill('/');
        }
        );
        await this.runStep('Clicked enter to select first shortcut',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        await this.runStep('send shortcut message',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        // await this.quickreplybtn.click();
        // await this.responsebtn.waitFor({ state: 'visible' });
        // await this.responsebtn.click();
        // await this.title.fill('Message');
        // await this.groupName.fill('team');
        // await this.groupName.press('Enter');
        // await this.shortcut.fill('Hello');
        // await this.quickMessage.fill('This is playwright quick response');
        // await this.createQuickbtn.click();
    }
    
    async markedAsResolved(){
        if(await this.resolveConvo.isVisible()){
            await this.runStep('Clicked on resolve conversation button',async () => {
                await this.resolveConvo.click();
        }
        );
        await this.runStep('Filled Subject',async () => {
            await this.subject.fill('tester is on work');
        }
        );
        await this.runStep('Filled Remarks',async () => {
            await this.remarks.fill('resolving conversation through playwright');
        }
        );
        await this.runStep('Click on Resolve Conversation button to unresolve conversation',async () => {
            await this.resolved.click();
        }
        );
        await this.runStep('Unresolve Conversation',async () => {
            await this.unresolveconvo.click();
        }
        );
    }
        else{
            await this.runStep('Unresolve Conversation',async () => {
                await this.unresolveconvo.click();
        }
        );
        }
    }

    async snoozeconversation(){
        await this.runStep('Open Three Dot menu',async () => {
            await this.threedotmenu.click();
        }
        );
        await this.runStep('Open Snooze Button',async () => {
            await this.snooze.click();
        }
        );
        await this.runStep('Select Time for Snooze Conversation',async () => {
            await this.snnozedfor.click();
        }
        );
        await this.runStep('Filled the reasoning for snoozing Conversation',async () => {
            await this.snoozereason.fill('snoozing for testing purpose');
        }
        );
        await this.runStep('Confirmating Snooze Conversation',async () => {
            await this.snoozeconfirm.click();
        }
        );
        await this.runStep('click on Status Filter',async () => {
            await this.filter.click();
        }
        );
        await this.runStep('Applied Snoozed Filter',async () => {
            await this.snoozefilter.click();
        }
        );
        await this.runStep('Open Conversation',async () => {
            await this.convo.click();
        }
        );
        await this.runStep('Filled message to unsnoozed conversation',async () => {
            await this.messagebox1.fill('unsnoozing conversation');
        }
        );
        await this.runStep('Send message to Unsnoozed conversation ',async () => {
            await this.messagebox1.press('Enter');
        }
        );
        await this.runStep('Undo Snooze filter ',async () => {
            await this.undoSnooze.Click();
        }
        );
        await this.runStep('Default Status Filter ',async () => {
            await this.allFilter.click('');
        }
        );

    }
    async banvisitor(){
        await this.runStep('Open Three dot menu',async () => {
            await this.threedotmenu.click();
        }
        );
        await this.runStep('Open Ip ban Button',async () => {
            await this.ipban.click();
        }
        );
        await this.runStep('Filled Ip Ban Reasoning',async () => {
            await this.ipreason.fill('banning visitor from further contact');
        }
        );
        await this.runStep('Click on Ip Ban Confirm Button',async () => {
            await this.banconfirm.click();
        }
        );
        await this.runStep('Open Three Dot Menu',async () => {
            await this.threedotmenu.click();
        }
        );
        await this.runStep('Unban visitor',async () => {
            await this.unban.click();
        }
        );
        await this.runStep('Cliked on Visitor Unban confirm Button',async () => {
            await this.unbanconfirm.click();
        }
        );
    }

    async subInbox(){
        await this.runStep('Open three Dot Menu',async () => {
            await this.threedotmenu.click();
        }
        );
        await this.runStep('Move to Sub inbox button clicked',async () => {
            await this.moveToSubInbox.click();
        }
        );
        await this.runStep('Moved to Support Inbox',async () => {
            await this.support.click();
        }
        );
        await this.runStep('Visitor Conversation Open',async () => {
            await this.visitor1.click();
        }
        );
        await this.runStep('Open Three Dot Menu',async () => {
            await this.threedotmenu.click();
        }
        );
        await this.runStep('Moved to inbox Button',async () => {
            await this.moveToSubInbox.click();
        }
        );
        await this.runStep('Conversation is moved back to general Inbox',async () => {
            await this.backToGeneral.click();
        }
        );
    }


    async StatusFilter(){
        await this.runStep('click on Status Filter',async () => {
            await this.filter.click();
        }
        );
        await this.runStep('Click on Unread Filter',async () => {
            await this.unreadfilter.click();
        }
        );
        await this.runStep('undo Unread Filter',async () => {
            await this.undoUnread.click();
        }
        );
        await this.runStep('Click on Unresolved Filter',async () => {
            await this.unresolvefilter.click();
        }
        );
        await this.runStep('undo unresolved Filter',async () => {
            await this.undoUnresolved.click();
        }
        );
        await this.runStep('Click on Resolve Filter',async () => {
            await this.resolvefilter.click();
        }
        );
        await this.runStep('undo Resolved Filter',async () => {
            await this.undoresolved.click();
        }
        );
        await this.runStep('Click on Reopen Filter',async () => {
            await this.reopenfilter.click();
        }
        );
        await this.runStep('Undo reopen Filter',async () => {
            await this.undoReopen.click();
        }
        );
        await this.runStep('Click on VIP Filter',async () => {
            await this.vipfilter.click();
        }
        );
        await this.runStep('Undo VIP Filter',async () => {
            await this.undoVip.click();
        }
        );
        await this.runStep('Default Status Filter ',async () => {
            await this.allFilter.click('');
        }
        );
    }
    async Filters(){
        await this.runStep('All Filter ',async () => {
            await this.MainAllFilter.click('');
        }
        );
        await this.runStep('Assigned to me Filter ',async () => {
            await this.assignToMefilter.click('');
        }
        );
        await this.runStep('Undo assign to me Filter ',async () => {
            await this.undoassignToMeFilter.click('');
        }
        );
        await this.runStep('UnassignedFilter ',async () => {
            await this.Unassignedfilter.click('');
        }
        );
        await this.runStep('Undo Unassigned Filter ',async () => {
            await this.undoUnassignedFilter.click('');
        }
        );
        await this.runStep('Mention Filter ',async () => {
            await this.Mentionfilter.click('');
        }
        );
        await this.runStep('undo mentionFilter ',async () => {
            await this.undoMentionFilter.click('');
        }
        );
        await this.runStep('UndoAll Filter ',async () => {
            await this.UndoAllFilter.click('');
        }
        );
    }
    async channel(){
        await this.runStep('clicked on channel ',async () => {
            await this.channelFilter.click();
        }
        );
        await this.runStep('applied whatsapp filter ',async () => {
            await this.whatsappFilter.click();
            await this.whatsappFilter.press('Enter');
        }
        );
    }

    async searchConversation(){
        await this.runStep('search button',async () => {
            await this.searchbutton.click();
        }
        );
        await this.runStep('search convo ',async () => {
            await this.search.click();
        }
        );
        await this.runStep('search convo ',async () => {
            await this.search.fill('pro');
        }
        );
        await this.runStep('backspace',async () => {
            await this.search.press('Backspace');
            await this.search.press('Backspace');
            await this.search.press('Backspace');
        }
        );
    }

    async activeInactive(){
        await this.runStep('active/inactive filter button',async () => {
            await this.activeStatusFilter.click();
        }
        );
        await this.runStep('offline filter',async () => {
            await this.offlineFilter.click();
        }
        );
        await this.runStep('active/inactive filter button',async () => {
            await this.activeStatusFilter.click();
        }
        );
        await this.runStep('Online Filter',async () => {
            await this.onlineFilter.click();
        }
        );
        await this.runStep('active/inactive filter button',async () => {
            await this.activeStatusFilter.click();
        }
        );
        await this.runStep('close status filter',async () => {
            await this.all.click();
        }
        );
    }


printTestSummary() {
        console.log('\n');
        console.log(
            '=========================================='
        );

        console.log(
            '          TEST EXECUTION SUMMARY'

      );

        console.log(
            `Total Tests  : ${this.totalTests}`
        );

        console.log(
            `Passed Tests : ${this.passedTests}`
        );

        console.log(
            `Failed Tests : ${this.failedTests}`
        );

        if (this.failedTests > 0) {

            console.log('');
            console.log('FAILED TESTS:');

            this.failedTestNames.forEach(
                (testName, index) => {

                    console.log(
                        `${index + 1}. ${testName}`
                    );

                }
            );

        } else {

            console.log(
                'ALL TESTS PASSED'
            );
        }

        console.log('');
    }
}