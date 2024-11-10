import BasePage from '../../framework/page/BasePage.js';
import { Label } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class CityWeatherPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="title-container"]', 'Current Weather Box'), 'City Weather Page');

        this.pageHeader = new Label('//*[@class="header-loc"]', 'City weather page header');
    };

    async getHeaderText() {
        return this.pageHeader.getText();
    };

    async checkPageOpen() {
        return this.pageHeader.state().waitForDisplayed();
    };

};

export default new CityWeatherPage();