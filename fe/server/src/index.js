const express = require('express')
const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')
const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    // headers: {
    //   Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTUzMjI5MjYxLCJleHAiOjE1NTM4MzQwNjF9.LQ2qcN4peOWHh83C9XCjC_-8oCy_Fb04Ayjo9zL731Q"
    // },
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET,
      // secret: process.env.PRISMA_SECRET,        // taken from database/prisma.yml (value is set in .env)
      debug: true,                              // log all GraphQL queries & mutations
    }),
  }),
})
server.express.use('/images', express.static("images"))
server.start(() => console.log('Server is running on http://localhost:4000'))
