module.exports = () => {


    browser.pause(6000)
    browser.click("(//img[@src='images/ic-edit-copy-7.png'])[2]");
    browser.pause(5000);

    browser.pause(3000);
    browser.setValue('[id=numberIP]', '300')
    browser.click("//span[contains(text(),'SAVE')]");
    browser.pause(5000);
    browser.click("//button[contains(text(),'OK')]");
    browser.pause(6000);

};
