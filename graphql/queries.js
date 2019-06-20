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
    punishedDays {
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