import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image

} from 'react-native';
import ProfileButton from '../../components/ProfileButton';
let {height,width} = Dimensions.get('window');

export default class ProfileScreen extends Component { 
    static navigationOptions = {
       header:null
    };
    render(){
        return(
            <View style={styles.container}>
               <ScrollView style={styles.scroll_view}>
               
                    <ProfileButton width={width*0.9} name="Edit Profile"  style={{marginTop:20,marginBottom:20}} onPress={()=>this.props.navigation.navigate('EditProfile')}/>
                    <ProfileButton width={width*0.9} name="Edit Password "style={{marginBottom:20}} onPress={()=>this.props.navigation.navigate('Password')} />
                   
                    <ProfileButton width={width*0.9} name="Credit Card " onPress={()=>this.props.navigation.navigate('CreditCard')} />
                    <ProfileButton width={width*0.9} name="Push Notifications " onPress={()=>this.props.navigation.navigate('PushNotifications')}  />


                    <ProfileButton  width={width*0.9} name="Logout " onPress={()=>this.props.navigation.navigate('Logout')} />

               </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingTop:30,
    },
    foto :{
        height:20,
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    rreth :{
        height:150,
        width:150,
        borderRadius:100,
        borderWidth:1,
        borderColor:'gray',

    },
    scroll_view:{
        flex:1,
        padding:5,
       
    }
})