import React ,{Component}from 'react';
import {Text,TextInput,Button,View,TouchableOpacity,StyleSheet}from 'react-native';



export default class LoginScreen  extends Component{
    
    render(){
        return(

  <View style={styles.container}>
  <View style={styles.textfields}>
  <TextInput style={styles.input}
  placeholder="Username"
  returnKeyType="next"
  onSubmitEditing={()=>this.passwordInput.focus()}
  keyboardType="email-address"
  autoCapitalze="none"
  autoCorrect={false}


  />


  <TextInput style={styles.input}
            placeholder="Password"
            returnKeyType="go"
            secureTextEntry
            ref={(input)=> this.passwordInput=input}

        />
  <TouchableOpacity style={styles.buttoncontainer} onPress={()=>this.props.navigation.navigate('Login')}>
  <Text style={styles.buttontext}>Login</Text>
  </TouchableOpacity>

<Button title="Register Here"
color="#1abc9c"
onPress={()=>this.props.navigation.navigate('Register')}
/>
  </View>
</View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        padding:30,
        flex:4,
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        
        width: 200,
        paddingLeft:20,
        borderRadius:60,
        height:50,
        fontSize:25,
        backgroundColor:'white',
        borderWidth:1,
        marginBottom:30,
        color:'#34495e'
        
    },
    buttoncontainer:{
        height:50,
        borderRadius:50,
        backgroundColor:'#1abc9c',
        justifyContent:'center'
      
    },
    buttontext:{

        textAlign:'center',
        color:'#ecf0f1',
        fontSize:20
    
    }
});
