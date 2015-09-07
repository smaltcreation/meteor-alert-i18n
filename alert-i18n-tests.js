Tinytest.add('isError', function (test) {
    test.isTrue(isError(new Meteor.Error()));
    test.isTrue(isError({error: 'Damned !'}));
    test.isFalse(isError('error'));
    test.isFalse(isError(null));
    test.isFalse(isError({}));
});

Tinytest.add('getType', function (test) {
    test.equal(getType('error.key.text'), 'error');
    test.equal(getType('info.key.text'), 'info');
    test.equal(getType('success.key.text'), 'success');
    test.equal(getType('warning.key.text'), 'warning');
    test.isNull(getType('I\'m the one who knocks Skyler'));
    test.isNull(getType({}));
    test.isNull(getType());
});
