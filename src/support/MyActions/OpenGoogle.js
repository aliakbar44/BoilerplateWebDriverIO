
module.exports = () => {
	browser.url('https://www.google.com/')
	var windowHandle = browser.windowHandle()
    browser.windowHandleMaximize('{'+windowHandle.value+'}')
};
