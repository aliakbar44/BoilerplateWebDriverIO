
import OpenGoogle from '../support/MyActions/OpenGoogle';
import openWebsite from '../support/action/openWebsite';

const { Given } = require('cucumber');

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);


Given(
    /^I open the google home page$/,
    OpenGoogle
);
