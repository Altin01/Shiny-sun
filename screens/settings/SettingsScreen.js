import React from 'react';
import {View,Text,StyleSheet,Dimensions } from 'react-native';

import PayButton from '../../components/PayButon';

let {height,width} = Dimensions.get('window');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header:null
  };
  
  constructor(props){
    super(props);
    this.state = {
      first:'#FF8C00',
      second:'#FF8C00',
      third : '#FF8C00',
    }
  }
  render() {

    return (
      <View style={styles.container}>
         <View style={styles.butonat}>
            <View style={styles.btn2}>
              <PayButton  style1={{backgroundColor:this.state.first,borderColor:this.state.first,borderWidth:1,marginRight:30}} backcolor={this.state.first} 
              onPress={ async ()=>{
               await this.setState({
                  first:'red',
                  second:'#FF8C00',
                  third : '#FF8C00'
                })
              }} name="1$" />
              <PayButton  style1={{backgroundColor:this.state.second,borderColor:this.state.second,borderWidth:1,marginRight:30}} backcolor={this.state.second} onPress={()=>{
                this.setState({
                  first:'#FF8C00',
                  second:'red',
                  third : '#FF8C00'
                })
              }} name="5$"/>
              <PayButton style1={{backgroundColor:this.state.third,borderColor:this.state.third,borderWidth:1,marginRight:30}} backcolor={this.state.third} onPress={()=>{
                  this.setState({
                    first:'#FF8C00',
                    second:'#FF8C00',
                    third : 'red'
                  })
              }} name="10$"/>
              </View>


         </View>
         <View style={styles.ditet}>

         </View>
         <View style={styles.paybutton}> 

         </View>
       
  
    
  
      </View>
    )
  }
}
;
const styles = StyleSheet.create({
  container:{
  
    backgroundColor:'#fff',
    flex:1

  },
  butonat :{
    height:'35%',
    borderBottomColor:'#919191',
    borderBottomWidth:1,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
 btn2 :{
  height:'35%',
  flex:1,
  flexDirection:'row',
  padding:20
 }
  ,
  ditet : {
     height:'40%',
     borderBottomColor:'#919191',

  },
  paybutton :{
   height:'25%'
  }
})