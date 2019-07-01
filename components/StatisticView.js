import React,{Component} from 'react';
import {View,StyleSheet,Text,ActivityIndicator} from 'react-native';

export default class StatisticView extends Component {
    render(){
        return(
         <View style={[style.container,this.props.style]}>
          <View style={style.nalt}>
           <Text style={style.title}>
               {this.props.title}
           </Text>
          </View>
          <View style={style.mes}>
           {this.props.loading?<ActivityIndicator />:<Text style={style.rate}>
           {this.props.rate}
           </Text>}
          </View>
          <View style={style.posht}>
            
          </View>
         </View>
        )
    }
}

const style = StyleSheet.create({
    
    container:{
        height:100,
        width:90,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:10,

    },
    nalt:{
       height:'30%',
       justifyContent:'center',
       alignItems:'center',

    },
    mes:{
        height:'30%',
        justifyContent:'flex-start',
        alignItems:'center',

    },
    posht:{
        height:'40%',
    },
    title:{
     fontSize:18,
     color:'#F0E6ED'
    },
    rate:{
     fontSize:22,
     color:'#F0E6ED'

    }
})