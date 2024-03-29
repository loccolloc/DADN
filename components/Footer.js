
import {View, Text, StyleSheet,Switch,Image} from 'react-native';

import PumberView from './PumberView';
import LightView from './LightView';


const Footer = () => {
  return (
    <View style={styles.container}>
    
    <PumberView>    </PumberView>

  <LightView>  </LightView>


            </View>



  );
};
const styles= StyleSheet.create({
  container:{
    width:'100%',
    height:'50%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap',

  },
  


});

export default Footer;