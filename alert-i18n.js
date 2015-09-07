Alert = {
    open: function (input, options) {
        // Adapting Error object
        if (isError(input)) {
            input = 'error.' + input.error;
        }

        // Getting key & forging data object
        var data = getData(input);

        // Extending from the options
        if (!_.isUndefined(options)) {
            _.extend(data, options);
        }

        // Opening SweetAlert
        swal(data);
    }
};

isError = function  (input) {
    return !_.isUndefined(input) && _.isObject(input) && _.has(input, 'error');
};

getType = function (input) {
    var type = _.isString(input) ? _.first(input.split('.')) : null;
    if (!type || (type !== 'error' && type !== 'info' && type !== 'success' && type !== 'warning')) {
        type = null;
    }

    return type;
};

getData = function (input) {
    var title;
    var text;
    var type;

    if (!_.isUndefined(input) && _.isString(input)) {
        var key = {
            title:  input + '.title',
            text:   input + '.text'
        };
        title   = key.title === __(key.title) ? input : __(key.title);
        text    = key.text  === __(key.text)  ? null  : __(key.text);
        type    = getType(input);
    }  else {
        title   = __('error.default.title');
        text    = __('error.default.text');
        type    = 'error';
    }

    return {
        title: title,
        text: text,
        type: type
    };
};
