import React from 'react';
import {View, Text, Image, ScrollView, TextInput,FlatList,StyleSheet, StatusBar,ImageBackground} from 'react-native';

import Humidity from '../Humidity.png'
import Blue from '../Blue.webp';
import Light from '../Light.png';
import Temperature from '../Temperature.png';
import TemperatureView from './TemperatureView';
import HumidityView from './HumidityView';
import LightIntensityView from './LightIntensityView'



const Datalog = () => {
  return (
    <ImageBackground source={Blue}  style={styles.container}>
    
   
      <TemperatureView> </TemperatureView>
      <HumidityView> </HumidityView>
      <LightIntensityView></LightIntensityView>
        </ImageBackground>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
    
  },

});

export default Datalog;