import React,{Component} from 'react';
import {
View,
TouchableOpacity,
Text,
StyleSheet
} from 'react-native';

export default class PayButton extends Component{
 
 render(){ 
       return(
     <View>
      <TouchableOpacity style={[style.container,this.props.style1]} onPress={this.props.onPress} >
          <Text style={style.txt}>
              {this.props.name}
          </Text>

      </TouchableOpacity>
      </View>
  );
 }
}
const style = StyleSheet.create({
    container:{
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        
    },
    txt:{
        fontSize:15,
        color:'black'
    }
})