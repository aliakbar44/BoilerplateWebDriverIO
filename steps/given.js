
import OpenOptima from '../support/MyActions/OpenOptima';
import openWebsite from '../support/action/openWebsite';

const { Given } = require('cucumber');

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^I open the optima application$/,
    OpenOptima
);
