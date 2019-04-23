import React ,{Component} from 'react';

import {
View,
Image,
StyleSheet
} from 'react-native'

export default class ImageScreen extends Component {
    
    state ={
        url :''
    }
    
    componentDidMount = async ()=>{
        let params = this.props.navigation.state.params;
        this.setState({url:params.pictureUrl})
    }

    render(){
       return(
           <View style={style.container}>
               <View style={style.nalt} >
        
               </View>
               <View  style={style.img}>
                   <Image 
                    source={{uri:this.state.url}}
                    style={{height:'100%',width:'100%'}}
                   />
               </View>
               <View style={style.posht}>
                   
               </View>
               </View>
       );
    }
}
const style = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#fff',
        height:'100%'
    },
    nalt :{
        height:'15%',
        width:'100%'
    },
    posht: {
        height:'15%',
        width:'100%'
    },
    img: {
        height:'70%',
        width:'100%'
    }
})