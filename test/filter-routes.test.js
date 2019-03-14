import { filterByMaxMiles, filterByMinMiles, filterByDistance, filterByMinElevation, filterByMaxElevation, filterByElevation, filterByBathrooms, filterByFamily } from '../src/filter-component.js';

const test = QUnit.test;

QUnit.module('filters');

const routes = [
    {
        id: 'fp-marathon',
        name: 'Forest Park Marathon',
        distance: '26.38',
        elevation: '3200',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'ramblers',
        name: 'Half Marathon +',
        distance: '14.03',
        elevation: '1600',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'half',
        name: 'Stumptown Races Half Marathon',
        distance: '13.1',
        elevation: '2142',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'ultra',
        name: 'Stumptown Races 50k',
        distance: '31',
        elevation: '4180',
        bathroom: true,
        familyFriendly: false,
    }
];


test('filter routes by max distance', assert => {
    const maxMiles = 20;
    const expected = [
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'half',
            name: 'Stumptown Races Half Marathon',
            distance: '13.1',
            elevation: '2142',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByMaxMiles(routes, maxMiles);

    assert.deepEqual(result, expected);
});

test('filter by min distance', assert => {
    const minMiles = 20;
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'ultra',
            name: 'Stumptown Races 50k',
            distance: '31',
            elevation: '4180',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByMinMiles(routes, minMiles);

    assert.deepEqual(result, expected);
});

test('filter routes by min and max distances', assert => {
    const minMiles = 14, maxMiles = 30;
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: false,
        },
    ];

    const results = filterByDistance(routes, minMiles, maxMiles);

    assert.deepEqual(results, expected);
});

test('filter routes by min elevation', assert => {
    const minElev = 3000;
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'ultra',
            name: 'Stumptown Races 50k',
            distance: '31',
            elevation: '4180',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByMinElevation(routes, minElev);

    assert.deepEqual(result, expected);
});

test('filter routes by max elevation', assert => {
    const maxElev = 3000;
    const expected = [
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'half',
            name: 'Stumptown Races Half Marathon',
            distance: '13.1',
            elevation: '2142',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByMaxElevation(routes, maxElev);

    assert.deepEqual(result, expected);
});

test('filter routes by min and max elevation', assert => {
    const minElevation = 2000, maxElevation = 4000;
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'half',
            name: 'Stumptown Races Half Marathon',
            distance: '13.1',
            elevation: '2142',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByElevation(routes, minElevation, maxElevation);
    assert.deepEqual(result, expected);
});

const routes2 = [
    {
        id: 'fp-marathon',
        name: 'Forest Park Marathon',
        distance: '26.38',
        elevation: '3200',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'ramblers',
        name: 'Half Marathon +',
        distance: '14.03',
        elevation: '1600',
        bathroom: true,
        familyFriendly: true,
    },
    {
        id: 'half',
        name: 'Stumptown Races Half Marathon',
        distance: '13.1',
        elevation: '2142',
        bathroom: false,
        familyFriendly: false,
    },
    {
        id: 'ultra',
        name: 'Stumptown Races 50k',
        distance: '31',
        elevation: '4180',
        bathroom: false,
        familyFriendly: true,
    }
];

test('filter by bathrooms', assert => {
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: true,
        }
    ];
    const result = filterByBathrooms(routes2);

    assert.deepEqual(result, expected);
});

test('filter by family', assert => {
    const expected = [
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: true,
        },
        {
            id: 'ultra',
            name: 'Stumptown Races 50k',
            distance: '31',
            elevation: '4180',
            bathroom: false,
            familyFriendly: true,
        }
    ];

    const result = filterByFamily(routes2);
    assert.deepEqual(result, expected);
});