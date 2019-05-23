import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage,
    Dimensions
    
} from 'react-native';
import ProfileButton from '../../components/ProfileButton';

let {height,width} = Dimensions.get('window');
export default class LogoutScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
               

                  <ProfileButton style={styles.ProfileButton}
                   width={width}
                   name="Log out"  onPress={()=>{
                   AsyncStorage.removeItem('@toka-dhe-dielli:token');
                   this.props.navigation.navigate('Register');
               }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent :'center',
        alignItems:'center',

    },
    ProfileButton:{
        color:'#FEBE28'
    }
})