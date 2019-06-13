import React from 'react';
import {View,Text,StyleSheet,Dimensions,Fragment } from 'react-native';

import PayButton from '../../components/PayButon';
import { SETPUNISHMENT } from '../../graphql/mutation';

import { Mutation } from 'react-apollo';
import ProfileButton from '../../components/ProfileButton';

let {height,width} = Dimensions.get('window');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    
  };
  
  constructor(props){
    super(props);
    this.state = {
      pay1:false,
      pay5:false,
      pay10:false,
      monday:true,
      tuesday:true,
      wensday:true,
      thursday:true,
      friday:true,
      saturday:true,
      sunday:true,
      arrayweek:[],
      done:false,
      pagesa:1,
      loading:false
    }
  }
  render() {

    return (
      <Mutation mutation={SETPUNISHMENT}>{(SetPunishment,{loading,data,error})=>(
         <View style={styles.container}>
       
            
                  <View style={styles.punishtext}>
                    <Text>
                          Select how much do you want to be punished.
                    </Text>
                  </View>
                  <View style={styles.butonat}>
                    
                        <PayButton 
                            color={this.state.pay1?'white':'black'} 
                            style1={{backgroundColor:this.state.pay1?'#8B0000':'#D3D3D3',borderColor:this.state.pay1?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
                            backcolor={this.state.first} 
                            onPress={ async ()=>{
                            await this.setState({
                              pay1:!this.state.pay1,
                              pay5:false,
                              pay10:false,
                              pagesa:1
                              })
                            }} 
                            name="1$" 
                        />
                        <PayButton 
                            color={this.state.pay5?'white':'black'}
                            style1={{backgroundColor:this.state.pay5?'#8B0000':'#D3D3D3',borderColor:this.state.pay5?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
                            backcolor={this.state.second}
                            onPress={async ()=>{
                            await this.setState({
                                pay1:false,
                                pay5:!this.state.pay5,
                                pay10:false,
                                pagesa:5

                              })
                            }}
                            name="5$"
                        />
                        <PayButton 
                            color={this.state.pay10?'white':'black'}
                            style1={{backgroundColor:this.state.pay10?'#8B0000':'#D3D3D3',borderColor:this.state.pay10?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                            backcolor={this.state.third}
                              onPress={ async ()=>{
                              await this.setState({
                                pay1:false,
                                pay5:false,
                                pay10:!this.state.pay10,
                                pagesa:10
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
                                  await this.setState({
                                      arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                    });
                                  
                                  console.log(this.state.arrayweek);

                                  this.setState({done:true});

                                  
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
                                  await this.setState({
                                      arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                    });
                                
                                  console.log(this.state.arrayweek);

                                  this.setState({done:true});
                                }}
                                  color={this.state.tuesday?'white':'black'}
                            /> 

                          {/* dita e MERKURE*/}
                          <PayButton 
                              name="Wed"
                              style1={{width:width*0.22,backgroundColor:this.state.wensday?'#8B0000':'#D3D3D3',borderColor:this.state.wensday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={ async ()=>{
                                await this.setState({
                                  wensday:!this.state.wensday,
                                })
                                await  this.setState({
                                    arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                  });
                              
                                console.log(this.state.arrayweek);

                                this.setState({done:true});
                              }}
                                color={this.state.wensday?'white':'black'}
                            /> 

                          {/* dita e ENJTE*/}
                          <PayButton 
                              name="Thurs"
                              style1={{width:width*0.22,backgroundColor:this.state.thursday?'#8B0000':'#D3D3D3',borderColor:this.state.thursday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={ async ()=>{
                                await this.setState({
                                    thursday:!this.state.thursday,
                                  })
                                  await this.setState({
                                      arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                    });
                                  
                                  console.log(this.state.arrayweek);

                                  this.setState({done:true});
                                }}
                                  color={this.state.thursday?'white':'black'}
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
                                        await this.setState({
                                            arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                          });
                                        
                                      console.log(this.state.arrayweek);

                                      this.setState({done:true});
                                    }}
                                      color={this.state.friday?'white':'black'}
                                /> 

                              {/* dita e SHTUNE*/}
                              <PayButton 
                              name="Sat"
                              style1={{width:width*0.22,backgroundColor:this.state.saturday?'#8B0000':'#D3D3D3',borderColor:this.state.saturday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={ async ()=>{
                                      await this.setState({
                                        saturday:!this.state.saturday,   
                                      })
                                      await  this.setState({
                                          arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                        });
                                    
                                      console.log(this.state.arrayweek);
                                      
                                      this.setState({done:true});
                                    }}
                                      color={this.state.saturday?'white':'black'}
                                /> 

                              {/* dita e DILLE*/}
                              <PayButton  
                              name="Sun"
                              style1={{width:width*0.22,backgroundColor:this.state.sunday?'#8B0000':'#D3D3D3',borderColor:this.state.sunday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={ async ()=>{
                                      await this.setState({
                                        sunday:!this.state.sunday,
                                        })
                                        await this.setState({
                                            arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                          })
                                      console.log(this.state.arrayweek);
                                        
                                      this.setState({done:true});
                                    }}
                                      color={this.state.sunday?'white':'black'}
                                /> 
                        </View>
                  </View>
                  <View style={styles.paybutton}> 
                    <ProfileButton width={width*0.83} name="Done" loading={this.state.loading} onPress={async ()=>{
                   
                     this.setState({loading:loading})
                     let {data}= await SetPunishment({             
                        variables:{
                          ToBePunished:true,
                          Date_:this.state.arrayweek,
                          price:this.state.pagesa
                        }});
                         
                      }}/>
                  </View> 
        
  
         </View>
       )}</Mutation>
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