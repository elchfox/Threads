import React , {useEffect, useState} from "react";
import {View,Text, TouchableOpacity,FlatList,Modal} from 'react-native';
import { useObserver } from "mobx-react-lite";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectColors from "./SelectColors";
import { GeneralStore } from "../stores";
import CreateThread from "./CreateThread";

var s = require('../style')

const ThreadItem = ({open, fontColor, item,index})=> {
    const [isOpen, setIsOpen] = useState(false)
    const [openColors, setOpenColors] = useState(false)
    const [openCreate, setOpenCreate] = useState(false)
      useEffect(() => {
        setIsOpen(open)
       
      }, [])
      // Updata new thread in child
      const  update = (color)=> {
        setOpenColors(false)
        item.color = color; 
        GeneralStore.update(item)
     }
      // Create new thread in child
      const  create = async (title,color)=> {
        setOpenCreate(false)
        let data = {title,itemId:item._id,color}
       let res = await GeneralStore.create(data)
       item.comments !== undefined ? item.comments.push(res) : item.comments = [res]

     }
      return useObserver(() =>
  
      <TouchableOpacity 
       onPress={()=> setIsOpen(!isOpen)}
       style={{ paddingHorizontal:8,backgroundColor:item.color,marginBottom:8}}>
            <View style={[s.rowSpaceBetween,s.center]}>
                 <View style={[s.row,s.centerRow,{paddingVertical:8}]}>
                 <TouchableOpacity  onPress={()=> setOpenColors(!openColors)}>
                    <Icon name={'color-lens'} size={22} color={fontColor}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:18,color:fontColor,marginLeft:5}}>{item.title}</Text>
                 </View>
                 <TouchableOpacity  onPress={()=> setOpenCreate(!openCreate)} disabled={item.comments}>
                 <Icon name={ item.comments ?  !isOpen ? 'keyboard-arrow-down': 'keyboard-arrow-up': 'add-comment'} size={22} color={fontColor}/>
                 </TouchableOpacity>
             </View>
             {openColors && <SelectColors  onPress={(color)=> update(color)}/>}

         {isOpen && item.comments && <FlatList data={item.comments}
           renderItem={(e)=> <ThreadItem  key={e.index} {...e}/>}
           keyExtractor={(item, index) => index.toString()}/> }

        {isOpen && item.comments  && 
      
        <TouchableOpacity  onPress={()=> setOpenCreate(!openCreate)}>
          <Icon style={{alignSelf:'flex-end',marginBottom:8}} name={'add-comment'} size={22} color={fontColor}/>
          </TouchableOpacity>}
        {openCreate && <CreateThread marginBottom={8}  onPress={(title, color)=> create(title,color)}/>}
       </TouchableOpacity>
      );

  }
  ThreadItem.defaultProps = {
    fontColor: "white",
    open:false 
    
};

  export default ThreadItem

  


  