import Browser from '../../framework/browser/Browser.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai'
import HomePage from '../page-objects/HomePage.js';


Given('I open main page', async () => {
    AllureReporter.addStep(`Opening ${mainConfig.baseUrl}`);
    await Browser.openUrl(mainConfig.baseUrl);
});


When('I go back to main page', async () => {
    AllureReporter.addStep('I go back to main page');
    await Browser.Window.back();
});

