   // server/src/resolvers/index.js

    const { Query } = require('./Query')
    const { auth } = require('./Mutation/auth')
    const { contact } = require('./Mutation/contact')
    // const { portfolio } = require('./Mutation/portfolio')
    const { AuthPayload } = require('./AuthPayload')

    module.exports = {
      Query,
      Mutation: {
        ...auth,
        ...contact,
        // ...portfolio,
      },
      AuthPayload
    }
// const { Query } = require('./Query')
// const { Subscription } = require('./Subscription')
// const { auth } = require('./Mutation/auth')
// const { post } = require('./Mutation/post')
// const { AuthPayload } = require('./AuthPayload')

// module.exports = {
//   Query,
//   Mutation: {
//     ...auth,
//     ...post,
//   },
//   Subscription,
//   AuthPayload,
// }
