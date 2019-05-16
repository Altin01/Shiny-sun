        import React,{Component} from 'react';
        import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
        import Button from '../components/Button';
        

        let {height,width} = Dimensions.get('window');
        export default class WelcomeScreen extends Component {
            static navigationOptions = {
                header:null
            };
            render(){
                return(
                    
                    <View style={style.container}>
                        <View style={style.nalt}>
                          <View style={style.sun}>
                            <Text style={{color:'#FEBE28',fontSize:38}}>
                                Shinysun
                            </Text>
                           </View>
                           <View style={{height:'70%'}}>

                           </View>
                        </View>
                        <View style={style.posht}>
                            <Button color="black" color1="rgb(255,110,0)" color2="#FEBE28" style={{marginBottom:30}} width={width*0.83} onPress={()=>this.props.navigation.navigate('Signin')}  name="LOGIN" navigo='Signin' />
                            <Button color="black"  color1="rgb(255,110,0)" color2="#FEBE28" width={width*0.83} onPress={()=>this.props.navigation.navigate('Signup')}  name="REGISTER" navigo='Signup'/>
                        </View>
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
            },
            nalt:{
                width:"100%",
                height:'65%',
                justifyContent:'center',
                alignItems:'center',
            },
            posht:{
                height:'30%',
            },
            sun:{
                height:'30%',
                width:'100%',
                justifyContent:'center',
                alignItems:'center'
            }
        })