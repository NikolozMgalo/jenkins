import { When, Then } from '@wdio/cucumber-framework';
import HomePage from '../page-objects/HomePage.js';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai';
import Logger from '../../framework/utils/Logger.js';
import Browser from '../../framework/browser/Browser.js';


When('I consent data usage', async () => {
    AllureReporter.addStep('I consent data usage');
    if(await HomePage.isConsentDataDisplayed()) {
        await HomePage.consentData();
    } else {
        Logger.info('Consent data button is not displayed')
    };
});

When(/^I input '(.*)' in search field$/, async (location) => {
    AllureReporter.addStep(`Input ${location} in search field`);
    await HomePage.inputSearch(location);
});

Then('Search results list is displayed', async () => {
    AllureReporter.addStep('Search Result is displayed');
    assert.isTrue(await HomePage.isSearchResultDisplayed(), 'Search results list is displayed');
});

When('I click on the first search result', async () => {
    AllureReporter.addStep('I click on the first search result');
    await HomePage.clickFirstSearchResult();
});

When('I choose first city in recent locations', async () => {
    AllureReporter.addStep('I choose first city in recent locations');
    await HomePage.selectFirstRecentLocation();
});

When('I click on search field', async () => {
    AllureReporter.addStep('I click on search field');
    await HomePage.clickOnSearchField();
});

Then('Use your current location label is displayed', async () => {
    AllureReporter.addStep('Use your current location label is displayed');
    assert.isTrue(await HomePage.locationLabel(), 'Current location label is not displayed');
});


