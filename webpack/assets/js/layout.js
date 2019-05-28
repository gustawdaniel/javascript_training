'use strict';

const $ = require('jquery');
require('bootstrap-sass');

require('../css/main.scss');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
