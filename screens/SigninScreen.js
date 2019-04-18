
import React ,{Component}from 'react';
import {Text,TextInput,Button,View,TouchableOpacity,StyleSheet}from 'react-native';

export default class SigninScreen extends Component {

    render(){
        return(<View style={styles.container}>

            <View style={styles.registerform}>
                
                    <TextInput style={styles.input}
                            placeholder="Enter your name..."
                            returnKeyType="next"
                            onSubmitEditing={()=>this.emailinput.focus()}
                    />
                    <TextInput style={styles.input}
                            placeholder="Enter you email..."
                            returnKeyType="next"
                            onSubmitEditing={()=>this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalze="none"
                            autoCorrect={false}
                            ref={(input)=>this.emailinput=input}
                        />  
                    <TextInput style={styles.input}
                            placeholder="Enter password..."
                            returnKeyType="go"
                            secureTextEntry
                            ref={(input)=> this.passwordInput=input}
                        />

                    <TouchableOpacity style={styles.buttoncontainer} onPress={()=>this.props.navigation.navigate('Signup')}>
                        <Text style={styles.buttontext}>Sing Up</Text>
                    </TouchableOpacity>
            </View>
         </View>);
         }
}

const styles = StyleSheet.create({ 
    container:{
        padding:20,
        flex:1,
        justifyContent:'center',
        alignItems:'stretch',

    },
    input:{
        paddingLeft:20,
        borderRadius:6,
        height:50,
        fontSize:22,
        backgroundColor:'white',
        borderWidth:1,
        marginBottom:20,
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

