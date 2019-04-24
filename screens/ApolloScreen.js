import ApolloClient from 'apollo-boost';
import {AsyncStorage} from 'react-native';

export default new ApolloClient ({
    uri:'https://thesun.herokuapp.com',
    request : async operation =>{
        let token = await AsyncStorage.getItem('@toka-dhe-dielli:token');

        operation.setContext({
            headers:{
                Authorization : token ? `Bearer ${token}` : null
            }
        })
    }
})