import React, {Component,Fragment} from 'react';
import {
        View,
        Text,
        TouchableOpacity,
        StyleSheet,
        AsyncStorage,
        Dimensions
}from "react-native";
import RegisterInput from '../components/RegisterInput';

import {Mutation} from 'react-apollo';
import {SIGNUP} from '../graphql/mutation';

import Errors from '../components/Errors';
import Loading from '../components/Loading';
import Button from '../components/Button';
let {height,width} = Dimensions.get('window');

export default class SignupScreen extends Component{
    static navigationOptions = {
        title: 'Sign up',
        };
                state={
                    name:"",
                    email:"",
                    password:"",
                    confirmPassword:"",
                    fieldName:"",
                        
                    }
            textChanged=(fieldName)=>{ 
                    return(text)=>{
                    this.setState({
                    [fieldName]: text
                            
                    })
                }
                }

            render(){ 
                return(

                    <View style={styles.container}>
                        <Mutation mutation={SIGNUP}>{(signup,{loading,data,error})=>(
                            <Fragment>
                                    <RegisterInput 
                                        bottom={20}
                                        width={width} 
                                        onChangeText={(text)=> this.setState({name:text})}
                                        value={this.state.name}
                                        placeholder="First Name" 
                                        />

                                    <RegisterInput 
                                        bottom={20}
                                        width={width}
                                        onChangeText={(text)=> this.setState({email:text})}
                                        value={this.state.email}
                                        placeholder="Email-Address" 
                                    />

                                    <RegisterInput 
                                       bottom={20}
                                        width={width}    
                                        onChangeText={(text)=> this.setState({password:text})}
                                        value={this.state.password}
                                        placeholder="Password (should be at least 8)"
                                        secureTextEntry
                                    />
                                
                                    <RegisterInput

                                        bottom={0}
                                        width={width}   
                                        onChangeText={(text)=> this.setState({confirmPassword:text})}
                                        value={this.state.confirmPassword}
                                        placeholder="Confirm Password"
                                        secureTextEntry
                                    />
                                
                                    {loading? <Loading />: <Errors  error={error} />}
                                    <View style={styles.sun}>
                                    <Button name="SingUp"color="black" color1="rgb(255,110,0)" color2="#FEBE28" style={{marginBottom:30}} width={width*0.83}onPress={async()=>{
                                                    
                                                    let { data }= await signup({
                                                            variables:{
                                                                    email:this.state.email,
                                                                    name:this.state.name,
                                                                    password:this.state.password,
                                                                    confirmPassword:this.state.confirmPassword
                                                            }
                                                        });
                                                        let token = data.signup.token;
                                                        await AsyncStorage.setItem('@toka-dhe-dielli:token',token);
                                                        await AsyncStorage.setItem('id',data.signup.user.id);
                                                        this.props.navigation.navigate('Home'); 
                                                }}>
                                      
                                        </Button>
                                        
                                    </View>
                                  
                            </Fragment>
                            )}
                        </Mutation>
                
                </View>);
                }
            }


        const styles = StyleSheet.create({ 
            container:{
                paddingLeft:20,
                paddingRight:20,
                backgroundColor:'#fff',
                justifyContent:'center',
                alignItems:'center'
        
            },
      
            sun:{
                height:'30%',
                width:'100%',
                justifyContent:'center',
                alignItems:'center'
            }
        });
        