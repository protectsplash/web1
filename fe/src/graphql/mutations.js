import gql from 'graphql-tag'
/* eslint-disable */
  export const SIGNUP_MUTATION = gql`
      mutation SignupMutation($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
          token
        }
      }
    `
    export const LOGIN_MUTATION = gql`
      mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `
 export const CREATE_Contact_MUTATION = gql`
      mutation(
        $name: String!
        $email: String!
        $number: String!
      ) {
        createcontact(
        name:       $name
        email:      $email
        number:$number
        ) 
        {
          id
          name
          number
          email
        }
      }
    `
