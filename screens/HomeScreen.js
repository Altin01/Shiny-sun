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
            cameraPermission:null,
            type:Camera.Constants.Type.back,
            pictureUrl:'',
            t: true
          };
         this.camera;
        
    }
    

   componentDidMount= async ()=>{
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const cameraPermission  = (camera.status === 'granted');
        console.log(cameraPermission);
        this.setState({cameraPermission});

        const didFocusSubscription = this.props.navigation.addListener(
          'didFocus',
          payload => {
            this.setState({
              t: true
            });
            console.debug('didBlur', payload);
          }
        );

        const didBlurSubscription = this.props.navigation.addListener(
          'didBlur',
          payload => {
            this.setState({
              t: false
            });
            console.debug('didBlur', payload);
          }
        );
      
   } 

   takePicture= async ()=>{
    if(this.camera){
      let photo = await this.camera.takePictureAsync();
        this.setState({pictureUrl:photo.uri});
   
        this.props.navigation.navigate('image',this.state)
    }
    
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
                          <TouchableWithoutFeedback style={styles.flip} onPress={()=> this.setState({
                               type: this.state.type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back,
                            })}>
                               <View style={styles.menuView}>
                                <Ionicons style={{top:'2%'}} name="md-sync" size={34} color="white"   />
                              </View>
                          </TouchableWithoutFeedback>
                      </View>
                      {this.state.t == true && 
                      <Camera
                             type={this.state.type}
                            style={styles.preview}
                            ref={camera => this.camera = camera}
                      />
                      }
                      <View style={styles.posht}>
                           <TouchableWithoutFeedback style={styles.cameratouch} onPress={this.takePicture}>
                             <Ionicons style={{marginBottom:22}} name="md-add-circle" color="white" size={70} />
                           </TouchableWithoutFeedback>
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
    justifyContent:'center',
    alignItems:'center'  


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
   
  },
  cameratouch : {
    height:70,
    width:70,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    marginBottom:10


  },
  flip :{
    height :'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
  
  }
});
