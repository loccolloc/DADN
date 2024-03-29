
import {View, Text, StyleSheet,Image} from 'react-native';
import Sun from '../Sun.png';
import Storm from '../Storm.png';
const Header = () => {
  const now = new Date();

// Lấy ngày trong tháng (1 - 31)
const date = now.getDate();

// Lấy tháng trong năm (0 - 11, với 0 là tháng 1, 11 là tháng 12)
const month = now.getMonth() + 1; // Thêm 1 vì JavaScript đếm tháng từ 0

// Lấy năm
const year = now.getFullYear();

// Hiển thị ngày, tháng, năm
console.log();
  return (
    <View style={styles.header}>
    <View style={styles.container}>
    
    <View style={styles.box}>
    <View style={styles.inner}>
    <Text style={styles.textStyle}>{`${date}/${month}/${year}`}</Text>
    <Text  style={styles.textStyle}>Have a good day!</Text>
        </View>
  </View>
  <View style={styles.box}>
    <View style={styles.inner}>
    <Image source={Storm} style={{width:70, height:70}}/>
      
        </View>
  </View>
  <View style={styles.box}>
    <View style={styles.inner}>
    <Image source={Sun} style={{width:70, height:70}}/>
        </View>
  </View>
  <View style={styles.box}>
    <View style={styles.inner}>
    <Text  style={styles.textStyle}>Cold 24°C</Text>
      <Text  style={styles.textStyle}>Ho Chi Minh city</Text>
        </View>
  </View>

            </View>

        </View>


  );
};
const styles= StyleSheet.create({
  header:{
      width:'100%',
      height:'30%',
      alignItems:'center',
      justifyContent:'center',
      // backgroundColor:'#eee'
 fontFamily: 'Roboto',
  },
   container:{
    width:'100%',
    height:'60%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap',
   

  },
  box:{
      width:'50%',
      height:'50%',
     padding:5,

  },
  inner:{

    flex:1,
    // backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle:{
     fontFamily: 'Roboto',
     fontWeight:'bold'
  }



});

export default Header;