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
      const id = n + 1
      return {
        id,
        title: faker.name.title(),
        artist: faker.name.title(),
        description: faker.lorem.paragraph(),
        songURL: faker.internet.url(),
        imageURL: faker.image.image(),
        ownerId: id % 3 === 0 ? 1 : id % 2 === 0 ? 2 : 3
      }
    }),
    playlist: _.times(30, function (n) {
      const id = n + 1
      const tmp = Math.floor(id / 3)
      let userId = 0
      let songId = 0
      return {
        id,
        userId: id % 3 === 0 ? 3 : id % 3,
        songId: id % 3 !== 0 ? ~~tmp + 1 : ~~tmp
      }
    })
  }
}
