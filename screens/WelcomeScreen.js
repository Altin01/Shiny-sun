        import React,{Component} from 'react';
        import {View,Text,StyleSheet} from 'react-native';
        import ButtonSingin from '../components/ButtonSingin';

        export default class WelcomeScreen extends Component {
            static navigationOptions = {
                title: 'Welcome',
            };
            render(){
                return(
                    <View style={style.container}>
                        
                        <ButtonSingin   onPress={()=>this.props.navigation.navigate('Signin')}  name="Signin" navigo='Signin' />
                        <ButtonSingin   onPress={()=>this.props.navigation.navigate('Signup')}  name="Regjistrohu" navigo='Signup'/>
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