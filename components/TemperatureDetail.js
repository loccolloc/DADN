import {View, Text, StyleSheet,Switch,Image,TouchableOpacity,Dimensions} from 'react-native';
import Svg, {G, Line, Circle, Rect, Text as SvgText} from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

import {useState,useEffect} from 'react'
const TemperatureDetail = ({navigation,axisFontSize=12,

barchartData = [
{month: 'Jan', value: 300}, 
{month: 'Feb', value: 454}, 
{month: 'Mar', value: 600},
{month: 'Apr', value: 520}, 
{month: 'May', value: 300},
{month: 'June', value: 600}, 
{month: 'July', value: 300},
],
}) => {
  
const marginLeft_for_y_axis=50;
const marginBottom_for_x_axis = 50;
 const padding_from_screen = 20;
 const winow_width = Dimensions.get('window').width;
const x_axis_x1_point = marginLeft_for_y_axis;
const x_axis_y1_point = 400 - marginBottom_for_x_axis;
const x_axis_x2_point = winow_width - padding_from_screen;
const x_axis_y2_point = x_axis_y1_point;

const y_axis_x1_point = marginLeft_for_y_axis; 
const y_axis_y1_point = padding_from_screen
const y_axis_x2_point =marginLeft_for_y_axis;
const y_axis_y2_point = 400-marginBottom_for_x_axis;
const x_axis_width =winow_width- padding_from_screen;
 const gap_between_x_axis_ticks= x_axis_width / (barchartData.length+1);
  const y_axis_height = 400-padding_from_screen-marginBottom_for_x_axis;
const gap_between_y_axis_ticks =y_axis_height / (yAxisData?.length-1);
const [yAxisData, setYaxisData] = useState([]);
const minValue = 0;
const maxValue = Math.max.apply(
  Math,
barchartData?.map((item) => item.value),
);

const gapBetweenYaxisValues = (maxValue - minValue) / 4
useEffect(() => {
const newLabels = Array.from({length: 6}).map((_, index)=> minValue+gapBetweenYaxisValues*index);
setYaxisData(newLabels);

}, []);
const render_x_axis_ticks_labels = () => {

return barchartData.map((item, index) =>{

return(
<G key={`x-axis ticks and labels ${index}`}>
<Line
x1={gap_between_x_axis_ticks+x_axis_x1_point+gap_between_x_axis_ticks*index}
y1={x_axis_y1_point}
x2={gap_between_x_axis_ticks+x_axis_x1_point+gap_between_x_axis_ticks*index}
y2={x_axis_y1_point + 10}
strokeWidth={2}
stroke={"#9cc"}
/>
<SvgText
x={gap_between_x_axis_ticks+x_axis_x1_point+gap_between_x_axis_ticks*index}
y={x_axis_y1_point + 10 +axisFontSize}
fill="#fff"
textAnchor="middle"
fontSize={axisFontSize}
>{item?.month}
</SvgText>
</G>
)
})
}

const render_y_axis_ticks_labels = () => {
 

  return yAxisData?.map((item, index) =>{
    const y_point_y_axis_ticks=y_axis_y2_point -gap_between_y_axis_ticks*index;
return(
<G key={`y-axis ticks and labels ${index}`}>
<Line
x1={y_axis_x2_point}
y1={y_point_y_axis_ticks}
x2={y_axis_x2_point-10}
y2={y_point_y_axis_ticks}
strokeWidth={2}
stroke={"#9cc"}
/>
<SvgText
x={y_axis_x2_point-10-5}
y={y_point_y_axis_ticks +axisFontSize/3}
fill="#fff"
textAnchor="end"
fontSize={axisFontSize}
>{item}
</SvgText>
</G>
)
  })
}

const render_barchart = () => {
  
const gap_between_y_axis_ticks =x_axis_width / (yAxisData?.length-1);
return barchartData?.map((item, index) => {
  
let x_point_x_axis_tick= gap_between_x_axis_ticks +x_axis_x1_point+gap_between_x_axis_ticks * index;
let height=(item?.value*gap_between_y_axis_ticks)/gapBetweenYaxisValues;
return(<G key={`bar chart${index}`} >

<Rect 
x={x_point_x_axis_tick}
y={x_axis_y1_point}
height={-height}
width={20}
fill={'#daa400'}
/>

</G>)
})
}
return (
  <View>
<View style={styles.container1}>
<View style={styles.upperRow}>
<TouchableOpacity onPress={() =>{navigation.goBack()}}>
<Ionicons name='chevron-back-circle' size={30}/>
</TouchableOpacity>


</View>


</View>
<View style={[styles.container2,{height:400}]}>
<Svg height="100%" width="100%" style={{backgroundColor: '#000'}}>

<G>

<Circle
cx={marginLeft_for_y_axis}
cy={400 - marginBottom_for_x_axis}
fill={"#9cc"}
r={4}
/>

<Circle
cx={winow_width-padding_from_screen} cy={400 - marginBottom_for_x_axis}
fill={"#9cc"}
r={4}
/>

<Line
x1={x_axis_x1_point}
y1={x_axis_y1_point}
x2={x_axis_x2_point}
y2={x_axis_y2_point}
strokeWidth={2} stroke={"#9cc"}
/>

</G>
{render_x_axis_ticks_labels()}
<G>

<Circle
cx={y_axis_x1_point}
cy={y_axis_y1_point}
fill={"#9cc"}
r={4}
/>

<Line
x1={y_axis_x1_point}
y1={y_axis_y1_point}
x2={y_axis_x2_point}
y2={y_axis_y2_point}
stroke={"#9cc"}
strokeWidth={2}

/>

</G>

{render_y_axis_ticks_labels()}
{yAxisData?.length>0&&render_barchart()}
</Svg>
</View>
</View>
);
};
const styles = StyleSheet.create({
container1: {
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
},
container2:{
  marginTop:100,
  backgroundColor:'#000',
}
});

export default TemperatureDetail;