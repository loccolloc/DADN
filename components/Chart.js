
import {View, Text, StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native';
import React, { useState,useEffect  } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const fetchOptions = async () => {
 
  return [
     { id: 'option1', value: '32.5°C', color: '#F88796' }, // Thêm thuộc tính màu sắc
    { id: 'option2', value: '60.5%', color: '#96F887' },
    { id: 'option3', value: '75%', color: '#8796f8' },
  ];
};

const Header = () => {



  const [options, setOptions] = useState([]);
  const [displayValue, setDisplayValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [chartColor, setChartColor] = useState('#F88796'); // Trạng thái mới để quản lý màu nền
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchOptions();
        setOptions(data);
        // Đặt giá trị và lựa chọn ban đầu nếu cần
        if (data.length > 0) {
          setDisplayValue(data[0].value);
          setSelectedOption(data[0].id);
        }
      } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

 const handlePress = (option) => {
    const selected = options.find(o => o.id === option);
    if (selected) {
      setDisplayValue(selected.value);
      setSelectedOption(selected.id);
      setChartColor(selected.color); // Cập nhật màu nền khi một tùy chọn được chọn
    }
  };

  const getButtonStyle = (option) => (
    selectedOption === option
      ? styles.buttonSelected
      : styles.button
  );

  return (
    <View style={[styles.chart, {backgroundColor: chartColor}]}>
    <Text style={styles.displayValue}>{displayValue}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handlePress('option1', '32.5°C')} style={getButtonStyle('option1')}>
          <MaterialCommunityIcons name="thermometer" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('option2', '60.5%')} style={getButtonStyle('option2')}>
          <MaterialCommunityIcons name="water" size={30} color="black" />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('option3', 'Value 3')} style={getButtonStyle('option3')}>
          <MaterialCommunityIcons name="lightbulb" size={30} color="black" />
        </TouchableOpacity>
      </View>

        </View>


  );
};
const styles= StyleSheet.create({
  chart:{
      width:'93%',
      height:'35%',
      alignItems:'center',
      justifyContent:'center',
     backgroundColor:'rgba(255, 255, 255, 0.55)',
     alignSelf: 'center',
     borderRadius:35,

  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#DDD',
    borderRadius:50,
  },
  buttonSelected: {
    padding: 10,
    margin: 10,
    backgroundColor: '#FFA', // Màu khi nút được chọn
    borderRadius:50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
   displayValue: {
    fontSize: 32,
    marginBottom: 20,
  },



});

export default Header;