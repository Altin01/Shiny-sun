import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation Signup($email:String!,$password:String!,$confirmPassword:String!,$name: String!){
      signup(email:$email,password:$password,confirmPassword:$confirmPassword,name:$name){
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

export const EDIT_PASSWORD = gql`
mutation EditPassword($id:ID!,$password: String!,$newPassword: String!,$confirmPassword: String){
  editPassword(id:$id,password:$password,newPassword:$newPassword,confirmPassword:$confirmPassword){
    user{
      id
    }
  }
}
  `