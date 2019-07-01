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
export const PUNISHED_DAYS =gql`
query punishedDays {
    punishedDays{
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