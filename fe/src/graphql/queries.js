import gql from 'graphql-tag'
/* eslint-disable */
export const contact_QUERY = gql`
      query{
        contacts {
          id
          name
          email
          number
          createdAt
        }
      }
    `
