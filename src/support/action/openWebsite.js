
module.exports = (type, page) => {
   
    const url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);
	var windowHandle = browser.windowHandle()
    browser.windowHandleMaximize('{'+windowHandle.value+'}')
};
