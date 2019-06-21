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
mutation changePassword($password: String!,$newPassword: String!,$confirmPassword: String){
  changePassword(password:$password,newPassword:$newPassword,confirmPassword:$confirmPassword){
      id
    
  }
} `

export const EDIT_ACCOUNT = gql `
  mutation editAccount($name: String!){
    editAccount(name:$name){
      id
      name
    }
  }
  ` 

export const CHANGE_SETTINGS = gql`
 mutation changeSettings($monday:Boolean!,$tuesday:Boolean!,$wednesday:Boolean!,$thursday:Boolean!,$friday:Boolean!,$saturday:Boolean!,$sunday:Boolean!,$price:Int!){
   changeSettings(monday:$monday,tuesday:$tuesday,wednesday:$wednesday,thursday:$thursday,friday:$friday,saturday:$saturday,sunday:$sunday,price:$price){
    id,
    monday,
     tuesday,
     wednesday,
     thursday,
     friday,
     saturday,
     sunday,
     price
    

   }
 }
`
export const START_CONFIRM = gql`
  mutation startConfirm($confirm:Boolean!){
      startConfirm(confirm:$confirm){
          id,
          confirm
      }
  }
`
export const CREATE_PICTURE=gql`
  mutation createPicture($published:Boolean!){
     createPicture(published:$published){
      
       published,
      
     }
}
`