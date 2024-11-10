import { Then } from '@wdio/cucumber-framework';
import CityWeatherPage from '../page-objects/CityWeatherPage.js';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai';

Then(/^City weather page header should contain '(.*)'$/, async (location) => {
    AllureReporter.addStep(`City weather page header should contain ${location}`);
    assert.include(await CityWeatherPage.getHeaderText(), location, 'Header text and searched locations do not match');
});



Then('City weather page is displayed', async () => {
    AllureReporter.addStep('City weather page is displayed');
    assert.isTrue(await CityWeatherPage.checkPageOpen(), 'city weather page not displayed');
});