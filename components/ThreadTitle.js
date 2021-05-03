import React , {useEffect, useState} from "react";
import {Text, TouchableOpacity , StyleSheet} from 'react-native';
import { useObserver } from "mobx-react-lite";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import methods from "../methods/methods";

var s = require('../style')

const ThreadTitle = ({item,index})=> {
  const navigation = useNavigation();

    const [color, setColor] = useState("black")
      useEffect(async () => {
        setColor(await methods.checkColorLightAndDark(item.color))
      }, [])
     
      return useObserver(() =>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Thread',{id:item._id,title:item.title})}
      style={[s.rowSpaceBetween,styles.topHeader,{backgroundColor:item.color}]}>
          <Text style={{fontSize:16,color:color}}>{item.title}</Text>
          <Icon name={'keyboard-arrow-right'} size={22} color={color}/>
      </TouchableOpacity>
      );

  }

  export default ThreadTitle

  
  const styles = StyleSheet.create({
    topHeader: {borderBottomColor:"black",
    borderBottomWidth:0.5, 
    padding:15}
    
  })