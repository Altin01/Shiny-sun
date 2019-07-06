import React ,{Component} from 'react';
import TabIcon from '../components/TabBarIcon';
import {
    Text,
    View,
    StyleSheet,
 Dimensions
} from 'react-native';

let {height,width} = Dimensions.get('window');
export default class DaysComponent extends Component {

    render(){
        return(
            <View style={[style.container,this.props.style]}>
              <View style={style.numri}>
                <View style={{height:42,width:42,borderRadius:21,justifyContent:'center',alignItems:'center',backgroundColor:'#AFAEAE'}}>
                     <Text>{this.props.numri}</Text>
                </View>
              </View>
              <View style={style.dita}>
                 <Text style={{fontSize:18}}> {this.props.dita}</Text>
              </View>
              <View style={style.numri}>
                {this.props.done?
                 <View style={{height:42,borderRadius:21,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}><TabIcon  focused={true}  name={"md-done-all"} />
                 </View>:<View style={{height:42,width:42,borderRadius:21,justifyContent:'center',alignItems:'center',backgroundColor:'#C47AB0'}}><Text style={{fontSize:20,color:'white',justifyContent:'center',alignItems:'center'}}>
                    {"x"}
                </Text></View>}
              </View>
              <View style={style.bool}>
                  {this.props.done?<Text>Done</Text>:<Text>Failed</Text>}
              </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
 container :{
    width:width*0.9,
    justifyContent:'center',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#AFAEAE',
    flexDirection:'row',
    height:70
 },
 dita:{
     width:'35%',
     height:'100%',
     justifyContent:'center',
     alignItems:'center',

 },
 bool:{
    width:'25%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
 },
 numri:{
   width:'20%',
   height:'100%',
   justifyContent:'center',
   alignItems:'center'
 }
})