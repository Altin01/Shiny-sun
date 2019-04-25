import React ,{Component,Fragment}from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { Mutation } from 'react-apollo';
import { LOGIN } from '../graphql/mutation';

import Errors from '../components/Errors';
import Loading from '../components/Loading';

export default class SigninScreen  extends Component{
    
    state ={
     email:'',
     password:''
    };

    render(){
        return(<View style={styles.container}>
                <View style={styles.textfields}>
                    <Mutation mutation={LOGIN}>{(login,{loading,data,error})=>(
                        <Fragment>
                            <TextInput style={styles.input}
                                    placeholder="Email"
                                    returnKeyType="next"
                                    // onSubmitEditing={()=>this.passwordInput.focus()}
                                    keyboardType="email-address"
                                    autoCapitalze="none"
                                    autoCorrect={false}
                                    value={this.state.email}
                                    onChangeText={email=>this.setState({email})}    
                            />

                            <TextInput style={styles.input}
                                    placeholder="Password"
                                    returnKeyType="go"
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={password=>this.setState({password})}
                            />

                            
                                    
                            <TouchableOpacity style={styles.buttoncontainer} onPress={async()=>{
                                    let { data }= await login({
                                        variables:{
                                            email:this.state.email,
                                            password:this.state.password
                                            }
                                        });
                                        
                                        const {payload,error}  = data.login;
                                        
                                        if(payload){

                                            await AsyncStorage.setItem('@toka-dhe-dielli:token',payload.token);
                                            this.props.navigation.navigate('Home');

                                        }
                              }}>
                                <Text style={styles.buttontext}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                            { loading ? <Loading /> :<Errors error={error} />}
                         </Fragment>
                    )}</Mutation>

                    <Button 
                        title="Register Here"
                        color="#1abc9c"
                        onPress={()=>this.props.navigation.navigate('Signup')}
                    />
            </View>
        </View>);
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
