import React , {useState} from "react";
import {View, TouchableOpacity, TextInput} from 'react-native';
import { useObserver } from "mobx-react-lite";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectColors from "./SelectColors";
import { COLORS } from "../constants";

var s = require('../style')

const CreateThread = ({marginBottom,onPress})=> {
    const [massage, setMassage] = useState("")
    const [openColors, setOpenColors] = useState(false)
    const [colorSelected, setColorSelected] = useState(COLORS.gray)

      return useObserver(() =>
      <View style={{backgroundColor:colorSelected,marginBottom:marginBottom}}>
          <View style={[s.centerRow,{flexDirection:'row', justifyContent:'space-between', 
                   paddingHorizontal:8}]}>
          <TouchableOpacity  onPress={()=> setOpenColors(!openColors)} style={{flex:0.1}}>
              <Icon name={'color-lens'} size={22} color={"black"}/>
          </TouchableOpacity>
          <TextInput onChangeText={(text)=> setMassage(text)} style={{flex:0.8}} placeholder={"Your Massage..."} />
          <TouchableOpacity  onPress={()=> {  
              onPress(massage, colorSelected)
              setMassage("")
              setColorSelected(COLORS.gray)}} style={[s.center,{flex:0.1}]} disabled={massage.length === 0}>
              <Icon name={"add-comment"} size={22} color={massage.length > 0 ? "black" : "#a9a9a9"}/>
          </TouchableOpacity>
          </View>
          {openColors && <SelectColors  onPress={(color)=> setColorSelected(color)}/>}
      </View>
      
      );
      
  }
  CreateThread.defaultProps = {
    marginBottom: 0,
};

  export default CreateThread

  


  