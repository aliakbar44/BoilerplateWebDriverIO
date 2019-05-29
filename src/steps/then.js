
import checkTitle from '../support/check/checkTitle';
import ClickHalifax from '../support/MyActions/ClickHalifax';
import ClickLogOn from '../support/MyActions/ClickLogOn';
import ViewSixOptions from '../support/MyActions/ViewSixOptions';
import Personal from '../support/MyActions/Personal';
import Business from '../support/MyActions/Business';
import ContactUs from '../support/MyActions/ContactUs';
import pressButton from '../support/action/pressButton';

const { Then } = require('cucumber');

Then(
    /^I Verify the six options are present in the screen$/,
    ViewSixOptions
);

Then(
    /^I click on the Halifax Link$/,
    ClickHalifax
);

Then(
    /^I press "([^"]*)?"$/,
    pressButton
);

Then(
    /^I click on logon$/,
    ClickLogOn
);

Then(
    /^I click on Personal$/,
    Personal
);

Then(
    /^I click on Business$/,
    Business
);

Then(
    /^I click on ContactUs$/,
    ContactUs
);


Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
);

