module.exports = () => {

    browser.pause(3000)
    browser.click("//*[contains(text(),'ADD NEW INSTRUCTIONS')]");


    browser.pause(3000)
    browser.click("(//i[@class='fa fa-angle-down'])[1]");
    browser.pause(3000);


    browser.click("//div[@class='secondAccordionMain']/div[1]/div[1]");
    browser.pause(3000);

    browser.pause(3000)
    browser.click("//div[@class='secondAccordionMain']/div[2]/div[2]");
    browser.pause(3000);

    browser.pause(3000);
    browser.setValue('[id=numberIP]', '1000')

    browser.pause(3000);

    browser.pause(3000)
    browser.click("//*[contains(text(),'ADD')]");
    browser.pause(3000);

    browser.pause(3000)
    browser.click("//button[contains(text(),'OK')]");
    browser.pause(9000);

};
