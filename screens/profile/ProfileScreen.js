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
       title:"Profile"
    };
    render(){
        return(
            <View style={styles.container}>
               <ScrollView style={styles.scroll_view}>
               
                    <ProfileButton style={{marginBottom:10}} width={width*0.83}  name="Edit Profile"        onPress={()=>this.props.navigation.navigate('EditProfile')}/>
                    <ProfileButton style={{marginBottom:10}} width={width*0.83}  name="Edit Password "      onPress={()=>this.props.navigation.navigate('Password')} />
                    <ProfileButton style={{marginBottom:10}} width={width*0.83}  name="Credit Card "        onPress={()=>this.props.navigation.navigate('CreditCard')} />
                    <ProfileButton style={{marginBottom:10}} width={width*0.83}  name="Statistics"          onPress={()=>this.props.navigation.navigate('Statistics')}  />  
                    <ProfileButton style={{marginBottom:10}} width={width*0.83}  name="Logout "            onPress={()=>this.props.navigation.navigate('Logout')} />

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
       
       
    }
})