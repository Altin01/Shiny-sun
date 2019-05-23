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
                import Button from '../../components/Button';

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
                                <View style={styles.sun}>

                                        <Button name="Edit" color="black" color1="rgb(255,110,0)" color2="#FEBE28" style={{marginBottom:30}} width={width*0.83} onPress={async()=>{
                                           
                                           console.log(error);
                                           let {data} =  await changePassword({ 
                                                                  variables:{
                                                                    password:this.state.oldPassword,
                                                                    newPassword:this.state.newPassword,
                                                                    confirmPassword:this.state.confirmPassword   
                                                                }
                                                            });
                                                           
                                                            this.props.navigation.navigate('Profile'); 
                                                    }}>
                                                   
                                            </Button>
                                            </View>
                                            
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
                    sun:{
                        height:'30%',
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                      
                    }


                })