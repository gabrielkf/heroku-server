# Team 13 Server - MegaHack Vtex challenge

RESTful server which uses a PostgreSQL dabase.
It also implements a
[real-time chat application](https://github.com/gabrielkf/chat-component)
using socket.io

The project is hosted on [Heroku](https://team13server.herokuapp.com/),

## Usage and application

### Database

The database can be accessed through [this link](https://team13server.herokuapp.com/)

So far, it only supports GET requests, and provides the
data for a mock store (see "Motivation" below). The
paths implemented are:

- /sellers
- /clients
- /products
- /stock

### Real-time chat application

Go to the [chat-component repository](https://github.com/gabrielkf/chat-component)
and follow the usage instructions if needed.

## Motivation

The server was built for testing purposes on application
development for the MegaHack development contest.

## Credits

Team 13 for Vtex challeng on MegaHack event

Based on [JohnA's](https://github.com/johnazre)
[to-do project](https://github.com/johnazre/deploy-to-heroku-express-knex)

### License

MIT
