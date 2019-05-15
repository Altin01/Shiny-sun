import React, {Component} from 'react';

import {View,Text,StyleSheet,Picker} from 'react-native';

export default class PushNotifications extends Component{
    constructor(props){
        super(props)
        this.state={
            number:"",
            
        };
    }
render(){
    return(
<View style={styles.container}>

<Text>Chose your notification time in minutes</Text>


<Picker style={styles.picker}
selectedValue={this.state.minutes}
onVlaueChange={(minutes)=>this.setState({minutes})}

 

>
<Picker.Item label="5" value={5}/>
<Picker.Item label="10" value={10}/>
<Picker.Item label="15" value={15}/>
<Picker.Item label="20" value={20}/>
<Picker.Item label="25" value={25}/>
<Picker.Item label="30" value={30}/>

</Picker>

</View>

     );
   }
 }
 const styles = StyleSheet.create({

    container :{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#fff'
    },
    picker:{
  width:100,
    }
})