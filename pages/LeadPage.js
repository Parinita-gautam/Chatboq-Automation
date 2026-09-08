import { expect } from "playwright/test";
import { TestReporter } from "../utils/TestReporter.js";

export class LeadPage{
    constructor(page,reporter){
        this.page=page;
         this.reporter = reporter;
        this.createLead=page.getByText('New Lead');
        this.leadFullName=page.getByPlaceholder('e.g. Jane Smith');
        this.leadPhoneNumber=page.locator('#phone_number');
        this.leadEmail=page.locator('#email');
        this.leadAddress=page.locator('#address');
        this.leadType=page.locator('#lead_type');
        this.leadSource=page.locator('#lead_source');
        this.referralBy=page.locator('#referred_by');
        this.budget=page.locator('#budget');
        this.interest=page.locator('#interest_area');
        this.requirements=page.getByPlaceholder('Add any specific requirement here...');
        this.addLeadsubmit=page.getByRole('button',{name:'Add Lead'});
        this.cities = [
            'Kathmandu',
            'Pokhara',
            'Butwal',
            'Chitwan',
            'Lalitpur'
        ];

        this.searchLead=page.getByPlaceholder('Search Lead...');

        this.sortBy=page.getByRole('combobox').first();
        this.newestFirst=page.getByRole('combobox').filter({ hasText: 'Newest First'});
        this.oldestFirst=page.getByRole('combobox').filter({ hasText: 'Oldest First'});
        this.ascendingOrder=page.getByRole('combobox').filter({ hasText: 'Lead Name (A–Z)'});
        this.descendingOrder=page.getByRole('combobox').filter({ hasText: 'Lead Name (Z-A)'});
        this.referredFilter=page.getByRole('combobox').filter({ hasText: 'Referred'});

        this.allStatus=page.locator('button[data-slot="select-trigger"]',{hasText:'All Statuses'});
        this.newFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'New'});
        this.contactedFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Contacted'});
        this.qualifiedFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Qualified'});
        this.proposalSentFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Proposal Sent'});
        this.negotiationFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Negotiation'});
        this.wonFilter=page.locator('button[data-slot="select-trigger"]', { hasText: 'Won' });
        this.lostFilter=page.locator('button[data-slot="select-trigger"]', { hasText: 'Lost' });
        this.allStatusss=page.getByRole('option',{hasText:'All Statuses'});

        this.allSourceFilter=page.getByRole('combobox').filter({ hasText: 'All Sources'});
        this.websiteChatFilter=page.getByRole('option', { name: 'Website Chat', exact: true });
        this.websiteChat=page.getByRole('combobox').filter({ hasText: 'Website Chat'});
        this.liveVisitorFilter=page.getByRole('option', { name:  'Live Visitor', exact: true });
        this.liveVisitor=page.getByRole('combobox').filter({ hasText: 'Live Visitor'});
        this.contactFormFilter=page.getByRole('option', { name: 'Contact Form', exact: true });
        this.contactForm=page.getByRole('combobox').filter({ hasText: 'Contact Form'});
        this.demoRequestFilter=page.getByRole('option', { name: 'Demo Request', exact: true });
        this.demoRequest=page.getByRole('combobox').filter({ hasText: 'Demo Request'});
        this.emailFilter=page.getByRole('option', { name:  'Email', exact: true });
        this.email=page.getByRole('combobox').filter({ hasText: 'Email'});
        this.whatsAppFilter=page.getByRole('option', { name:  'WhatsApp', exact: true });
        this.whatsApp=page.getByRole('combobox').filter({ hasText: 'WhatsApp'});
        this.allSource=page.getByRole('option', { name: 'All Sources', exact: true });

        this.ViewLeadDetails = page.locator('svg:has(path[d^="M9.25 3.75H6.95C5"])').first();

        this.leadConversation = page.getByText('Conversations');
        this.updateEdit= page.getByRole('button',{name:'Edit'});
        this.updateInterest=page.locator("#interest_area");
        this.updateBudget=page.locator("#budget");
        this.updateReferredBy=page.locator("#referred_by");
        this.leadContacted=page.getByRole('button',{name:'Contacted'});
        this.leadQualified=page.getByRole('button',{name:'Qualified'});
        this.leadProposalSent=page.getByRole('button',{name:'Proposal Sent'});
        this.leadNegotiation=page.getByRole('button',{name:'Negotiation'});
        this.leadWon=page.getByRole('button',{name:'Won'});
        this.leadLost=page.getByRole('button',{name:'Lost'});



        this.leadFiles= page.getByText('Files');

        this.leadActivities= page.getByText('Activities');




    }
    generateName() {
        return `parinita_${Date.now()}`;
    }
    generateEmail() {
        return `parinita_${Date.now()}@mail.com`;
    }
    generateCity() {
        return this.cities[
            Math.floor(Math.random() * this.cities.length)
        ];
    }
    async selectRandomDropdown(dropdown, optionCount) {
        await dropdown.click();

        const randomIndex = Math.floor(
            Math.random() * optionCount
        );

        for (let i = 0; i < randomIndex; i++) {
            await dropdown.press('ArrowDown');
        }

        await dropdown.press('Enter');
    }
    

    async LeadForm(){
        await this.reporter.runStep('Clicked Create Lead',async () => {
            await this.createLead.click();
        }
    );
        await this.reporter.runStep('Enter Lead Name',async () => {
         await this.leadFullName.fill(this.generateName());
        }
    );
        await this.reporter.runStep('Enter Lead Phone Number',async () => {
            await this.leadPhoneNumber.fill('9803567382');
         }
    );
        await this.reporter.runStep('Enter Unique Email',async () => {
            await this.leadEmail.fill(this.generateEmail());
        }
    );
        await this.reporter.runStep('Enter City Name',async () => {
             await this.leadAddress.fill(this.generateCity());
        }
    );
        await this.reporter.runStep('Select lead Type',async () => {
            await this.selectRandomDropdown(this.leadType,7);
         }
    );
        await this.reporter.runStep('Select Lead Source',async () => {
            await this.selectRandomDropdown(this.leadSource,14)
        }
    );
        await this.reporter.runStep('Entered Referral Name',async () => {
            await this.referralBy.type('Kyurosh');
        }
    );
        await this.reporter.runStep('Entered Budget',async () => {
            await this.budget.fill('90000');
        }
    );
        await this.reporter.runStep('Entered Maketing',async () => {
            await this.interest.fill('Maketing');
        }
    );
        await this.reporter.runStep('Enter Requirements',async () => {
            await this.requirements.fill('This is a note for new lead');
        }
    );
        await this.reporter.runStep('Click on Add Lead Submit',async () => {
            await this.addLeadsubmit.click();
        }
    );

    }
    async searchLeadName(){
        await this.reporter.runStep('Search By Valid Input',async () => {
            await this.searchLead.type('Parinita');
        }
    );
        await this.reporter.runStep('Select Text',async () => {
            await this.searchLead.press('Control+a');
        }
    );
        await this.reporter.runStep('Remove the selected Text',async () => {
            await this.searchLead.press('Backspace');
        }
    );
        await this.reporter.runStep('Search by Invalid input',async () => {
            await this.searchLead.type('hellos');
        }
    );
        await this.reporter.runStep('Select Text',async () => {
            await this.searchLead.press('Control+a');
        }
    );
        await this.reporter.runStep('Remove the selected Text',async () => {
            await this.searchLead.press('Backspace');
        }
    );

    }

    async selectSortOption(name) {
        await this.reporter.runStep('Clicked on sort By',async () => {
            await this.sortBy.click();
        }
    );
        await this.reporter.runStep('Click on option',async () => {
            await this.page.getByRole('option', { name, exact: true }).click();
        });
        
    }

    async sortingFilter(){
        await this.reporter.runStep('Click on Newsest First Filter',async () => {
            await this.selectSortOption('Newest First');
        });
        await this.reporter.runStep('Click on Oldest First Filter',async () => {
            await this.selectSortOption('Oldest First');
        });
        await this.reporter.runStep('Ascending Filter',async () => {
            await this.selectSortOption('Lead Name (A–Z)');
        });
        await this.reporter.runStep('Descending Filter',async () => {
            await this.selectSortOption('Lead Name (Z–A)');
        });
        await this.reporter.runStep('Referraled Filter',async () => {
            await this.selectSortOption('Referred');
        });
        await this.reporter.runStep('Back to OG Filter',async () => {
            await this.selectSortOption('Sort By');
        });
    }
    async statusFilter(){
        await this.reporter.runStep(' Click on All Status Filter',async () => {
            await this.allStatus.click();
        });
        await this.reporter.runStep('Click on arrow Dropdown ',async () => {
            await this.allStatus.press('ArrowDown');
        });
        await this.reporter.runStep('Clicked Enter',async () => {
            await this.allStatus.press('Enter');
        });
        await this.reporter.runStep('Click on New Filter',async () => {
            await this.newFilter.click();
        });
        await this.reporter.runStep('Click on arrow Down',async () => {
            await this.newFilter.press('ArrowDown');
        });
        await this.reporter.runStep('Clicked Entered',async () => {
            await this.newFilter.press('Enter');
        });
        await this.reporter.runStep('Click on Contacted Filter',async () => {
            await this.contactedFilter.click();
        });
        await this.reporter.runStep('Click on arrow down',async () => {
            await this.contactedFilter.press('ArrowDown');
        });
        await this.reporter.runStep('clicked on Entered',async () => {
            await this.contactedFilter.press('Enter');
        });
        await this.reporter.runStep('Click on QualifiedFilter',async () => {
            await this.qualifiedFilter.click();
        });
        await this.reporter.runStep('Click on arrow Down',async () => {
            await this.qualifiedFilter.press('ArrowDown');
        });
        await this.reporter.runStep('Click on Entered',async () => {
            await this.qualifiedFilter.press('Enter');
        });
        await this.reporter.runStep('Clicked on Proposal Filter',async () => {
            await this.proposalSentFilter.click();
        });
        await this.reporter.runStep('clicked on arrow down',async () => {
            await this.proposalSentFilter.press('ArrowDown');
        });
        await this.reporter.runStep('Clicked on Entered',async () => {
            await this.proposalSentFilter.press('Enter');
        });
        await this.reporter.runStep('Click on Negotiation Filter',async () => {
            await this.negotiationFilter.click();
        });
        await this.reporter.runStep('click on arrow Down',async () => {
            await this.negotiationFilter.press('ArrowDown');
        });
        await this.reporter.runStep('Clicked on Entered',async () => {
            await this.negotiationFilter.press('Enter');
        });
        await this.reporter.runStep('Clicked on Won Filter',async () => {
            await this.wonFilter.click();
        });
        await this.reporter.runStep('Clicke don arrow down',async () => {
            await this.wonFilter.press('ArrowDown');
        });
        await this.reporter.runStep('Clicked on Entered',async () => {
            await this.wonFilter.press('Enter');
        });
        await this.reporter.runStep('Click on lost Filter',async () => {
            await this.lostFilter.click();
        });
        for (let i = 0; i < 7; i++) {
            await this.reporter.runStep('Clicked on ArrowUp',async () => {
                await this.lostFilter.press('ArrowUp');
        });
        }
        await this.reporter.runStep('Clicked on entered',async () => {
            await this.lostFilter.press('Enter');
        });
    
        // await this.page.waitForTimeout(300);
        // const randomCount = Math.floor(Math.random() * 5) + 1;

        // for (let i = 0; i < randomCount; i++) {
        //     await this.allStatus.press('ArrowDown');
        // }
        // await this.allStatus.press('Enter');
    }
    async sourceFilter(){
        await this.reporter.runStep('Clicked on AllSource Filter',async () => {
            await this.allSourceFilter.click();
        });
        await this.reporter.runStep('WebsiteChat Filter Applied',async () => {
            await this.websiteChatFilter.click();
        });
        await this.reporter.runStep('Open filter Popup',async () => {
            await this.websiteChat.click();
        });
        await this.reporter.runStep('Live Visitor Filter Applied',async () => {
            await this.liveVisitorFilter.click();
        });
        await this.reporter.runStep('Open Filter popup',async () => {
            await this.liveVisitor.click();
        });
        await this.reporter.runStep('Contact Form Filter Applied',async () => {
            await this.contactFormFilter.click();
        });
        await this.reporter.runStep('Open Filter Popup',async () => {
            await this.contactForm.click();
        });
        await this.reporter.runStep('Demo Request Filter Applied ',async () => {
            await this.demoRequestFilter.click();
        });
        await this.reporter.runStep('Open Filter Popup',async () => {
            await this.demoRequest.click();
        });
        await this.reporter.runStep('Email Filter Applied',async () => {
            await this.emailFilter.click();
        });
        await this.reporter.runStep('Open filter Popup',async () => {
            await this.email.click();
        });
        await this.reporter.runStep('WhatsApp Filter Applied',async () => {
            await this.whatsAppFilter.click();
        });
        await this.reporter.runStep('Open Filter popup',async () => {
            await this.whatsApp.click();
        });
        await this.reporter.runStep('Back to OG Filter',async () => {
            await this.allSource.click();
        });
    }
    async LeadDetails() {
        await this.reporter.runStep('Clicked on view Lead Details',async () => {
            await this.ViewLeadDetails.click();
        });
        await this.reporter.runStep('Clicked on Update Edit Button',async () => {
            await this.updateEdit.click();
        });
        await this.reporter.runStep('Select  all text',async () => {
            await this.updateInterest.press('control+a');
        });
        await this.reporter.runStep('Removed Text',async () => {
            await this.updateInterest.press('bakcspace');
        });
        await this.reporter.runStep('Edit maketing Data',async () => {
            await this.updateInterest.type('Marketing');
        });
        await this.reporter.runStep('Remove the selected Text',async () => {
            await this.updateBudget.press('control+a');
        });
        await this.reporter.runStep('Remove Text',async () => {
            await this.updateBudget.press('bakcspace');
        });
        await this.reporter.runStep('Update Budget Data',async () => {
            await this.updateBudget.type('30000');
        });
        await this.reporter.runStep('Selected Text',async () => {
            await this.updateBudget.press('control+a');
        });
        await this.reporter.runStep('Remove the selected Text',async () => {
            await this.updateBudget.press('bakcspace');
        });
        await this.reporter.runStep('Updated Budget',async () => {
            await this.updateBudget.type('Parinita');
        });
        await this.reporter.runStep('Changed Status to contacted',async () => {
            await this.statusContacted.click();
        });
        await this.reporter.runStep('Changed Status to Qualified',async () => {
            await this.statusQualified.click();
        });
        await this.reporter.runStep('Changed Status to ProposalSent ',async () => {
            await this.statusPrososalSent.click();
        });
        await this.reporter.runStep('Changed Status to Negotiation',async () => {
            await this.statusNegotiation.click();
        });
        await this.reporter.runStep('Changed Status to Won',async () => {
            await this.statusWon.click();
        });
        await this.reporter.runStep('Changed Status to Lost',async () => {
            await this.statusLost.click();
        });
        await this.reporter.runStep('Open Lead Conversation',async () => {
            await this.leadConversation.click();
        });
        await this.reporter.runStep('Open Lead Files',async () => {
            await this.leadFiles.click();
        });

        await this.reporter.runStep('Open Lead Activities',async () => {
            await this.leadActivities.click();
        });

        
    }
    
}
