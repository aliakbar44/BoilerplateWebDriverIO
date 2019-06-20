module.exports = () => {


    browser.pause(6000)
    browser.click("(//input[@type='checkbox'])[2]");
    browser.pause(3000);
    browser.click("//span[contains(text(),'EXECUTE')]");
    browser.pause(6000);
    browser.click("//button[contains(text(),'OK')]");
    browser.pause(6000);

};
