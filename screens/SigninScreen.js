import React ,{Component,Fragment}from 'react';
import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
   
} from 'react-native';
import { Mutation } from 'react-apollo';
import { LOGIN } from '../graphql/mutation';

import Errors from '../components/Errors';
import Loading from '../components/Loading';
import RegisterInput from '../components/RegisterInput';
import Button from '../components/Button';


let {height,width} = Dimensions.get('window');

export default class SigninScreen  extends Component{
    
    state ={
     email:'',
     password:''
    };

    render(){
        return(
          <View style={styles.container}>
               

                    <Mutation mutation={LOGIN}>{(login,{loading,data,error})=>(
                        <Fragment>
                                <RegisterInput 
                                        bottom={30}
                                        width={width}        
                                        placeholder="Email"
                                        autoCorrect={false}
                                        value={this.state.email}
                                        onChangeText={email=>this.setState({email})}    
                                />

                                <RegisterInput 
                                        bottom={30}
                                        width={width}
                                        placeholder="Password"
                                        secureTextEntry
                                        value={this.state.password}
                                        onChangeText={password=>this.setState({password})}
                                />

                                { loading ? <Loading /> :<Errors error={error} />} 
                                <View style={styles.sun}>

                                <Button  name="Login" color="black" color1="rgb(255,110,0)" color2="#FEBE28" style={{marginBottom:30}} width={width*0.83} onPress={async()=>{
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
                                  
                                </Button>
                                </View>


                         </Fragment>
                    )}</Mutation>

                 
        </View>);
    }
}


const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
        alignItems:'center'
        
    },
    

    sun:{
        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
});
