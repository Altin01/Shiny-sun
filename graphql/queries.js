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
    punishedDate{
       id,
        Date_,
        price,
        ToBePunished,
    }
}
`
export const MY_MISSED_TASKS = gql`
 query myMissedTasks {
     myMissedTasks{
         id,
         published,
         day,
         createdAt,
     }
 }
`
export const MY_SUCCES_TASKS  = gql`
    query mySuccesTasks{
        mySuccesTasks{
            id,
            createdAt,
            published,
            day
        }
    }
`