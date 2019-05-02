            import React, {Component,Fragment} from 'react';
            import {
                View,
                Text,
                TouchableOpacity,
                StyleSheet,
                AsyncStorage,
                Button
            }from "react-native";
            import RegisterInput from '../components/RegisterInput';

            import {Mutation} from 'react-apollo';
            import {SIGNUP} from '../graphql/mutation';

            import Errors from '../components/Errors';
            import Loading from '../components/Loading';

            export default class SignupScreen extends Component{
                static navigationOptions = {
                    title: 'Sign up',
                };
                state={
                    name:"",
                    email:"",
                    password:"",
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

                    <View>
                        <Mutation mutation={SIGNUP}>{(signup,{loading,data,error})=>(
                        <Fragment>
                        <RegisterInput 
                        onChangeText={(text)=> this.setState({name:text})}
                        value={this.state.name}
                        placeholder="First Name"></RegisterInput>

                        <RegisterInput 
                            style={styles.RegisterInput}
                            onChangeText={(text)=> this.setState({email:text})}
                            value={this.state.email}
                            placeholder="Email-Address"></RegisterInput>


                        <RegisterInput    
                            style={styles.RegisterInput}
                            onChangeText={(text)=> this.setState({password:text})}
                            value={this.state.password}
                            placeholder="Password"
                            secureTextEntry
                        ></RegisterInput>

                    
                            
                                <TouchableOpacity style={styles.buttoncontainer} onPress={async()=>{
                                        
                                        let { data }= await signup({
                                                variables:{
                                                        email:this.state.email,
                                                        name:this.state.name,
                                                        password:this.state.password
                                                }
                                            });
                                            let token = data.signup.token;
                                            await AsyncStorage.setItem('@toka-dhe-dielli:token',token);
                                            this.props.navigation.navigate('Home'); 
                                    }}>
                                    <Text style={styles.buttontext}>
                                    SingUp
                                    </Text>
                            </TouchableOpacity>
                            
                            
                            {loading? <Loading />: <Errors error={error} />}
                        </Fragment>
                            )}
                        </Mutation>
                
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
         
            text:{
                marginBottom:40,
                textAlign:'center',
                color:'black',
                fontSize:30,
                
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
        