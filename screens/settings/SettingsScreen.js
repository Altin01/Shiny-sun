import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';

import PayButton from '../../components/PayButon';
import { CHANGE_SETTINGS } from '../../graphql/mutation';
import {PUNISHED_DAYS} from '../../graphql/queries';

import { Mutation, Query } from 'react-apollo';
import ProfileButton from '../../components/ProfileButton';

let {height,width} = Dimensions.get('window');

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    
  };
  
  constructor(props){
    super(props);
    this.state = {
      p1:false,
      p5:false,
      p10:false,
      monday:false,
      tuesday:false,
      wednesday:false,
      thursday:false,
      friday:false,
      saturday:false,
      sunday:false,
      
    }
 
  }

  render() {
   return <Query query={PUNISHED_DAYS}>{({data,loading,error})=>{
      if(loading){
        return <View>
            <ActivityIndicator/>
        </View>
      }else if (error){
          return <View>
              <Text>
                {error.message}
              </Text>
          </View>
      }
      let monday = data.punishedDays.monday;
      let tuesday= data.punishedDays.tuesday;
      let wednesday= data.punishedDays.wednesday;
      let thursday = data.punishedDays.thursday;
      let friday = data.punishedDays.friday;
      let saturday= data.punishedDays.saturday;
      let sunday = data.punishedDays.sunday;
      let price= data.punishedDays.price;
      console.log(JSON.stringify(data));
      
      return <Mutation mutation={CHANGE_SETTINGS}>{(changeSettings,{loading,data,error})=>(
         <View style={styles.container}>
                  <View style={styles.punishtext}>
                    <Text>
                          Select how much do you want to be punished.
                    </Text>
                  </View>
                  <View style={styles.butonat}>
                    
                        <PayButton 
                          
                            color={price===1?'white':'black'} 
                            style1={{backgroundColor:price===1?'#8B0000':'#D3D3D3',borderColor:price===1  ?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
                            backcolor={this.state.first} 
                            onPress={ async()=>{ 
                             
                              let {data} = await changeSettings({
                                variables :{
                                  monday:monday,
                                  tuesday:tuesday,
                                  wednesday:wednesday,
                                  thursday:thursday,
                                  friday:friday,
                                  saturday:saturday,
                                  sunday:sunday,
                                  price:1
                                }
                              })
                                 console.log(price);
                              console.log(JSON.stringify(data));
                             

                            }} 
                            name="1$" 
                        />
                        <PayButton 
                           
                            color={price===5?'white':'black'}
                            style1={{backgroundColor:price===5?'#8B0000':'#D3D3D3',borderColor:price===5?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
                            backcolor={this.state.second}
                            onPress={ async ()=>{
                            
                              let {data} = await changeSettings({
                                variables :{
                                  monday:monday,
                                  tuesday:tuesday,
                                  wednesday:wednesday,
                                  thursday:thursday,
                                  friday:friday,
                                  saturday:saturday,
                                  sunday:sunday,
                                  price:5
                                }
                              })
                              console.log(JSON.stringify(data));
                              console.log(price);
                             

                            }}
                            name="5$" 
                        />
                        <PayButton 
                       
                            color={price===10?'white':'black'}
                            style1={{backgroundColor:price===10?'#8B0000':'#D3D3D3',borderColor:price===10?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                            backcolor={this.state.third}
                              onPress={ async ()=>{
                               
                                let {data} = await changeSettings({
                                  variables :{
                                    monday:monday,
                                    tuesday:tuesday,
                                    wednesday:wednesday,
                                    thursday:thursday,
                                    friday:friday,
                                    saturday:saturday,
                                    sunday:sunday,
                                    price:10
                                  }
                                })
                                console.log(price);
                              console.log(JSON.stringify(data));
                          

                            }}
                            name="10$"
                        />
                      


                  </View>
                  <View style={styles.ditet}>
                    <View style={styles.week_text}>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>
                          Turn On or Of which days you don't want to be punished when you don't make a photo(By Default all days are ON).
                        </Text>
                    </View>
                    <View style={styles.ditet_nalt}>

                          {/* dita e HANE*/}
                          <PayButton 
                               
                                name="Mon"
                                onPress={ async ()=>{
                                 
                                  let {data} = await changeSettings({
                                    variables :{
                                      monday:!monday,
                                      tuesday:tuesday,
                                      wednesday:wednesday,
                                      thursday:thursday,
                                      friday:friday,
                                      saturday:saturday,
                                      sunday:sunday,
                                      price:price
                                    }
                                  })
                                 console.log(JSON.stringify(data));
                                


                                }}
                                style1={{width:width*0.22,backgroundColor:monday?'#8B0000':'#D3D3D3',borderColor:monday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                                color={monday?'white':'black'}
                          /> 

                          {/* dita e MARTE*/}           
                          <PayButton 
                               
                                name="Tues"
                                style1={{width:width*0.22,backgroundColor:tuesday?'#8B0000':'#D3D3D3',borderColor:tuesday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                                onPress={ async ()=>{
                              
                                  let {data} = await changeSettings({
                                    variables :{
                                      monday:monday,
                                      tuesday:!tuesday,
                                      wednesday:wednesday,
                                      thursday:thursday,
                                      friday:friday,
                                      saturday:saturday,
                                      sunday:sunday,
                                      price:price
                                    }
                                    
                                  })
                                  
                              console.log(JSON.stringify(data));
                                  
                                }}
                                
                                  color={tuesday?'white':'black'} /> 

                          {/* dita e MERKURE*/}
                          <PayButton 
                             
                              name="Wed"
                              style1={{width:width*0.22,backgroundColor:wednesday?'#8B0000':'#D3D3D3',borderColor:wednesday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={ async ()=>{
                               
                                let {data} = await changeSettings({
                                  variables :{
                                    monday:monday,
                                    tuesday:tuesday,
                                    wednesday:!wednesday,
                                    thursday:thursday,
                                    friday:friday,
                                    saturday:saturday,
                                    sunday:sunday,
                                    price:price
                                  }
                                })
                              
                              console.log(JSON.stringify(data));
                               
                              }}
                                color={wednesday?'white':'black'}
                            /> 

                          {/* dita e ENJTE*/}
                          <PayButton 
                             
                              name="Thurs"
                              style1={{width:width*0.22,backgroundColor:thursday?'#8B0000':'#D3D3D3',borderColor:thursday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={ async ()=>{
                              
                                let {data} = await changeSettings({
                                  variables :{
                                    monday:monday,
                                    tuesday:tuesday,
                                    wednesday:wednesday,
                                    thursday:!thursday,
                                    friday:friday,
                                    saturday:saturday,
                                    sunday:sunday,
                                    price:price
                                  }
                                })
                               
                                console.log(JSON.stringify(data));
                                }}
                                  color={thursday?'white':'black'}
                            /> 
                        </View>
                        <View style={styles.ditet_posht}>
                              {/* dita e PREMTE*/}
                              <PayButton
                                 
                                  name="Fri"
                                  style1={{width:width*0.22,backgroundColor:friday?'#8B0000':'#D3D3D3',borderColor:friday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={ async ()=>{
                                  
                                      let {data} = await changeSettings({
                                        variables :{
                                          monday:monday,
                                          tuesday:tuesday,
                                          wednesday:wednesday,
                                          thursday:thursday,
                                          friday:!friday,
                                          saturday:saturday,
                                          sunday:sunday,
                                          price:price
                                        },
                                        
                                      })
                                     

                                        }}
                                      color={friday?'white':'black'}
                                /> 

                              {/* dita e SHTUNE*/}
                              <PayButton 
                                
                                name="Sat"
                                style1={{width:width*0.22,backgroundColor:saturday?'#8B0000':'#D3D3D3',borderColor:saturday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                      onPress={ async ()=>{
                                       
                                        let {data} = await changeSettings({
                                          variables :{
                                            monday:monday,
                                            tuesday:tuesday,
                                            wednesday:wednesday,
                                            thursday:thursday,
                                            friday:friday,
                                            saturday:!saturday,
                                            sunday:sunday,
                                            price:price
                                          }
                                        })
                              console.log(JSON.stringify(data));
                                      
                                        
                                    }}
                                      color={saturday?'white':'black'}
                                /> 

                              {/* dita e DILLE*/}
                              <PayButton  
                                  
                                  name="Sun"
                                  style1={{width:width*0.22,backgroundColor:sunday?'#8B0000':'#D3D3D3',borderColor:sunday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                        onPress={ async ()=>{
                                         
                                          let {data} = await changeSettings({
                                            variables :{
                                              monday:monday,
                                              tuesday:tuesday,
                                              wednesday:wednesday,
                                              thursday:thursday,
                                              friday:friday,
                                              saturday:saturday,
                                              sunday:!sunday,
                                              price:price
                                            }
                                          })
                                 console.log(JSON.stringify(data));
                                         

                                        }}
                                      color={sunday?'white':'black'}
                                /> 
                        </View>
                  </View>
                  <View style={styles.paybutton}> 
               
                  </View> 
        
  
         </View>
       )}</Mutation>
   }}</Query>    
    }
}

const styles = StyleSheet.create({
  container:{
  
    backgroundColor:'#fff',
    flex:1

  },
  butonat :{
    height:'20%',
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
   height:'30%',
   justifyContent:'center',
   alignItems:'center'
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
    padding:20
    
  }
  
})
export default SettingsScreen;