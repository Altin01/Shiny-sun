<<<<<<< HEAD
                import React, {Component} from 'react';

                import {View,Text,StyleSheet,Picker,ScrollView} from 'react-native';

                export default class PushNotifications extends Component{
                    static navigationOptions = {
                        title :"Push Notificatoin"
                         };
                    constructor(props){
                        super(props)
                        this.state={
                            minutes:"",
                        };
                    }
                    
                render(){
                    return(
                <View style={styles.container}>
                                    <Text>Chose your notification time in minutes</Text>

               <ScrollView style={styles.scroll_view}>



                <Picker style={styles.picker}
                selectedValue={this.state.minutes}
                onVlaueChange={(minutes)=>this.setState({minutes})}
                >


                <Picker.Item label="5"  value={5} />
                <Picker.Item label="10" value={10} />
                <Picker.Item label="15" value={15} />
              

                </Picker>
</ScrollView>
                </View>

                    );
                }
                }
                const styles = StyleSheet.create({

                    container :{
                        flex:1,
                        justifyContent:"center",
                        alignItems:'center',
                        backgroundColor:'#fff'
                    },
                    picker:{
                width:100,
                    }
                })
=======
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput } from 'react-native';

export default class PushNotifications extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.mobile_no}
          onChangeText={mobile_no => this.setState({ mobile_no })}
          placeholder={'Enter Mobile to Send WhatsApp Message'}
          style={styles.input}
          keyboardType={'numeric'}
        />
        <Text
          style={{marginTop:30}}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=+383' + this.state.mobile_no+
              'http://api.whatsapp.com/send?phone=+386' + this.state.mobile_no+
              'http://api.whatsapp.com/send?phone=+377' + this.state.mobile_no


            );
          }}>
          Send WhatsApp Message
        </Text>
      </View>
    );
  }s
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:50,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
 input: {
   width:250,
   height: 44,
   padding: 10,
   margin: 20,
   backgroundColor: '#D3D3D3',
 },
});
>>>>>>> cd4f9e08e09b9e13694a730480531bb20165b0bf
