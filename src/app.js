const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const Query = require('./resolvers/Query');
const Subscription = require('./resolvers/Subscription');
const Mutation = require('./resolvers/Mutation');

const app = express();

  // uploadNewTrack,
  // updateTrackInfo,
  // uploadNewVersion,
  // updateData,

  const resolvers = {
    Query,
    Mutation,
    Subscription,
  }

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  cors: true,
  resolvers,
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server started on port ${port}`));
