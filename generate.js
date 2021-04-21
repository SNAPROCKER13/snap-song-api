module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')

  return {
    users: _.times(3, function (n) {
      return {
        id: n + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageURL: faker.image.avatar(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }
    }),
    songs: _.times(12, function (n) {
      return {
        id: n + 1,
        title: faker.name.title(),
        artist: faker.name.title(),
        description: faker.lorem.paragraph(),
        songURL: faker.internet.url(),
        imageURL: faker.image.image(),
        ownerId: (n + 1) % 3 === 0 ? 1 : (n + 1) % 2 === 0 ? 2 : 3
      }
    }),
    playlist: _.times(12, function (n) {
      return {
        id: n + 1,
        id: n + 1
      }
    })
  }
}
