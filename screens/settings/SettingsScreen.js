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
import {withApollo} from 'react-apollo';

import { Mutation, Query } from 'react-apollo';
import ProfileButton from '../../components/ProfileButton';

let {height,width} = Dimensions.get('window');
class SettingsScreen extends React.Component {
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
      payclick:false,
      dataloading:true,
      data:false
      
    }
 
  }

  componentWillMount= async ()=>{

  await this.props.client.query({
      query:PUNISHED_DATE,
    }).then((data)=>{
      let length=  data.data.punishedDate.length-1;
      let daysarr =  data.data.punishedDate[length].Date_;
      let price =  data.data.punishedDate[length].price;
      console.log(JSON.stringify(daysarr));

      this.setState({
        pay:price,
        monday:daysarr.forEach(element => element==="Monday"?true:false),
        tuesday:daysarr.forEach(element => element==="Tuesday"?true:false),
        wensday:daysarr.forEach(element => element==="Wednesday"?true:false),
        thursday:daysarr.forEach(element => element==="Thursday"?true:false),
        friday:daysarr.forEach(element => element==="Friday"?true:false),
        saturday:daysarr.forEach(element => element==="Saturday"?true:false),
        sunday:daysarr.forEach(element => element==="Sunday"?true:false),
        arrayweek:[...daysarr],
      

        
      })
      this.setState({data:true});
 
        })
  
  }
  
  render() {
 
       if(!this.state.data){
         return <ActivityIndicator />
       }
      return <Mutation mutation={SETPUNISHMENT}>{(SetPunishment,{loading,data,error})=>(
         <View style={styles.container}>
                  <View style={styles.punishtext}>
                    <Text>
                          Select how much do you want to be punished.
                    </Text>
                  </View>
                  <View style={styles.butonat}>
                    
                        <PayButton 
                            color={this.state.pay===1?'white':'black'} 
                            style1={{backgroundColor:this.state.pay===1?'#8B0000':'#D3D3D3',borderColor:this.state.pay===1  ?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
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
                            color={this.state.pay===5?'white':'black'}
                            style1={{backgroundColor:this.state.pay===5?'#8B0000':'#D3D3D3',borderColor:this.state.pay===5?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:40}}
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
                            color={this.state.pay===10?'white':'black'}
                            style1={{backgroundColor:this.state.pay===10?'#8B0000':'#D3D3D3',borderColor:this.state.pay===10?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
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
                                  console.log(this.state.monday);
                                  this.setState({
                                    monday:!this.state.monday,
                                    done:true,

                                  })
                               
                                  this.setState({
                                      arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]
                                    });
                                   
                                  
                                }}
                                style1={{width:width*0.22,backgroundColor:this.state.monday?'#8B0000':'#D3D3D3',borderColor:this.state.monday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                                color={this.state.monday?'white':'black'}
                          /> 

                          {/* dita e MARTE*/}           
                          <PayButton 
                                name="Tues"
                                style1={{width:width*0.22,backgroundColor:this.state.tuesday?'#8B0000':'#D3D3D3',borderColor:this.state.tuesday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                                onPress={  ()=>{
                                  console.log(this.state.tuesday);
                                  this.setState({
                                    tuesday:!this.state.tuesday,
                                    done:true,

                                  });
                                 
                                  this.setState({
                                    arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]                                    });
                                   
                                }}
                                  color={this.state.tuesday?'white':'black'}
                            /> 

                          {/* dita e MERKURE*/}
                          <PayButton 
                              name="Wed"
                              style1={{width:width*0.22,backgroundColor:this.state.wensday?'#8B0000':'#D3D3D3',borderColor:this.state.wensday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={  ()=>{
                                console.log(this.state.wensday);

                                this.setState({
                                  
                                  wensday:!this.state.wensday,
                                  done:true,

                                });
                          
                                 this.setState({
                                  arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]
                                    });
                              
                               

                              }}
                                color={this.state.wensday?'white':'black'}
                            /> 

                          {/* dita e ENJTE*/}
                          <PayButton 
                              name="Thurs"
                              style1={{width:width*0.22,backgroundColor:this.state.thursday?'#8B0000':'#D3D3D3',borderColor:this.state.thursday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:5}}
                              onPress={  ()=>{
                                this.setState({
                                    thursday:!this.state.thursday,
                                    done:true,

                                  });
                                
                                  this.setState({
                                    arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]
                                    });
                                  
                                }}
                                  color={this.state.thursday?'white':'black'}
                            /> 
                        </View>
                        <View style={styles.ditet_posht}>
                              {/* dita e PREMTE*/}
                              <PayButton
                              name="Fri"
                              style1={{width:width*0.22,backgroundColor:this.state.friday?'#8B0000':'#D3D3D3',borderColor:this.state.friday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                onPress={  ()=>{
                                  this.setState({
                                        friday:!this.state.friday,
                                        done:true,

                                        });
                                        this.setState({
                                          arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]    
                                        });
                                    }}
                                      color={this.state.friday?'white':'black'}
                                /> 

                              {/* dita e SHTUNE*/}
                              <PayButton 
                              name="Sat"
                              style1={{width:width*0.22,backgroundColor:this.state.saturday?'#8B0000':'#D3D3D3',borderColor:this.state.saturday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={  ()=>{
                                      this.setState({
                                        saturday:!this.state.saturday,   
                                        done:true,

                                      });
                                    
                                       this.setState({
                                        arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]
                                      });
                                      
                                      
                                    }}
                                      color={this.state.saturday?'white':'black'}
                                /> 

                              {/* dita e DILLE*/}
                              <PayButton  
                              name="Sun"
                              style1={{width:width*0.22,backgroundColor:this.state.sunday?'#8B0000':'#D3D3D3',borderColor:this.state.getsunday?'#8B0000':'#D3D3D3',borderWidth:1,marginRight:15}}
                                    onPress={  ()=>{
                                      this.setState({
                                        sunday:!this.state.sunday,
                                        done:true,

                                        });
                                       
                                        this.setState({
                                          arrayweek:[this.state.monday?"Monday":"",this.state.tuesday?"Tuesday":"",this.state.wensday?"Wednesday":"",this.state.thursday?"Thursday":"",this.state.friday?"Friday":"",this.state.saturday?"Saturday":"",this.state.sunday?"Sunday":""]
                                        })
                                       
                                    }}
                                      color={this.state.sunday?'white':'black'}
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
                    
                   
    }
}

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
export default withApollo(SettingsScreen);