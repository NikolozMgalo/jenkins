import Browser from '../../framework/browser/Browser.js';
import { Given, When } from '@wdio/cucumber-framework';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import AllureReporter from '@wdio/allure-reporter';


Given('I open main page', async () => {
    AllureReporter.addStep(`Opening ${mainConfig.baseUrl}`);
    await Browser.openUrl(mainConfig.baseUrl);
});


When('I go back to main page', async () => {
    AllureReporter.addStep('I go back to main page');
    await Browser.Window.back();
});