// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepeneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
    },
    {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
    },
    {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
    },
    {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
    },
    {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
    },
    {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
    }
];

// Rooms Array

const roomsArray = [
    {
    name: 'Dining Room'
    },
    {
    name: 'Conservatory'
    },
    {
    name: 'Kitchen'
    },
    {
    name: 'Study'
    },
    {
    name: 'Library'
    },
    {
    name: 'Billiard Room'
    },
    {
    name: 'Lounge'
    },
    {
    name: 'Ballroom'
    },
    {
    name: 'Hall'
    },
    {
    name: 'Spa'
    },
    {
    name: 'Living Room'
    },
    {
    name: 'Observatory'
    },
    {
    name: 'Theater'
    },
    {
    name: 'Guest House'
    },
    {
    name: 'Patio'
    }
];

// Weapons Array

const weaponsArray = [
    {
    name: 'rope',
    weight: 10
    },
    {
    name: 'knife',
    weight: 8
    },
    {
    name: 'candlestick',
    weight: 2
    },
    {
    name: 'dumbbell',
    weight: 30
    },
    {
    name: 'poison',
    weight: 2
    },
    {
    name: 'axe',
    weight: 15
    },
    {
    name: 'bat',
    weight: 13
    },
    {
    name: 'trophy',
    weight: 25
    },
    {
    name: 'gun',
    weight: 20
    }
];


// ITERATION 2

function selectRandom(cardArray) {
    let randomElement = ""
    if (!cardArray) {
        return undefined
    } else
    {
    randomElement = cardArray[Math.floor(Math.random() * cardArray.length)]
    }
    return randomElement
}

/*
Aunque aparezca como negativo en Jasmine, es la forma más óptima de realizar la función.
La doble condición de array vacío o inexistente; no es necesario declarar una variable si devolvemos directamente el array.

function selectRandom(cardArray) {
    if (!cardArray || cardArray.length) {
        return undefined
    } else {
    return cardArray[Math.floor(Math.random() * cardArray.length)]
    }
}
*/


function pickMystery() {
    let mysterySuspect = {
        suspect: '',
        weapon: '',
        room: '',
    }
    mysterySuspect.suspect = selectRandom(suspectsArray)
    mysterySuspect.weapon = selectRandom(weaponsArray)
    mysterySuspect.room = selectRandom(roomsArray)
    return mysterySuspect
}


// ITERATION 3

function revealMystery(packet) {
    return `${packet.suspect.firstName} ${packet.suspect.lastName} killed Mr. Boddy using the ${packet.weapon.name} in the ${packet.room.name}!`
}
