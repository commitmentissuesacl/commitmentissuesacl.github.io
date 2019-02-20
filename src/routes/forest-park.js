const forestParkMarathon = {
    id: 'fp-marathon',
    name: 'Forest Park Marathon',
    description: 'This route will take you across 2/3 of the length of Forest Park, through some of the less busy areas, and along some of the most scenic parts of Wildwood Trail. Note that this route is not a loop! It begins with a climb from the Lower Saltzman Road trailhead and ends at Lower Macleay Park.',
    distance: '26.38',
    elevation: '3200',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: 'assets/lieferikson-firelane/lieferkison-firelane-photo1.jpg',
    imageTwo: 'assets/lieferikson-firelane/lieferkison-firelane-photo2.jpg',
    imageThree: 'assets/lieferikson-firelane/lieferkison-firelane-photo3.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: 'assets/lieferikson-firelane/map-lieferikson-firelane.svg',
    extraInfo: 'Access the starting trailhead on Lower Saltzman Road off of Highway 30. Limited street parking is available. The route ends at Lower Macleay Park, which has restrooms, parking, and a water fountain.',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '519280E 504589N',
    elevationChart: 'assets/lieferikson-firelane/elevation-lieferikson-firelane.svg'
};

const ramblers = {
    id: 'ramblers',
    name: 'Half Marathon +',
    description: 'This route is a half marathon plus some bonus mileage. It starts and ends at Lower Macleay Park (bathrooms!) and features a nice climb about halfway through when you reach Firelane 1. Roll into the finish with a nice descent over the last 3.5 miles.',
    distance: '14.03',
    elevation: '1600',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: 'There is a small parking lot and ample street parking at the trailhead, which also features restrooms, a water fountain, and a picnic shelter. After you finish your run, you\'re close enough to the cafes and restaurants on NW 23rd to treat yourself to a post-run beer!',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '521529E 5042950N',
    elevationChart: './assets/creed.jpg'
};

const half = {
    id: 'half',
    name: 'Stumptown Races Half Marathon',
    description: 'This is the route for Go Beyond Racing\'s Stumptown Half Marathon race, which takes place in Forest Park every Memorial Day weekend. This course was developed by runners who have spent may hours finding the prettiest trails in the park, and features plenty of climb to make your legs and lungs burn.',
    distance: '13.1',
    elevation: '2000',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: 'This course starts and ends at the intersection of Leif Erickson and Wild Cherry. To get there, take NW Thurman Rd until it ends at the Leif Erickson trailhead, where there is a small parking lot and ample street parking. Walk approximately a quarter mile to Wild Cherry. At the start of this route there are porto-potties.',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: './assets/creed.jpg'
};

const ultra = {
    id: 'ultra',
    name: 'Stumptown Races 50k',
    description: 'This is the route for Go Beyond Racing\'s Stumptown 50K, the only ultramarathon trail race held within Portland city limits. This beautiful, challenging course is best tackled with a well-stocked hydration vest and a friend or six.',
    distance: '31',
    elevation: '4000',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: 'This course starts and ends at the intersection of Leif Erickson and Wild Cherry. To get there, take NW Thurman Rd until it ends at the Leif Erickson trailhead, where there is a small parking lot and ample street parking. Walk approximately a quarter mile to Wild Cherry. The course begins with a small out and back heading back down Leif Erickson toward Thurman, which is designed to allow runners to spread out. While this course does include a bathroom, it is at the start and end of the route, so plan accordingly.',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: './assets/creed.jpg'
};


const forestParkOptions = [forestParkMarathon, ramblers, half, ultra];

export default forestParkOptions;