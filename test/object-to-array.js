const test = QUnit.test;

QUnit.module('object to array');

function objectToArray(object) {
    const keys = Object.keys(object);
    return keys.map(key => object[key]);
}

test('convert object to array', assert => {
    const object = {
        abc: { id: 'abc', name: 'object1' },
        def: { id: 'def', name: 'object2' },
        ghi: { id: 'ghi', name: 'object3' }
    };
    const expected = [
        { id: 'abc', name: 'object1' },
        { id: 'def', name: 'object2' },
        { id: 'ghi', name: 'object3' }
    ];

    const result = objectToArray(object);

    assert.deepEqual(result, expected);
});