import { test, expect } from '@playwright/test';
import { LeadPage} from '../pages/LeadPage';
const ORG_ID = '7e4e3977-3e16-4907-903e-14d6f5ebf381';

test('lead', async ({ page }) => {
    const leadPage = new LeadPage(page);
    await page.goto(`https://stagingv2.chatboq.com/app/${ORG_ID}/lead`);

    // for(let i=0; i<1; i++){

    //     await leadPage.LeadForm();
    // }

    // await leadPage.searchLeadName();

        // await leadPage.statusFilter();
    await leadPage.sourceFilter();
    // await leadPage.LeadDetails();


  });
