import React from 'react';

import {

  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  CameraRoll,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Modal
} from 'react-native';

import { WebBrowser,Camera,Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import {Mutation} from 'react-apollo';
import {START_CONFIRM,CREATE_PICTURE  } from '../graphql/mutation';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';




const { width: winWidth, height: winHeight } = Dimensions.get('window');  


export default class HomeScreen extends React.Component {
     static navigationOptions = {
     header:null
      };
      
    constructor(props){
          super(props);
          this.state ={
            cameraPermission:null,
            type:Camera.Constants.Type.back,
            pictureUrl:'',
            t: true,
            camera_roll_permission:false,
            takePhoto:false,
            clicked:false,
            timeS:90000,
            uri:"",
            isTimerStart:false,
            message:"Start",
            modalVisible:false
          };
         this.camera;
        
    }
    setModalVisible =(visible)=> {
      this.setState({modalVisible: visible});
    }
    

   componentDidMount= async ()=>{
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const camera_roll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const cameraPermission  = (camera.status === 'granted');
        const camera_roll_permission = (camera_roll === 'granted');
      
        this.setState({camera_roll_permission:true,cameraShow:true,takePhoto:true});
        this.setState({cameraPermission});
        

        // const didFocusSubscription = this.props.navigation.addListener(
        //   'didFocus',
        //   payload => {
        //     this.setState({
        //       t: true
        //     });
        //     console.debug('didBlur', payload);
        //   }
        // );

        // const didBlurSubscription = this.props.navigation.addListener(
        //   'didBlur',
        //   payload => {
        //     this.setState({
        //       t: false
        //     });
        //     console.debug('didBlur', payload);
        //   }
        // );
      
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
        <Mutation mutation={START_CONFIRM}>{(startConfirm,{loading,data,error})=>(
        
           <View style={styles.container}>
               <Modal
                 
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                     if(!this.state.isTimerStart){
                      this.setState({timeS:0,clicked:false,message:"Confirm",modalVisible:false});
                     }
                  }} > 
                    <View style={{height:winHeight*0.6,width:winWidth*0.8,marginTop:winHeight*0.2,marginLeft:winWidth*0.10,marginRight:winWidth*0.10,backgroundColor:'#FEFCFC',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                            <Timer 
                               totalDuration={this.state.timeS} secs 
                                //Time Duration
                               start={this.state.isTimerStart}
                               //To start
                            
                               handleFinish={()=>{
                                 this.setState({timeS:0,clicked:false,message:"Confirm",modalVisible:false});
                                }} 
                                options={styles.timer}
                                    //options for the styling
                                    // handleFinish={}
                                    //can call a function On finish of the time 
                                 />
                                <TouchableOpacity style={{height:50,width:200,justifyContent:'center',backgroundColor:"#B20707",
                               alignItems:'center'}} onPress={()=>{
                                 this.setState({isTimerStart:!this.state.isTimerStart})
                               }}>
                                  {this.state.isTimerStart?<Text>Stop</Text>:<Text>
                                    Start
                                  </Text>}
                                </TouchableOpacity>
                    </View>
                  </Modal>

                  
                          <View style={styles.nalt}>
                          
                              <TouchableWithoutFeedback style={styles.flip} onPress={()=> this.setState({
                                  type: this.state.type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                                })}>
                                  <View style={styles.menuView}>
                                    <Ionicons style={{top:'2%'}} name={Platform.OS === 'ios'?'ios-sync':'md-sync'} size={34} color="white"   />
                                  </View>
                              </TouchableWithoutFeedback>

                              <TouchableWithoutFeedback style={styles.blank}>
                                <View style={styles.blank}>

                                </View>
                              </TouchableWithoutFeedback>
                              <TouchableWithoutFeedback style={styles.blank}>
                                <View style={styles.blank}>

                                </View>
                              </TouchableWithoutFeedback>
                              <TouchableWithoutFeedback style={styles.blank}>
                                <View style={styles.blank}>

                                </View>
                              </TouchableWithoutFeedback>
                              <TouchableWithoutFeedback style={styles.home_icon} onPress={()=>this.props.navigation.navigate('Home')}>
                                <View style={styles.home_view}>
                                  <Ionicons style={{top:'2%'}} name={Platform.OS === 'ios'?'ios-home' :'md-home'} size={34} color="white" />
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
                             {this.state.timeS>0? <TouchableOpacity disabled={this.state.clicked?true:false} style={styles.cameratouch} onPress={async()=>{
                              
                                        let photo = await this.camera.takePictureAsync({skipProcessing:true});
                                        let {data} = await startConfirm({
                                          variables:{
                                            confirm:true
                                          }
                                        })
                                        
                                        this.setState({uri:photo.uri,clicked:true,isTimerStart:true,message:"Confirm"});
                                        this.setModalVisible(!this.state.modalVisible);
                                        alert("The timer start");
                                        // CameraRoll.saveToCameraRoll(photo.uri,"photo").then(()=>{
                                        //         alert("The timer start");
                                        //         this.setState({clicked:true,isTimerStart:true})
                                        // }).catch((err)=>{
                                        //   alert(err);
                                        // })
                                       
                               }}>
                                {/* <Ionicons style={{marginBottom:22}} name={Platform.OS ==='ios'?'ios-camera' :'md-camera'} color="white" size={60} /> */}
                                {  loading?<ActivityIndicator/>: <Text style={styles.cameratxt}>
                                  {this.state.message}
                                </Text>}
                              </TouchableOpacity>:
                              <Mutation mutation={CREATE_PICTURE}>{(createPicture,{data,loading,error})=>(
                                <TouchableOpacity style={styles.cameratouch} disabled={this.state.clicked?true:false} onPress={async ()=>{
                                          console.log("Confirm");
                                          this.setState({clicked:true});
                                         let photo = await this.camera.takePictureAsync({skipProcessing:true});
                                           let {data} = await createPicture({
                                              variables:{
                                                published:true
                                              }
                                            });
                                            this.setState({message:"Start"});
                                            alert("Successfully");
                                            this.props.navigation.navigate('Home');
                                              
                                            
                                        
                                }}>
                                 {loading?<ActivityIndicator/>:error?<Text>{error.message}</Text>: <Text style={styles.cameratxt}>
                                      {this.state.message}
                                    </Text>}
                                </TouchableOpacity>)}</Mutation>}
                          </View>
                </View>)}
            </Mutation>)

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
    height:'12%',
    width:'100%',
    backgroundColor:'black',
  
  },
  posht:{
    height:'17%',
    width:'100%',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  


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
    borderColor:'#1B971B',
    backgroundColor:'#1B971B',
    borderRadius:35,
     marginBottom  :20


  },
  flip :{
    height :'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
  
  },
  blank :{
    height :'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
  },
  home_icon :{
    height :'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
  },
  home_view :{
    height :'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
  },
  cameratxt:{
    fontSize:20,
    color:'#FEFEFE'
  },
  timer:{

  }
});
