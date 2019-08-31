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
      first_name: 'Student',
      last_name: 'User',
      email: 'student@email.com',
      password: bcrypt.hashSync('password', 10),
      admin: false,
      grade: 68,
      assignments: [
        {
          title: 'Fix the Ship',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 95,
          points_possible: 100
        },
        {
          title: 'Talk to a Human',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 42,
          points_possible: 100
        },
      ]
    },
    {
      first_name: 'James',
      last_name: 'Holden',
      email: 'jholden@email.com',
      password: bcrypt.hashSync('soMANYblackeyes', 10),
      admin: false,
      grade: 77,
      assignments: [
        {
          title: 'Look Pouty',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 100,
          points_possible: 100
        },
        {
          title: 'Be Calm and Collected',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
        }
      ]
    },
    {
      first_name: 'Naomi',
      last_name: 'Nagata',
      email: 'nnagata@email.com',
      password: bcrypt.hashSync('tatto4eva', 10),
      admin: false,
      grade: 100,
      assignments: [
        {
          title: 'Have a British Accent',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 100,
          points_possible: 100
        },
        {
          title: 'Look Hot',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 100,
          points_possible: 100
        }
      ]
    },
    {
      first_name: 'Alex',
      last_name: 'Kamal',
      email: 'akamal@email.com',
      password: bcrypt.hashSync('cowboy', 10),
      admin: false,
      grade: 100,
      assignments: [
        {
          title: 'Navigate Like a Boss',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 100,
          points_possible: 100
        }
      ]
    },
    {
      first_name: 'Chrisjen',
      last_name: 'Avasarala',
      email: 'c.avasarala@email.com',
      password: bcrypt.hashSync('10packsAday', 10),
      admin: false,
      grade: 98,
      assignments: [
        {
          title: 'Stir the Pot',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
        }
      ]
    },
    {
      first_name: 'Roberta',
      last_name: 'Draper',
      email: 'r.draper@email.com',
      password: bcrypt.hashSync('legDAY', 10),
      admin: false,
      grade: 100,
      assignments: [
        {
          title: 'Bench Press 10 Dudes',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
        }
      ]
    },
    {
      first_name: 'Klaes',
      last_name: 'Ashford',
      email: 'kashford@email.com',
      password: bcrypt.hashSync('IRISH', 10),
      admin: false,
      grade: 84,
      assignments: [
        {
          title: 'Give Bad Orders',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 84,
          points_possible: 100
        }
      ]
    },
    {
      first_name: 'Juliette',
      last_name: 'Andromeda',
      email: 'race.cars1@email.com',
      password: bcrypt.hashSync('Ilike2GOfast', 10),
      admin: false,
      grade: 98,
      assignments: [
        {
          title: 'Turn Into an Alien',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 98,
          points_possible: 100
        }
      ]
    },
    {
      first_name: 'Detective Josepus',
      last_name: 'Miller',
      email: 'student@email.com',
      password: bcrypt.hashSync('juliette', 10),
      admin: false,
      grade: 98,
      assignments: [
        {
          title: 'Wear a Cool Hat',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 63,
          points_possible: 100
        },
        {
          title: 'Fall in Love with an Alien',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 100,
          points_possible: 100
        }
      ]
    },
    {
      first_name: 'Sadavir',
      last_name: 'Errinwright',
      email: 'airforceone@email.com',
      password: bcrypt.hashSync('earth', 10),
      admin: false,
      grade: 50,
      assignments: [
        {
          title: 'Make Earth Great Again',
          project_link: 'http://url.com',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tincidunt tellus, vel vehicula turpis euismod a. Nulla lobortis mi nec sagittis hendrerit. Sed ultrices metus ut eros interdum, vel blandit mi lacinia.',
          score: 50,
          points_possible: 100
        }
      ]
    },
    {
      first_name: 'Admin',
      last_name: 'User',
      email: 'admin@email.com',
      password: bcrypt.hashSync('password', 10),
      admin: true
    }
  ])
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})
