import React, {Component} from 'react';
    import {View,Text,TouchableOpacity,StyleSheet}from "react-native";
    import Register from '../components/RegisterInput';

        export default class Register extends Component{
        
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
           
            <Text style={styles.text}>Register</Text>
            
            <Input 
             onChangeText={(text)=> this.setState({name:text})}
             value={this.state.lastName}
             placeholder="First Name"></Input>

            <Input 
            style={styles.input}
            onChangeText={(text)=> this.setState({email:text})}
            value={this.state.email}
            placeholder="Email-Address"></Input>


             <Input    
            style={styles.input}
            onChangeText={(text)=> this.setState({password:text})}
            value={this.state.password}
            placeholder="Password"
            secureTextEntr></Input>


            <TouchableOpacity style={styles.buttoncontainer} onPress={()=>this.props.navigation.navigate('Register')}>
            <Text style={styles.buttontext}>Register</Text>
            </TouchableOpacity>

            </View>



                );
            }
        }


        const styles = StyleSheet.create({ 
            container:{
                padding:20,
                flex:1,
                justifyContent:'center',
                alignItems:'stretch',
        
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
                fontSize:20,
                
            },
            text:{
                marginBottom:40,
                textAlign:'center',
                color:'black',
                fontSize:30,
                
            },
         
          
        });
        