 // server/src/resolvers/Query.js

    const { getUserId } = require('../utils')

    const Query = {
      contacts(parent, { id }, ctx, info) {
        return ctx.db.query.contacts({ where: { id } }, info)
      },
      contact(parent, { id }, ctx, info) {
        return ctx.db.query.contact({
          where: {
            id
          }
        }, info)
      },
      me (parent, args, ctx, info) {
        const id = getUserId(ctx)
        return ctx.db.query.user({ where: { id } }, info)
      }
    }

    module.exports = { Query }