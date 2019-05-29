
import SearchGoogle from '../support/MyActions/SearchGoogle';

const { When } = require('cucumber');

When(
    /^I Search with Halifax$/,
    SearchGoogle
);


