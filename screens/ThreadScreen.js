import React , {useState,useEffect} from "react";
import {FlatList, ScrollView,Text, View,TouchableOpacity} from 'react-native';

import { useObserver } from "mobx-react-lite";

import Icon from 'react-native-vector-icons/MaterialIcons';

import ThreadItem from "../components/Thread";
import { GeneralStore } from "../stores";
import CreateThread from "../components/CreateThread";
import { toJS } from "mobx";
import { SIZES } from "../constants";

var s = require('../style')

 const ThreadScreen = ({navigation,route })=> {
  const [openCreate, setOpenCreate] = useState(false)
  const [titleHeader, setTitleHeader] = useState("")
  const [threadId, setThreadId] = useState("")


  useEffect(() => { 

    let id = route.params.id
    GeneralStore.getThread(id)
    setTitleHeader(route.params.title)
    setThreadId(id)

},[])

const  create = async (title,color)=> {
  let data = {title,color,itemId:threadId}
  
  let res = await GeneralStore.create(data)
  let threadItem =  toJS(GeneralStore.threadItem)
  threadItem[0].comments.push(res)
  GeneralStore.threadItem = [...threadItem]
}

      return useObserver(() =>
      <ScrollView>
          <View style={[s.rowSpaceBetween,s.titleHeader]}>
            <TouchableOpacity  onPress={()=> navigation.goBack()}>
                <Icon name={'keyboard-arrow-left'} size={24} color={'black'}/>
            </TouchableOpacity>   
            <Text style={{fontWeight:'bold',fontSize:18}}>{titleHeader}</Text> 
            <TouchableOpacity  onPress={()=> setOpenCreate(!openCreate)}>
                <Icon name={'add-comment'} size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:SIZES.marginTop}}>
          {openCreate && <CreateThread  onPress={(title, color)=> create(title,color)}/> }

          <FlatList data={GeneralStore.threadItem}
          renderItem={(e)=> <ThreadItem key={e.index} {...e} fontColor={"black"} open={true}/>}
          keyExtractor={(item, index) => index.toString()}/>
          </View>
      </ScrollView>
      );
    }
  


export default ThreadScreen
