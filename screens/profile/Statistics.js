import React,{Fragment} from 'react';
import { View,Text,StyleSheet ,Dimensions,ActivityIndicator,TouchableOpacity} from 'react-native';
import {Query} from 'react-apollo';
import {MY_SUCCES_TASKS,MY_MISSED_TASKS} from '../../graphql/queries';
import StatisticView from '../../components/StatisticView';

let arr =['January','Febraury','March','April','May','june','July','August','September','October','November','Desember'];

let{height,width} =Dimensions.get('window');

export default class Statistics extends React.Component {
  static navigationOptions={
    title:"Statistics"
  }  
  constructor(props) {
        super(props);
        this.state = {
        
        };
      
      }


    render() {
        return (
         
            
             <View style={styles.Container}>
                        
                        <Query query={MY_SUCCES_TASKS}>{({loading,data,error})=>{
                              if(loading){
                                return<View style={styles.nalt}>
                                <View style={{height:'60%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                  <StatisticView loading={loading} title="Exposure Time"  style={{backgroundColor:'#3D7FE2',width:width*0.42,margin:10}} />
                                  <StatisticView loading={loading} title="Succes Rate"    style={{backgroundColor:'#C47AB0',width:width*0.42,margin:10}}/>
                                </View>
                                <View style={{height:'40%',justifyContent:'center',alignItems:'center'}}>
                                    <StatisticView  loading={loading} title="Money Spent"  style={{backgroundColor:'#2AD088',width:width*0.92,marginTop:0,marginBottom:10,maginLeft:10,marginRight:10}} />
                                </View>
                               </View>
                              }else if (error){
                                return <Text>
                                  {error.message}
                                </Text>
                              }
                              
                              
                              console.log(JSON.stringify(data));
                              console.log(data.mySuccesTasks.length);
                              let succes = data.mySuccesTasks.length;
                        
                        
                        return  <Query query={MY_MISSED_TASKS}>{({data,loading,error})=>{
                                    if(loading){
                                      return<View style={styles.nalt}>
                                        <View style={{height:'60%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                          <StatisticView loading={loading} title="Exposure Time"  style={{backgroundColor:'#3D7FE2',width:width*0.42,margin:10}} />
                                          <StatisticView loading={loading} title="Succes Rate"    style={{backgroundColor:'#C47AB0',width:width*0.42,margin:10}}/>
                                        </View>
                                        <View style={{height:'40%',justifyContent:'center',alignItems:'center'}}>
                                            <StatisticView  loading={loading} title="Money Spent"  style={{backgroundColor:'#2AD088',width:width*0.92,marginTop:0,marginBottom:10,maginLeft:10,marginRight:10}} />
                                        </View>
                                       </View>
                                    }else if(error){
                                      return <Text>
                                        {error.message}
                                      </Text>
                                    }
                                    let missed = data.myMissedTasks.length;
                                    let total = missed+succes;
                                    let succesRate= succes*100/total;
                                    let missedRate = missed*100/total;
                                    let price = missed*5;
                                    let hours = succes*10/60;
                                  
                                    console.log(succesRate);
                                    console.log(JSON.stringify(data));

                                   
                              return <View style={styles.nalt}>
                                        <View style={{height:'60%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                          <StatisticView  title="Exposure Time" rate={Math.floor(hours)+" hours"} style={{backgroundColor:'#3D7FE2',width:width*0.42,margin:10}} />
                                          <StatisticView title="Succes Rate"  rate={Math.floor(succesRate) +" % "}  style={{backgroundColor:'#C47AB0',width:width*0.42,margin:10}}/>
                                        </View>
                                        <View style={{height:'40%',justifyContent:'center',alignItems:'center'}}>
                                            <StatisticView title="Money Spent" rate={price + " $"} style={{backgroundColor:'#2AD088',width:width*0.92,marginTop:0,marginBottom:10,maginLeft:10,marginRight:10}} />
                                        </View>
                                   </View>
                               }}</Query>
                           }}</Query>


                          <View style={styles.main}>
                             <View style={{width:width*0.15}}>
                             </View>
                              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:'100%',width:width*0.05}}>
                                <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:width*0.05}}>
                                  <Text style={{fontSize:30,justifyContent:'center',alignItems:'center'}}>{"<"}</Text>
                                </View>
                              </TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:width*0.6}}>
                                  <Text style={{fontSize:30}}> { arr[new Date().getMonth()] }</Text>
                                </View>
                              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:'100%',width:width*0.05}}>
                                <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:width*0.05}}>
                                  <Text style={{fontSize:30}}>{">"} </Text>
                                </View>
                              </TouchableOpacity>
                              <View style={{width:width*0.15}}>
                              </View>
                          </View>
                          <View style={styles.posht}>
                           
                          </View>
                  </View>             
             
          
           
        )
    }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff',

    },
    nalt:{
      height:height*0.40,
     
      flexDirection:'column',
      paddingTop:10,
      alignItems:'center',
    },  
    posht :{
      height:height*0.50,
  
    },
    main:{
      height:height*0.10,
      flexDirection:'row',
      
      
    }
 
});