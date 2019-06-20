module.exports = () => {
    browser.pause(3000);
    browser.setValue('[id=username]', 'peter')
    browser.setValue('[id=pwd]', 'banking');

    browser.pause(3000);
};
