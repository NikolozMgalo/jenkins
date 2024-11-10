import BasePage from '../../framework/page/BasePage.js';
import { Label, Button, Input } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class HomePage extends BasePage {
    constructor() {
        super(new Label('//*[@class="nearby-see-more"]', 'Homepage of accuweather'), 'Homepage');

        this.consentButton = new Button('//*[contains(@class,"policy-accept")]', 'Data consent Button');

        this.searchField = new Input('//*[@class="search-input"]', 'Search input field');

        this.searchResult = new Label('//*[@class="search-results"]', 'Search Result');

        this.firstSearchResult = new Button('//div[contains(@class, "search-result") and contains(@class, "source-radar")][not(preceding-sibling::* )]', 'First Search Result');

        this.firstRecentLocation = new Label('(//div[@class="featured-locations__locations"]/a)[position()=1]', 'First option in recent locations');

        this.currentLocationLabel = new Label('//*[@class="current-location-icon"]', 'Current location label');
    }

    async isConsentDataDisplayed() {
        return this.consentButton.state().isDisplayed();
    };

    async consentData() {
        await this.consentButton.click();
    };

    async inputSearch(location) {
        await this.searchField.typeText(location);
    };

    async isSearchResultDisplayed() {
        return this.searchResult.state().isDisplayed();
    };
    
    async clickFirstSearchResult() {
        await this.firstSearchResult.click();
    };

    async selectFirstRecentLocation() {
        await this.firstRecentLocation.click();
    };

    async clickOnSearchField() {
        await this.searchField.click();
    };

    async locationLabel() {
        return this.currentLocationLabel.state().waitForDisplayed();
    };

};

export default new HomePage();