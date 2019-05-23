import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Calendar} from 'react-native-calendars';
const moment = require('moment');

class CalendarScreen extends React.Component {
    constructor(props){
     super(props);
     this.state= {
         days:[],
         date:moment().format('YYYY-MM-DD'),
         newobj:{},
         sel:true

     }
   
  
     
    }
    render(){
       return(
         <View style={style.container}> 
            
            <Calendar 
                 minDate={this.state.date}
                 markedDates={
                   this.state.newobj
                  }
                 onDayPress={ (day)=>{
                console.log(this.state.days.length);
                    if(this.state.days.length < 1){
                        this.setState({days:[day]})
                    }else {
                        var arr =  this.state.days.map((val)=>{
                          if(day.dateString !== val.dateString){
                              return val;
                          }
                        });
                    }
                   console.log(arr);
                    this.setState({days:arr})
                    this.state.days.forEach((day)=>{
                        this.setState({
                            newobj:{...this.state.newobj,
                             [day.dateString] :{ selected:true, selectedColor:'red'}
                           }
                        });
                   })
                }}
                
           />    
         </View>  
       );
    }
}

const style = StyleSheet.create({
    container :{
        flex:1,
 
    }
});

export default CalendarScreen;