import {View, Text, StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const MoistureDetail = ({navigation}) => {
  
return (
<View style={styles.container}>
<View style={styles.upperRow}>
<TouchableOpacity onPress={() =>{navigation.goBack()}}>
<Ionicons name='chevron-back-circle' size={30}/>
</TouchableOpacity>

</View>


</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1
},
upperRow: {
marginHorizontal: 20,
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
position: "absolute",
top: 44,
width: Dimensions.get('window') -44,
zIndex: 999
}
});

export default MoistureDetail;