const forestParkMarathon = {
    id: 'fp-marathon',
    name: 'Forest Park Marathon',
    description: 'This route will take you across 2/3 of the length of Forest Park, through some of the less busy areas, and along some of the most scenic parts of Wildwood Trail. Note that this route is not a loop! It begins with a climb from the Lower Saltzman Road trailhead and ends at Lower Macleay Park.',
    distance: '26.38',
    elevation: '3200',
    favorite: false,
    completed: false,
    imageMapPage: 'assets/working/creed280280.jpg',
    imageOne: 'assets/lieferikson-firelane/lieferkison-firelane-photo1.jpg',
    imageTwo: 'assets/lieferikson-firelane/lieferkison-firelane-photo2.jpg',
    imageThree: 'assets/lieferikson-firelane/lieferkison-firelane-photo3.jpg',
    imageFour: 'assets/lieferikson-firelane/lieferkison-firelane-photo3.jpg',
    thumbnailMap: 'assets/working/FP-MarathonTwo.svg',
    largeMap: 'assets/working/FP-MarathonTwo.svg',
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
    imageMapPage: 'assets/working/creed280280.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: 'assets/working/Ramblers-Marathon.svg',
    largeMap: 'assets/working/Ramblers-Marathon.svg',
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
    thumbnailMap: 'assets/working/half.svg',
    largeMap: 'assets/working/half.svg',
    extraInfo: 'This course starts and ends at the intersection of Leif Erickson and Wild Cherry. To get there, take NW Thurman Rd until it ends at the Leif Erickson trailhead, where there is a small parking lot and ample street parking. Walk approximately a quarter mile to Wild Cherry. At the start of this route there are porto-potties.',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: 'assets/elevation-profile/stumptown-half.png'
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
    elevationChart: 'assets/elevation-profile/elevation50k.png'
};

const springville = {
    id: 'springville',
    name: 'Springville Baptism',
    description: 'full of beautiful stuff that is on this and you will run by and see it yourself!',
    distance: '5.5',
    elevation: '1566',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: 'This routes starts and ends at the Springville Road. It follows Firelane 7 and Leif Erikson to make a loop around a portion of the Wildwood trail. There are no bathrooms near this route, so use a leaf!',
    bathroom: false,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: 'assets/elevation-profile/stumptown-half.png'
};

const saltzman = {
    id: 'saltzman',
    name: 'Saltzman Slog',
    description: 'This run begins at the intersection of Firelane 5 and Leif Erikson and ends at the intersection of Saltzman Road trailhead and Leif Erikson. ',
    distance: '5.3',
    elevation: '+658/-400',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: 'There are port-a-potties at the start of this route near mile marker 11.',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: 'assets/elevation-profile/stumptown-half.png'
};

const trilliumtrek = {
    id: 'trillium',
    name: 'Trillium Trek',
    description: '',
    distance: '4.75',
    elevation: '600',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: '',
    bathroom: false,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: 'assets/elevation-profile/stumptown-half.png'
};

const pittock = {
    id: 'pittock',
    name: 'Pittock-It-Out',
    description: '',
    distance: '4.4',
    elevation: '+235/-628',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: '',
    bathroom: true,
    familyFriendly: true,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: 'assets/elevation-profile/stumptown-half.png'
};

const saltzmanwhirl = {
    id: 'saltzmanwhirl',
    name: 'Saltzman Whirl',
    description: '',
    elevation: '1016',
    favorite: false,
    completed: false,
    imageMapPage: './assets/creed.jpg',
    imageOne: './assets/creed.jpg',
    imageTwo: './assets/creed.jpg',
    imageThree: './assets/creed.jpg',
    thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
    largeMap: './assets/creed.jpg',
    extraInfo: '',
    bathroom: false,
    familyFriendly: false,
    gpsCoordinates: '45.540874, -122.726184',
    elevationChart: 'assets/elevation-profile/stumptown-half.png'
};

const forestParkOptions = [forestParkMarathon, ramblers, half, ultra, springville, saltzman, trilliumtrek, pittock, saltzmanwhirl];

export default forestParkOptions;