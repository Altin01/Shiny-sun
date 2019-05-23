        import React, {Component} from "react";

        import {
            TextInput,
            StyleSheet
            
        }from "react-native";


        export default function RegisterInput (props){
            return(
            
                    <TextInput   
                         
                        style={[styles.input,{width:props.width},{marginBottom:props.bottom}]}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        placeholder={props.placeholder}
                        secureTextEntry={props.secureTextEntry}>
                    </TextInput>
           
            )
        }

        const styles = StyleSheet.create({ 
    
            input:{
                height:50,
                fontSize:20,
                color:'#34495e',
                borderBottomWidth:1,
                borderBottomColor:'#FEBE28',
                
            },
        });
                