/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
module.exports = (key) => {


    browser.pause(10000)
    browser.keys(key);

    browser.pause(10000)
};
