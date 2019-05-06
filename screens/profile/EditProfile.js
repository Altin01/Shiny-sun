        import React from 'react';
        import {View,StyleSheet,TouchableOpacity,Dimensions,Text}from 'react-native';

        import RegisterInput from '../../components/RegisterInput';

        let {height,width}=Dimensions.get('window')

        export default class EditProfile extends React.Component{
         

        render(){
            return(
            <View>
     
                <RegisterInput 

                placeholder="Edit name "
                onChangeText={(text) => this.setState({text})}

                />


            <TouchableOpacity  style={[styles.buttoncontainer,{width:width}]} onPress={()=>{}}>
            <Text style={styles.buttontext}>Change Name</Text>
            </TouchableOpacity>


      

            </View>


            );
           }
        }

        
        const styles = StyleSheet.create({
            container : {
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
            paddingLeft:20,
            paddingRight:20
            },
            buttoncontainer:{
                height:50,
                borderRadius:50,
                backgroundColor:'#1abc9c',
                justifyContent:'center',
                alignItems:'center',
                marginBottom:50
              
            },
            buttontext:{
        
                textAlign:'center',
                color:'#ecf0f1',
                fontSize:20
            
            }


        })