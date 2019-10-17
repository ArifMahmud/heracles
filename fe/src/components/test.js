require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Check Format Money', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Format Money', async function() {
        // Load the page
        await driver.get('http://localhost:3000');
        // Find the search box by id
        await driver.findElement(By.id('prevValue')).sendKeys('9.999');
        // Enter keywords and click enter
        await driver.findElement(By.id('submitBtn')).click();
        // Wait for the results box by id
        let result = await driver.findElement(By.id('formattedValue')).getText();
        // We will get the title value and test it
        // let title = await driver.getTitle();
        assert.equal(result, 'Formatted output: 10.00');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
})