        import React from 'react';
        import {TouchableOpacity,StyleSheet,View,Text}from "react-native";


        export default class Button  extends React.Component {
        
        
            render() {
            return (
            <View>

                    <TouchableOpacity style={styles.buttoncontainer} onPress={this.props.onPress}>
                    <Text style={styles.buttontext} >{this.props.name}</Text>
                    </TouchableOpacity>
                    
                

            </View>
            );
            }
        }
        
        const styles = StyleSheet.create({
            container: {
            flex: 1,
            paddingTop: 15,
            backgroundColor: '#fff',
            },
            buttoncontainer:{
                marginBottom:40,

                width:150,
                height:50,
                borderRadius:50,
                backgroundColor:'#1abc9c',
                justifyContent:'center'
            },
            buttontext:{
                textAlign:'center',
                color:'#ecf0f1',
                fontSize:25,
                
            },
        });
        