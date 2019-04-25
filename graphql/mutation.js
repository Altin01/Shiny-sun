import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation Signup($email:String!,$password:String!,$name: String!){
      signup(email:$email,password:$password,name:$name){
          token
          user{
            id
          }
      }
  }
`;

export const LOGIN = gql`
  mutation Login($email:String!,$password:String!){
      login(email:$email,password:$password){
        payload{
          user{
              id
            }
          token
        }
        error{
          field
          msg
        }
      }
  }
`;
  