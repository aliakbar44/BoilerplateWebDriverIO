
import SearchGoogle from '../support/MyActions/SearchGoogle';

import EnterUsnPwd from '../support/MyActions/EnterUsnPwd';
import ClickCommercial from '../support/MyActions/ClickCommercial';
import ClickSignIn from '../support/MyActions/ClickSignIn';
import clickElement from '../support/action/clickElement';
import ClickWallet from '../support/MyActions/ClickWallet';
import ClickIntraCompany from '../support/MyActions/ClickIntraCompany';
import AddNewInst from '../support/MyActions/AddNewInst';
import ExecuteInst from '../support/MyActions/ExecuteInst';

const { When } = require('cucumber');

When(
    /^I Search with Halifax$/,
    SearchGoogle


);

When(
    /^I click commercial$/,
    ClickCommercial


);

When(
    /^I click sign in$/,

    //clickElement

    ClickSignIn


);


When(
    /^I enter username and password$/,
    EnterUsnPwd


);

When(
    /^I click wallet icon$/,

    ClickWallet


);

When(
    /^I click intra company cash pooling$/,

    ClickIntraCompany


);

When(
    /^I click add new instruction$/,

    AddNewInst

);

When(
    /^I click on execute instruction$/,

    ExecuteInst

);


