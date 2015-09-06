Alert = {
    open: function (input, options) {
        // Default key
        var prefix  = 'error.';
        var title   = prefix + 'default.title';
        var text    = prefix + 'default.text';
        var type    = 'error';

        // Getting keys
        if (!_.isUndefined(input) && isError(input)) {
            prefix  = 'error.';
            type    = 'error';
            input   = input.error;
            title   = prefix + input + '.title';
            text    = prefix + input + '.text';
        } else if (!_.isUndefined(input) && _.isString(input)) {
            prefix  = null;
            type    = getType(input);
            title   = input + '.title';
            text    = input + '.text';
        }

        // Forging data object
        var data = {
            title:  title   === __(title)   ? input : __(title),
            text:   text    === __(text)    ? null  : __(text),
            type:   type
        };

        // Extending from the options
        if (!_.isUndefined(options)) {
            _.extend(data, options);
        }

        // Opening SweetAlert
        swal(data);
    }
};

function isError (input) {
    return _.isObject(input) && _.has(input, 'error');
}

function getType (input) {
    var type = _.isString(input) ? _.first(input.split('.')) : null;
    if (!type || (type !== 'error' && type !== 'info' && type !== 'success' && type !== 'warning')) {
        type = null;
    }

    return type
}
