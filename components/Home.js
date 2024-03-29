
import {View, Text, Image, ScrollView, TextInput,StyleSheet,ImageBackground} from 'react-native';
// import Header from './Header';
import Chart from './Chart';
import Footer from './Footer';
import Blue from '../Blue.webp';
const Home = () => {
  return (
    <View  style={styles.container}>

<Chart/>
<Footer/>

        </View>

  );
};

const styles= StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#FFFFFF',

  }



});

export default Home;