module.exports = () => {




    browser.waitForVisible("(//img[@class='ic_home'])[2]",10000);
    browser.pause(3000);
    browser.click("(//img[@class='ic_home'])[2]");
    browser.pause(4000);

};
