import React from 'react';
import {View,Text,StyleSheet,Dimensions } from 'react-native';

import PayButton from '../../components/PayButon';

let {height,width} = Dimensions.get('window');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    
  };
  
  constructor(props){
    super(props);
    this.state = {
      first:'#D3D3D3',
      second:'#D3D3D3',
      third : '#D3D3D3',
      color1:'black',
      color2:'black',
      color3:'black', 
      monday:true,
      tuesday:true,
      wensday:true,
      thursday:true,
      friday:true,
      saturday:true,
      sunday:true,

      


    }
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.punishtext}>
          <Text>
                Select how much do you want to be punished.
          </Text>
        </View>
         <View style={styles.butonat}>
           
              <PayButton 
                  color={this.state.color1} 
                  style1={{backgroundColor:this.state.first,borderColor:this.state.first,borderWidth:1,marginRight:40}}
                  backcolor={this.state.first} 
                  onPress={ async ()=>{
                  await this.setState({
                      first:'#8B0000',
                      second:'#D3D3D3',
                      third : '#D3D3D3',
                      color1:'white',
                      color2:'black',
                      color3:'black'

                    })
                  }} 
                  name="1$" 
              />
              <PayButton 
                  color={this.state.color2}
                  style1={{backgroundColor:this.state.second,borderColor:this.state.second,borderWidth:1,marginRight:40}}
                  backcolor={this.state.second}
                  onPress={async ()=>{
                   await this.setState({
                      first:'#D3D3D3',
                      second:'#8B0000',
                      third : '#D3D3D3',
                      color1:'black',
                      color2:'white',
                      color3:'black'
                    })
                  }}
                  name="5$"
              />
              <PayButton 
                  color={this.state.color3}
                  style1={{backgroundColor:this.state.third,borderColor:this.state.third,borderWidth:1,marginRight:15}}
                   backcolor={this.state.third}
                    onPress={ async ()=>{
                     await this.setState({
                        first:'#D3D3D3',
                        second:'#D3D3D3',
                        third : '#8B0000',
                        color1:'black',
                      color2:'black',
                      color3:'white'
                      })
                  }}
                  name="10$"
               />
            


         </View>
         <View style={styles.ditet}>
           <View style={styles.week_text}>
              <Text>
                 Turn On or Of wich days tou dont want to be punished(By Default all days are ON).
              </Text>
           </View>
           <View style={styles.ditet_nalt}>

                {/* dita e HANE*/}
                <PayButton 
                      name="Mon"
                      onPress={ async ()=>{
                        await this.setState({
                          monday:!this.state.monday,
                        })
                      }}
                      style1={{width:width*0.22,backgroundColor:this.state.monday?'#8B0000':'#D3D3D3',borderColor:this.state.monday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                      color={this.state.monday?'white':'black'}
                /> 

                {/* dita e MARTE*/}
                <PayButton 
                      name="Tues"
                      style1={{width:width*0.22,backgroundColor:this.state.tuesday?'#8B0000':'#D3D3D3',borderColor:this.state.tuesday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                      onPress={ async ()=>{
                        await this.setState({
                          tuesday:!this.state.tuesday,
                        })
                      }}
                        color={this.state.monday?'white':'black'}
                  /> 

                {/* dita e MERKURE*/}
                <PayButton 
                     name="Wed"
                    style1={{width:width*0.22,backgroundColor:this.state.wensday?'#8B0000':'#D3D3D3',borderColor:this.state.wensday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                    onPress={ async ()=>{
                      await this.setState({
                        wensday:!this.state.wensday,
                      })
                    }}
                      color={this.state.monday?'white':'black'}
                  /> 

                {/* dita e ENJTE*/}
                <PayButton 
                    name="Thurs"
                    style1={{width:width*0.22,backgroundColor:this.state.thursday?'#8B0000':'#D3D3D3',borderColor:this.state.thursday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                    onPress={ async ()=>{
                      await this.setState({
                          thursday:!this.state.thursday,
                        })
                      }}
                        color={this.state.monday?'white':'black'}
                  /> 
              </View>
              <View style={styles.ditet_posht}>
                    {/* dita e PREMTE*/}
                    <PayButton
                    name="Fri"
                    style1={{width:width*0.22,backgroundColor:this.state.friday?'#8B0000':'#D3D3D3',borderColor:this.state.friday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                       onPress={ async ()=>{
                         await this.setState({
                              friday:!this.state.friday,
                              })
                          }}
                            color={this.state.monday?'white':'black'}
                      /> 

                    {/* dita e SHTUNE*/}
                    <PayButton 
                     name="Sat"
                     style1={{width:width*0.22,backgroundColor:this.state.saturday?'#8B0000':'#D3D3D3',borderColor:this.state.saturday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                          onPress={ async ()=>{
                            await this.setState({
                              saturday:!this.state.saturday,   
                            })
                          }}
                            color={this.state.monday?'white':'black'}
                      /> 

                    {/* dita e DILLE*/}
                    <PayButton 
                    name="Sun"
                    style1={{width:width*0.22,backgroundColor:this.state.sunday?'#8B0000':'#D3D3D3',borderColor:this.state.sunday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                          onPress={ async ()=>{
                            await this.setState({
                              sunday:!this.state.sunday,
                              })
                          }}
                            color={this.state.monday?'white':'black'}
                      /> 
               </View>
         </View>
         <View style={styles.paybutton}> 

         </View>
       
  
    
  
      </View>
    )
  }
}
;
const styles = StyleSheet.create({
  container:{
  
    backgroundColor:'#fff',
    flex:1

  },
  butonat :{
    height:'20%',
    borderBottomColor:'#919191',
    borderBottomWidth:1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  }
  ,
  ditet : {
     height:'40%',
     borderBottomColor:'#919191',

  },
  paybutton :{
   height:'30%'
  },
  punishtext:{
    justifyContent:'center',
    alignItems:'center',
    height:'5%'
  },
  ditet_nalt:{
    height:'45%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  ditet_posht:{
    height:'45%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  week_text:{
    height:'10%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  }
  
})