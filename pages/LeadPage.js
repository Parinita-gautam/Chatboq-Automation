import { expect } from "playwright/test";
export class LeadPage{
    constructor(page){
        this.page=page;
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

        this.allStatus=page.locator('button[data-slot="select-trigger"]',{hasText:'All Statuses'});
        this.newFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'New'});
        this.contactedFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Contacted'});
        this.qualifiedFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Qualified'});
        this.proposalSentFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Proposal Sent'});
        this.negotiationFilter=page.locator('button[data-slot="select-trigger"]',{hasText:'Negotiation'});
        this.wonFilter=page.locator('button[data-slot="select-trigger"]', { hasText: 'Won' });
        this.lostFilter=page.locator('button[data-slot="select-trigger"]', { hasText: 'Lost' });
        this.allStatusss=page.getByRole('option',{hasText:'All Statuses'});

        this.ViewLeadDetails = page.locator('svg:has(path[d^="M9.25 3.75H6.95C5"])').first();




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
        await this.createLead.click();
        await this.leadFullName.fill(this.generateName());
        await this.leadPhoneNumber.fill('9803567382');
        await this.leadEmail.fill(this.generateEmail());
        await this.leadAddress.fill(this.generateCity());
        await this.selectRandomDropdown(this.leadType,7);
        await this.selectRandomDropdown(this.leadSource,14)
        await this.referralBy.type('Kyurosh');
        await this.budget.fill('90000');
        await this.interest.fill('Maketing');
        await this.requirements.fill('This is a note for new lead');
        await this.addLeadsubmit.click();

    }
    async searchLeadName(){
        await this.searchLead.type('Parinita');
        await this.searchLead.press('Control+a');
        await this.searchLead.press('Backspace');
        await this.searchLead.type('hellos');
        await this.searchLead.press('Control+a');
        await this.searchLead.press('Backspace');

    }
    async statusFilter(){
        await this.allStatus.click();
        await this.allStatus.press('ArrowDown');
        await this.allStatus.press('Enter');
        await this.newFilter.click();
        await this.newFilter.press('ArrowDown');
        await this.newFilter.press('Enter');
        await this.contactedFilter.click();
        await this.contactedFilter.press('ArrowDown');
        await this.contactedFilter.press('Enter');
        await this.qualifiedFilter.click();
        await this.qualifiedFilter.press('ArrowDown');
        await this.qualifiedFilter.press('Enter');
        await this.proposalSentFilter.click();
        await this.proposalSentFilter.press('ArrowDown');
        await this.proposalSentFilter.press('Enter');
        await this.negotiationFilter.click();
        await this.negotiationFilter.press('ArrowDown');
        await this.negotiationFilter.press('Enter');
        await this.wonFilter.click();
        await this.wonFilter.press('ArrowDown');
        await this.wonFilter.press('Enter');
        await this.lostFilter.click();
        for (let i = 0; i < 7; i++) {
        await this.lostFilter.press('ArrowUp');
        }
        await this.lostFilter.press('Enter');
    
        // await this.page.waitForTimeout(300);
        // const randomCount = Math.floor(Math.random() * 5) + 1;

        // for (let i = 0; i < randomCount; i++) {
        //     await this.allStatus.press('ArrowDown');
        // }
        // await this.allStatus.press('Enter');
    }
    async sourceFilter(){
        await this.allSource.click();
        await this.page.waitForTimeout(300);
        const randomCount = Math.floor(Math.random() * 5) + 1;

        for (let i = 0; i < randomCount; i++) {
            await this.allSource.press('ArrowDown');
        }
        await this.allSource.press('Enter');
    }
    async LeadDetails() {
        
        await this.ViewLeadDetails.click();
    }
    
}
