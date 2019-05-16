        import React from 'react';
        import {TouchableOpacity,StyleSheet,View,Text}from "react-native";
        import  {LinearGradient }   from 'expo';

        export default class Button  extends React.Component {
        
        
            render() {
            return (
            <View>
                 
                 <TouchableOpacity style={[styles.buttoncontainer,{width:this.props.width},this.props.style]} onPress={this.props.onPress}>
                    <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} 
                            style={{flex:1, borderRadius:50,justifyContent:'center'}} 
                            colors={[this.props.color1,this.props.color2]} >
                        <Text style={[styles.buttontext,{color:this.props.color}]} >
                        {this.props.name}
                        </Text>
                     </LinearGradient>
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
            
                width:150,
                height:65,
                borderRadius:50,
                justifyContent:'center'
            },
            buttontext:{
                textAlign:'center',
                color:'#ecf0f1',
                fontSize:20,
                
            },
        });
        