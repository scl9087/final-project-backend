const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const config = require('../nodemon.json')
const User = require('../api/models/user')

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
  // Careful with .remove() -- it sends a command directly to the database
  // and skips any mongoose validations
  await User.deleteMany() // Deletes all records
  return User.create([
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'student@email.com',
      password: bcrypt.hashSync('password', 10),
      admin: false,
      assignments: [
        {
          title: 'Assignment 1',
          project_link: 'http://somewurl.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.'
        }
      ]
    }
  ])
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})
