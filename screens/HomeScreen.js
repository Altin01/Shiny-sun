import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';

import { WebBrowser,Camera,Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';


const { width: winWidth, height: winHeight } = Dimensions.get('window');  


export default class HomeScreen extends React.Component {
     static navigationOptions = {
        header: null,
      };
    constructor(props){
          super(props);
          this.state ={
            cameraPermission:null
          };
         this.camera ;
         this.loadApp();
    }
   
   loadApp=async ()=>{
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const cameraPermission  = (camera.status === 'granted');
        this.setState({cameraPermission});
      
   } 

  render() {
        if(this.state.cameraPermission === null) {
        return (
            <View style={styles.container}>
                <Text style={{color:'white'}}>
               Something went wrong
               
                </Text>
                  
            </View>
        );
      }else if(this.state.cameraPermission === false){
      return <Text>
                Camera Premissions is Denied
           </Text>
      }
      return(
        <View style={styles.container}>
                      <View style={styles.nalt}>
                      <TouchableWithoutFeedback style={styles.menuView} onPress={()=>this.props.navigation.toggleDrawer()}>
                          <View style={styles.menuView}>
                            <Ionicons style={{top:'2%'}} name="md-menu" size={34} color="white" />
                         </View>
                         </TouchableWithoutFeedback>
                      </View>
                      <Camera
                            style={styles.preview}
                            ref={camera => this.camera = camera}
                      />
                      <View style={styles.posht}>
                          <Text>
                              Hello
                          </Text>
                      </View>
            </View>)

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column'
  },
  nalt:{
    flexDirection:'row',
    height:'15%',
    width:'100%',
    backgroundColor:'black',
  
  },
  posht:{
    height:'15%',
    width:'100%',
    backgroundColor:'black',
    top:0,
    bottom:0,
    


  } ,
  preview :{
   width :winWidth,
   height:winHeight*0.75,
   bottom:0,
  
  }
  ,
  menuView :{
    height :'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
   
  }
});
