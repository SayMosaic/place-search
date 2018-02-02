const assert = require('assert')
const placeSearch = require('../lib').placeSearch


const tests = [
  {
    destination: '!#@!#@!#@!#@!#',
    area: '',
    coordinates: {latitude: '', longitude: ''},
    radius: 50000,
    output: [],
    description: 'Should return an empty array when nothing can be found'
  }
]



describe('.placeSearch()', function placeSearchTest() {
  tests.forEach(test => {
    const {destination, area, coordinates, radius} = test
    it(test.description, function nothingToBeFound() {
      assert.deepEqual(placeSearch(destination, area, coordinates, radius), [])
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
