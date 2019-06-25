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