
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Light from '../Light.png';
const LightIntensityView = () => {
  const navigation=useNavigation();
  return (
    
    
    <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate('TemperatureDetail')}} >
    
       
 <Image source={Light} style={{width:50, height:50}}/>
    <Text style={styles.title}>Light Intensity</Text>
  </TouchableOpacity>
  
           



  );
};
const styles= StyleSheet.create({
 
 item: {
   backgroundColor:'rgba(255, 255, 255, 0.8)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    borderRadius:25,
  },
  title: {
    fontSize: 30,
     fontWeight: 'bold',
      fontFamily: 'Roboto',
     marginLeft:20,
  },



});

export default LightIntensityView;