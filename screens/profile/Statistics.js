import React from 'react';
import { View,TextInput,StyleSheet ,Dimensions} from 'react-native';
import {Query} from 'react-apollo';
import {MY_SUCCES_TASKS,MY_MISSED_TASKS} from '../../graphql/queries';

let{height,width} =Dimensions.get('window');


export default class Statistics extends React.Component {
  static navigationOptions={
    title:"Statistics"
  }  
  constructor(props) {
        super(props);
        this.state = {
          number: '',
        };
      }
   

    render() {
        return (
            <View style={styles.Container}>
               <View style={styles.nalt}>

               </View>
               <View style={styles.main}>
                  

               </View>
               <View style={styles.posht}>

               </View>
            </View>
        )
    }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff',

    },
    nalt:{
      height:height*0.15
    },
    posht :{
      height:height*0.15
    },
    main:{
      height:height*0.7,
      justifyContent:'center',
      alignItems:'center',
      
    }
 
});