import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Query } from 'react-apollo';
import {doneTaskSuccesfully} from '../../graphql/queries'

export default class Statistics extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          number: '',
        };
      }


    render() {

 
        return (
            <View style={styles.Container}>
           
            <TextInput
             onChangeText={number => this.setState({ number})}
            
            
            
            
            />

            <Query query={gql`
                 query{
             doneTaskSuccesfully{
              id,
              published,
              day,
            }
          }
        
            `}></Query> 



            </View>
        )
    }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop:50,
      paddingTop: 30,
      backgroundColor: '#ffffff',
    },
    number:{
       color:'black',
    },
});