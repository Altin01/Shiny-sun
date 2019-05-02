import React ,{Component} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export default class ProfileButton extends Component {
    render(){
        return(

            <TouchableOpacity style={[styles.container,{width:this.props.width}]} onPress={this.props.onPress}>
                <Text style={styles.txt}>
                  {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles =StyleSheet.create({
    container :{
        height:60,
        borderBottomWidth:1,
        borderBottomColor:'grey',
      
        justifyContent:'center',
        alignItems:'center',

    },
    name : {
        
    }
})