        import React,{Component} from 'react';
        import {View,Text,StyleSheet} from 'react-native';
        import Button from '../components/Button';

        export default class WelcomeScreen extends Component {
            static navigationOptions = {
                title: 'Welcome',
            };
            render(){
                return(
                    <View style={style.container}>
                        
                        <Button   onPress={()=>this.props.navigation.navigate('Signin')}  name="Signin" navigo='Signin' />
                        <Button   onPress={()=>this.props.navigation.navigate('Signup')}  name="Singup" navigo='Signup'/>
                    </View>
                )
            }
        }
        const style = StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:'#fff',
                justifyContent:'center',
                alignItems:'center'
            }
        })