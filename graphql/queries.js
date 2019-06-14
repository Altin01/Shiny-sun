import gql from 'graphql-tag';

export const  GET_USER  = gql`
query Me {
    me{
        id
        name
    }
}

`
export const PUNISHED_DATE =gql`
query PunishedDate {
    punishedDate{
        id,
        Date_,
        price
    }
}

`