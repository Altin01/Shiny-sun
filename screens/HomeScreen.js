import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
 
} from 'react-native';


import { Ionicons } from '@expo/vector-icons';


export default class HomeScreen extends React.Component {
     static navigationOptions = {
       header:null,
    
      };

    constructor(props){
          super(props);
          this.state ={
             t: true,
            cameraShow:false
          };
    }
    

  

  render(){
    if(this.state.cameraShow){
       this.props.navigation.navigate('Camera');
    }else {
      return(
        <View style={styles.container}>
            
           <View style={styles.main}>
              <TouchableWithoutFeedback style={{height:'auto',width:'auto'}} onPress={()=>this.props.navigation.navigate('Camera')}>
                <Ionicons size={50} name="md-camera" />
              </TouchableWithoutFeedback>
              <Text style={{color:'black'}}>
                Click here to sent a photo 
              </Text>
            </View>
        </View>
      );
    }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    
  },
  
   icon_view :{
     height:'100%',
     width:'25%',
     justifyContent:'center',
     alignItems:'center'
      
   },
   main: {
     height:'90%',
     width:'100%',
     alignItems:'center',
     justifyContent:'center'
   }
});
