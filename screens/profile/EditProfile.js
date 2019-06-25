import React,{Component,Fragment} from 'react';
import {View,StyleSheet,TouchableOpacity,Dimensions,Text}from 'react-native';

import RegisterInput from '../../components/RegisterInput';
import {Mutation, Query} from 'react-apollo';
import Button from '../../components/Button';

import GET_USER from '../../graphql/queries';
import Errors from '../../components/Errors';
import Loading from '../../components/Loading';

import {EDIT_ACCOUNT} from '../../graphql/mutation';

let {height,width}=Dimensions.get('window')

export default class EditProfile extends Component{
  static navigationOptions = {
    title :"EditPassword"
};

  constructor(props) {
    super(props);
      this.state = {
            name:"",
        };
     }



  render(){
    return(
      <View style={styles.container}>
            
                 <Mutation mutation={EDIT_ACCOUNT}>{(editAccount,{loading,data,error})=>(
                   <Fragment>
                    
                        <RegisterInput 
                            value={this.state.name}
                            width={width}
                            placeholder="Edit name "
                            onChangeText={(name) => this.setState({name})}
                        />
                            
                      {loading? <Loading />: <Errors  error={error} /> }
                      <View style={styles.sun}>

                      <Button name="Edit Name" color="black" color1="rgb(255,110,0)" color2="#FEBE28" style={{marginBottom:30}} width={width*0.83} onPress={async()=>{
                                                    
                          await editAccount({ 
                                variables:{
                                    name:this.state.name,
                            
                                    }});
                             this.props.navigation.navigate('Profile')}}>
                      </Button>
                      </View>
                    </Fragment> )}</Mutation>
               

            </View>

         );
      }
 }

        
        const styles = StyleSheet.create({
            container : {
                backgroundColor:'#fff',
                justifyContent:'center',
                alignItems:'center',
                paddingLeft:20,
                paddingRight:20
            },
            sun:{
              height:'30%',
              width:'100%',
              justifyContent:'center',
              alignItems:'center',
      
          }

        })