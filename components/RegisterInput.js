        import React, {Component} from "react";

        import {
            TextInput,
            View,
            StyleSheet
            
        }from "react-native";


        export default function RegisterInput (props){
            return(
                <View>

                    <TextInput  
                    style={[styles.input,{width:props.width}]}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry}>
                    </TextInput>
                </View>
            )
        }

        const styles = StyleSheet.create({ 
            container:{
                padding:20,
                flex:1,
                justifyContent:'center',
                alignItems:'center',

            },
            input:{
                marginBottom:40,
                height:50,
                fontSize:28,
                color:'#34495e',
                borderBottomWidth:1,
                borderBottomColor:'green',
                
            },
        });
                