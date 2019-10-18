require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

async function checkFormat(driver, numberVal) {
        // Find the search box by id
    await driver.findElement(By.id('prevValue')).sendKeys(numberVal);
        // Enter keywords and click enter
    await driver.findElement(By.id('submitBtn')).click();
        // Wait for the results box by id
    result = await driver.findElement(By.id('formattedValue')).getText();
    await driver.findElement(By.id('prevValue')).clear();

    return result;
}

describe('Check Format Money UI Test Case', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000');
    });

    it('1. Check with maximum limit of digit value after decimal point', async function() {
        result = await checkFormat(driver, '9.999');
        assert.equal(result, 'Formatted output: 10.00');
    });
    it('2. Check with all zero before and after decimal point', async function() {
        result = await checkFormat(driver, '0000.0000');
        assert.equal(result, 'Formatted output: 0.00');
    });
    // close the browser after running tests
    //after(() => driver && driver.quit());
})