# Mean-Auth
This is the code for a YouTube video I'm making that walks people through creating a MEAN Stack app from scratch and also shows them how [PassportJS](http://passportjs.org/) is working to authenticate users under the hood via [ExpressJS](http://expressjs.com/).

## Structure
Currently all client side files live in the `public` directory.

A simple implementation of an Express server along with related [MongooseJS](http://mongoosejs.com/) Schema and models live in `server.js`.

## Dependencies
Server-side dependencies are managed by [npm](https://www.npmjs.com/) and can be found in `package.json`.

Client-side dependencies are managed by [Bower](http://bower.io/) and can be found in `bower.json`. Bower related configurations are stored in `.bowerrc`.

## Installation
Clone this repo into a new directory.

Run the following from a prompt:
`npm install`
`bower install`
