module.exports = () => {


    browser.pause(6000)
    browser.click("(//img[@src='images/ic-delete-copy-7.png'])[4]");
    browser.pause(5000);
    browser.click("//button[contains(text(),'CONFIRM')]");
    browser.pause(5000);
    browser.click("//button[contains(text(),'OK')]");
    browser.pause(6000);

};
