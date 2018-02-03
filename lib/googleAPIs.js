Promise = require('bluebird')
const qs = require('qs')
const axios = require('axios')

const getAPIUrl = function getAPIUrl(type) {
  return `https://maps.googleapis.com/maps/api/place/${type}/json?`
}

const key = process.env.googlePlaceKey

exports.requestTextSearch = function requestTextSearch(text, location, radius) {
  const queryParams = {
    query: text,
    key: key,
    rankby: 'distance'
  }
  if (location) {
    queryParams.location = location
    queryParams.radius = radius || 50000
  }

  return axios.get(getAPIUrl('textsearch') + qs.stringify(queryParams))
    .then(res => res.data.results)
}

exports.requestNearbySearch = function requestNearbySearch(text, location) {
  const queryParams = {
    keyword: text,
    key: key,
    rankby: 'distance',
    location: location
  }
  return axios.get(getAPIUrl('nearbysearch') + qs.stringify(queryParams))
    .then(res => res.data.results)
}




// exports.requestTextSearch('starbucks', '37.43038850000001,-122.1008473', 50000)
// exports.requestNearbySearch('starbucks', '37.43038850000001,-122.1008473')
