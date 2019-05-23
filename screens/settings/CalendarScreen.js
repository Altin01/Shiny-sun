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
         sel:false

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
                 onDayPress={   (day)=>{
                    day = {
                        ...day,
                        selected:!this.state.sel
                    }
                   
                    this.setState({days :[...days,day]});
                    this.state.days.forEach((day)=>{
                        this.setState({
                            newobj:{...this.state.newobj,
                             [day.dateString] :{ selected:day.sel, selectedColor:'red'}
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