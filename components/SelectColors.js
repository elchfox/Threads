import React , {useEffect, useState} from "react";
import {View,Text, TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { useObserver } from "mobx-react-lite";
import Icon from 'react-native-vector-icons/MaterialIcons';

var s = require('../style')

const SelectColors = ({open, COLORS,onPress})=> {
    const [isOpen, setIsOpen] = useState(false)
      useEffect(() => {
        setIsOpen(open)
       
      }, [])
      return useObserver(() =>
      
      <ScrollView >
        <View style={[s.wrap,{marginBottom:8}]}>
        {COLORS.map((color)=>
        <TouchableOpacity onPress={()=> onPress(color)} 
        style={{borderWidth:1, borderColor:'gold', 
        backgroundColor:color,width:30,height:30,borderRadius:30,margin:5}}/>
        )}
        </View>
      </ScrollView>
     
    
      );

  }
  SelectColors.defaultProps = {
    fontColor: "white",
    open:false ,
    COLORS: ["#f44336","#e91e63","#9c27b0", "#673ab7","#3f51b5","#2196f3","#03a9f4",
      "#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b",
      "#ffc107","#ff9800","#ff5722","#efebe9","#9e9e9e","#607d8b"]
    
};

  export default SelectColors

  


  