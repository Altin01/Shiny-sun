                import React ,{Component} from 'react';
                import {
                    View,
                    StyleSheet,
                    Text,
                    Dimensions
                } from 'react-native';

                import RegisterInput from '../../components/RegisterInput';


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

                <RegisterInput
                    style={styles.Inputat}
                    width={width}
                    placeholder="Old Password"
                    returnKeyType="pass"
                    onChangeText={(oldPassword) => this.setState({oldPassword})} value={this.state.oldPassword}
                    secureTextEntry
                />

                <RegisterInput 
                    style={styles.Inputat}
                    width={width}
                    placeholder="New Password"
                    returnKeyType="pass"
                    onChangeText={(newPassword) => this.setState({newPassword})} value={this.state.newPassword}
                    secureTextEntry
                />


                <RegisterInput 
                    style={styles.Inputat}
                    width={width}
                    placeholder="Confirm Password"
                    returnKeyType="pass"
                    onChangeText={(confirmPassword) => this.setState({confrimPassword})} value={this.state.confirmPassword}
                    secureTextEntry
                />


                </View>


                );
                }}


                const styles = StyleSheet.create({
                    container : {
                    backgroundColor:'#fff',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:20
                    },


                })