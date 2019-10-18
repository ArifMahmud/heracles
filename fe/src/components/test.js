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
    it('3. Check whether digits before decimal point are formatted properly', async function() {
        result = await checkFormat(driver, '4545454.105');
        assert.equal(result, 'Formatted output: 4 545 454.11');
    });
    it('4. Check whether rounding upto 2 digit after decimal point is working properly with less than 5', async function() {
        result = await checkFormat(driver, '5151.144');
        assert.equal(result, 'Formatted output: 5 151.14');
    });
    it('5. Check whether rounding upto 2 digit after decimal point is working properly with greater than 4', async function() {
        result = await checkFormat(driver, '0000.145');
        assert.equal(result, 'Formatted output: 0 000.15');
    });
    it('6. Check with only 1 digit after decimal point', async function() {
        result = await checkFormat(driver, '123.1');
        assert.equal(result, 'Formatted output: 123.10');
    });
    it('7. Check with no digit after decimal point', async function() {
        result = await checkFormat(driver, '54554');
        assert.equal(result, 'Formatted output: 54 554.00');
    });
    it('8. Check with Minus sign and result should be Invalid Number', async function() {
        result = await checkFormat(driver, '-');
        assert.equal(result, 'Formatted output: Invalid Number');
    });
    it('9. Check with only point and result should be Invalid Number', async function() {
        result = await checkFormat(driver, '.');
        assert.equal(result, 'Formatted output: Invalid Number');
    });
    it('10. Check with Minus sign with digits and result should be Invalid Number', async function() {
        result = await checkFormat(driver, '123-');
        assert.equal(result, 'Formatted output: Invalid Number');
    });
    it('11. Check with Minus sign and two decimal point with digits and result should be Invalid Number', async function() {
        result = await checkFormat(driver, '-1.0.0');
        assert.equal(result, 'Formatted output: Invalid Number');
    });
    it('12. Check with non numeric value and result should be Invalid Number', async function() {
        result = await checkFormat(driver, 'abc');
        assert.equal(result, 'Formatted output: Invalid Number');
    });
    it('13. Check with invalid formation of digits and signs and result should be Invalid Number', async function() {
        result = await checkFormat(driver, '123-');
        assert.equal(result, 'Formatted output: Invalid Number');
    });
    // close the browser after running tests
    //after(() => driver && driver.quit());
})