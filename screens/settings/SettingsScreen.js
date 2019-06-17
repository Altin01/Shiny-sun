import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Fragment ,
  ActivityIndicator
} from 'react-native';

import PayButton from '../../components/PayButon';
import { SETPUNISHMENT } from '../../graphql/mutation';
import {PUNISHED_DATE} from '../../graphql/queries';

import { Mutation, Query } from 'react-apollo';
import ProfileButton from '../../components/ProfileButton';

let {height,width} = Dimensions.get('window');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    
  };
  
  constructor(props){
    super(props);
    this.state = {
      pay:1,
      monday:true,
      tuesday:true,
      wensday:true,
      thursday:true,
      friday:true,
      saturday:true,
      sunday:true,
      arrayweek:[],
      done:false,
      loading:false,
      payclick:false
      
    }
  }


  render() {
    return (
      <Query query={PUNISHED_DATE}>{({data,loading,error})=>{
        if(loading){
          return <ActivityIndicator />
        } if(error){
          return <Text>
            {error}
          </Text>
        } 
       
        let length =data.punishedDate.length-1;
        let daysArray = data.punishedDate[length].Date_;
        let price = data.punishedDate[length].price;
        let pay;  
       
        if(this.state.payclick){
        pay=this.state.pay;
        }
        else{        
        pay = price;
       }


      let monday=daysArray[0].length>=1?true:false;
      let tuesday=daysArray[1].length>=1?true:false;
      let wensday=daysArray[2].length>=1?true:false;
      let thursday=daysArray[3].length>=1?true:false;
      let friday=daysArray[4].length>=1?true:false;
      let saturday=daysArray[5].length>=1?true:false;
      let sunday=daysArray[6].length>=1?true:false;


      console.log(daysArray);



      return <Mutation mutation={SETPUNISHMENT}>{(SetPunishment,{loading,data,error})=>(
         <View style={styles.container}>
                  <View style={styles.punishtext}>
                    <Text>
                          Select how much do you want to be punished.
                    </Text>
                  </View>
                  <View style={styles.butonat}>
                    
                        <PayButton 
                            color={pay===1?'white':'black'} 
                            style1={{backgroundColor:pay===1?'#8B0000':'#D3D3D3',borderColor:pay===1  ?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
                            backcolor={this.state.first} 
                            onPress={()=>{ 
                              this.setState({
                                pay:1,
                                pagesa:1,
                                payclick:true,
                                done:true
                                });

                            }} 
                            name="1$" 
                        />
                        <PayButton 
                            color={pay===5?'white':'black'}
                            style1={{backgroundColor:pay===5?'#8B0000':'#D3D3D3',borderColor:pay===5?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
                            backcolor={this.state.second}
                            onPress={ ()=>{
                            this.setState({
                                pagesa:5,
                                pay:5,
                                payclick:true,
                                done:true
                                

                              })
                            
                            }}
                            name="5$"
                        />
                        <PayButton 
                            color={pay===10?'white':'black'}
                            style1={{backgroundColor:pay===10?'#8B0000':'#D3D3D3',borderColor:pay===10?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                            backcolor={this.state.third}
                              onPress={  ()=>{
                              this.setState({
                                pay:10,
                                pagesa:10,
                                payclick:true,
                                done:true,
                              

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
                                onPress={  ()=>{
                                  this.setState({
                                    monday:!this.state.monday,
                                    done:true,

                                  })
                                  monday=!monday;
                                  this.setState({
                                      arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                    });
                                   
                                  
                                }}
                                style1={{width:width*0.22,backgroundColor:monday?'#8B0000':'#D3D3D3',borderColor:monday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                                color={monday?'white':'black'}
                          /> 

                          {/* dita e MARTE*/}           
                          <PayButton 
                                name="Tues"
                                style1={{width:width*0.22,backgroundColor:tuesday?'#8B0000':'#D3D3D3',borderColor:tuesday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                                onPress={  ()=>{
                                  this.setState({
                                    tuesday:!this.state.tuesday,
                                    done:true,

                                  });
                                  tuesday=!tuesday;
                                  this.setState({
                                      arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                    });
                                   
                                }}
                                  color={tuesday?'white':'black'}
                            /> 

                          {/* dita e MERKURE*/}
                          <PayButton 
                              name="Wed"
                              style1={{width:width*0.22,backgroundColor:wensday?'#8B0000':'#D3D3D3',borderColor:wensday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={  ()=>{
                                this.setState({
                                  wensday:!this.state.wensday,
                                  done:true,

                                });
                                wensday=!wensday;
                                 this.setState({
                                    arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                  });
                              
                               

                              }}
                                color={wensday?'white':'black'}
                            /> 

                          {/* dita e ENJTE*/}
                          <PayButton 
                              name="Thurs"
                              style1={{width:width*0.22,backgroundColor:thursday?'#8B0000':'#D3D3D3',borderColor:thursday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={  ()=>{
                                this.setState({
                                    thursday:!this.state.thursday,
                                    done:true,

                                  });
                                  thursday=!thursday;
                                  this.setState({
                                      arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                    });
                                  
                                }}
                                  color={thursday?'white':'black'}
                            /> 
                        </View>
                        <View style={styles.ditet_posht}>
                              {/* dita e PREMTE*/}
                              <PayButton
                              name="Fri"
                              style1={{width:width*0.22,backgroundColor:friday?'#8B0000':'#D3D3D3',borderColor:friday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                onPress={  ()=>{
                                  this.setState({
                                        friday:!this.state.friday,
                                        done:true,

                                        });
                                        friday=!friday;
                                        this.setState({
                                            arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                          });
                                    }}
                                      color={friday?'white':'black'}
                                /> 

                              {/* dita e SHTUNE*/}
                              <PayButton 
                              name="Sat"
                              style1={{width:width*0.22,backgroundColor:saturday?'#8B0000':'#D3D3D3',borderColor:saturday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={  ()=>{
                                      this.setState({
                                        saturday:!this.state.saturday,   
                                        done:true,

                                      });
                                      saturday=!saturday;
                                       this.setState({
                                          arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                        });
                                      
                                      
                                    }}
                                      color={saturday?'white':'black'}
                                /> 

                              {/* dita e DILLE*/}
                              <PayButton  
                              name="Sun"
                              style1={{width:width*0.22,backgroundColor:sunday?'#8B0000':'#D3D3D3',borderColor:sunday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={  ()=>{
                                      this.setState({
                                        sunday:!this.state.sunday,
                                        done:true,

                                        });
                                        sunday=!sunday;
                                        this.setState({
                                            arrayweek:[this.state.monday?'Monday':'',this.state.tuesday?'Tuesday':'',this.state.wensday?'Wednesday':'',this.state.thursday?'Thursday':'',this.state.friday?'Friday':'',this.state.saturday?'Saturday':'',this.state.sunday?'Sunday':'']
                                          })
                                       
                                    }}
                                      color={sunday?'white':'black'}
                                /> 
                        </View>
                  </View>
                  <View style={styles.paybutton}> 
                 {this.state.done?
                    <ProfileButton width={width*0.83} name="Done" loading={this.state.loading} onPress={async  ()=>{
                   
                     this.setState({loading:true});
                      let {data} = await SetPunishment({             
                        variables:{
                          ToBePunished:true,
                          Date_:this.state.arrayweek,
                          price:this.state.pay,
                        }});
                        console.log(this.state.arrayweek);
                    
                      this.setState({loading:false,done:false});
                      alert("Successfully Updated");
                      this.props.navigation.navigate('Home');
                      
                        
                      }}/>:<View></View>}
                  </View> 
        
  
         </View>
       )}</Mutation>
      }}</Query>

    )
  // }}</Query>
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
    
  }
  
})