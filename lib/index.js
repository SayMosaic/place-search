const {requestTextSearch, requestNearbySearch} = require('./googleAPIs')

// function getCurPosition(options = {enableHighAccuracy: true, timeout: 10000}) {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, e => {
//       reject(new Error(e.message))
//     }, options)
//   })
// }

const placeSearch = function placeSearch(destination, area, coordinates, radius) {
  const location = `${coordinates.latitude},${coordinates.longitude}`
  // if (area)
  const googleRequests = [
    requestNearbySearch(destination, location),
    requestTextSearch(destination, location, radius)
  ]
  return Promise.all(googleRequests)
    .then(googleResults => googleResults.reduce((a, b) => a.concat(b), []).filter(i => i))
    .then(res => {
      // console.log('res: ', res)
      // console.log('res: ', res)
      return res
    })
}

module.exports = {
  placeSearch: placeSearch
}
