
module.exports = () => {
    // eslint-disable-next-line no-tabs
    browser.url('http://localhost:3004/');
    browser.pause(10000);
    const windowHandle = browser.windowHandle();
    browser.windowHandleMaximize(`{${windowHandle.value}}`);
    browser.pause(10000);
};
