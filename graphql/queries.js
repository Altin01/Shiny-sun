import gql from 'graphql-tag';

export const  GET_USER  = gql`
    query Me {
            me{
                id,
                name,
                email,
            }
    }

`
export const PUNISHED_DATE =gql`
query PunishedDate {
    punish edDate{
       id,
        Date_,
        price,
        ToBePunished,
    }
}

`

export const doneTaskSuccesfully =gql`
query{
    doneTaskSuccesfully{
      id,
      published,
      day,
    }
  }
  `