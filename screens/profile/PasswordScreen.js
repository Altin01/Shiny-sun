      import React ,{Component,Fragment} from 'react';
       import {
                    View,
                    StyleSheet,
                    Text,
                    Dimensions,
                    AsyncStorage,
                    TouchableOpacity
                } from 'react-native';

                import RegisterInput from '../../components/RegisterInput';

                import {Mutation} from 'react-apollo';
                import {EDIT_PASSWORD} from '../../graphql/mutation';
                
                import Errors from '../../components/Errors';
                import Loading from '../../components/Loading';


      let {height,width}=Dimensions.get('window')

                export default class PasswordScreen extends Component{

                    constructor(props) {
                        super(props);

                            this.state = {
                            oldPassword: "",
                            newPassword: "",
                            confirmPassword: ""
                        };
                    }


 render(){
     return(
                <View style={styles.container}>
                     <Mutation mutation={EDIT_PASSWORD}>{(changePassword,{loading,data,error})=>(
                        <Fragment>
                            <RegisterInput
                            
                                width={width}
                                placeholder="Old Password"
                                returnKeyType="pass"
                                onChangeText={(oldPassword) => this.setState({oldPassword})} value={this.state.oldPassword}
                                secureTextEntry
                            />

                            <RegisterInput 
                            
                                width={width}
                                placeholder="New Password"
                                returnKeyType="pass"
                                onChangeText={(newPassword) => this.setState({newPassword})} value={this.state.newPassword}
                                secureTextEntry
                            />


                            <RegisterInput 
                            
                                width={width}
                                placeholder="Confirm Password"
                                returnKeyType="pass"
                                onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword}
                                secureTextEntry
                            />
                                
                                {loading? <Loading />: <Errors  error={error} /> }
                                        <TouchableOpacity style={[styles.buttoncontainer,{width:width}]} onPress={async()=>{
                                           
                                           console.log(error);
                                           let {data} =  await changePassword({ 
                                                                  variables:{
                                                                    password:this.state.oldPassword,
                                                                    newPassword:this.state.newPassword,
                                                                    confirmPassword:this.state.confirmPassword   
                                                                }
                                                            });
                                                            AsyncStorage.removeItem('@toka-dhe-dielli:token');
                                                            this.props.navigation.navigate('Register'); 
                                                    }}>
                                                    <Text style={styles.buttontext}>
                                                        Edit
                                                    </Text>
                                            </TouchableOpacity>
                                            
             </Fragment> )}</Mutation>
                </View>


                );
                }}


                const styles = StyleSheet.create({
                    container : {
                    backgroundColor:'#fff',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingLeft:20,
                    paddingRight:20
                    },
                    buttoncontainer:{
                        height:50,
                        borderRadius:50,
                        backgroundColor:'#1abc9c',
                        justifyContent:'center',
                        alignItems:'center'
                      
                    },
                    buttontext:{
                
                        textAlign:'center',
                        color:'#ecf0f1',
                        fontSize:20
                    
                    }


                })