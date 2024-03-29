
import {View, Text, StyleSheet,Switch,Image,TouchableOpacity} from 'react-native';

import Light from '../Light.png';
import {useNavigation} from '@react-navigation/native'


const LightView = () => {
  const navigation=useNavigation();
  return (
   
    


  <TouchableOpacity style={styles.box} onPress={()=>{ navigation.navigate('LightDetail')}}>
    <View style={styles.inner2}>
     <View style={styles.container2}>
    
    <View style={styles.box2}>
    <View style={styles.insider}>
    <Image source={Light} style={{width:50, height:50}}/>
        </View>
  </View>
  <View style={styles.box2}>
    <View style={styles.insider}>
    <Switch/>

      
        </View>
  </View>
  <View style={styles.box3}>
    <View style={styles.insider}>
     <Text style={styles.textStyle} >Light</Text>
    
        </View>
  </View>
  

            </View>
        </View>
  </TouchableOpacity>

          



  );
};
const styles= StyleSheet.create({
  
  box:{
      width:'50%',
      height:'50%',
     padding:5,
     

  },
  
  inner2:{

    flex:1,
    backgroundColor:'rgba(255, 255, 224, 0.8)',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35,
   
    
  },

   container2:{
    width:'100%',
    height:'60%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap',
   

  },
  box2:{
      width:'50%',
      height:'50%',
     padding:5,

  },
  box3:{
      width:'100%',
      height:'50%',
     padding:5,
     marginTop:10,

  },
  insider:{

    flex:1,
    // backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle:{
       fontWeight:'bold',
         alignItems:'center',
         fontSize:20,

  }



});

export default LightView;