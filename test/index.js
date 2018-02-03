const assert = require('assert')
const placeSearch = require('../lib').placeSearch

const testCoordinates = {latitude: '37.43038850000001', longitude: '-122.1008473'}

const tests = [
  {
    destination: '!#@!#@!#@!#@!#',
    area: null,
    coordinates: testCoordinates,
    radius: 50000,
    verifyOutput: res => assert.deepEqual(res, []),
    description: 'Should return an empty array when nothing can be found'
  },
  {
    destination: 'starbucks',
    area: null,
    coordinates: testCoordinates,
    radius: null,
    verifyOutput: res => assert.equal(res[0].place_id, 'ChIJT_9zPBC6j4ARm2Fu2gYDC0k'),
    description: 'Should find the coffee shop at 2410 Charleston Rd, Mountain View when I am at 1121 San Antonio Road Palo Alto '
  }
]



describe('.placeSearch()', function placeSearchTest() {
  tests.forEach(test => {
    const {destination, area, coordinates, radius, verifyOutput} = test
    it(test.description, function nothingToBeFound(done) {
      placeSearch(destination, area, coordinates, radius)
        .then(verifyOutput)
        .then(done)
        .catch(done)
    })
  })

})



// {
//   destination: '',
//   area: '',
//   coordinates: {latitude: '', longitude: ''},
//   radius: 50000,
//   output: [],
//   description: '
// }
