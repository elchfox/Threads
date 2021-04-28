import React , {useState,useEffect} from "react";
import {FlatList, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useObserver } from "mobx-react-lite";


import ThreadItem from "../components/Thread";
import { GeneralStore } from "../stores";
import CreateThread from "../components/CreateThread";

var s = require('../style')

 const HomeScreen = ({navigation,route })=> {
  const [openCreate, setOpenCreate] = useState(false)


  useEffect(() => {
    GeneralStore.getThreads()
   
  }, [])

  const  create = async (title,color)=> {
    let data = {title,color}
    let res = await GeneralStore.create(data)
    GeneralStore.threadsList = [res,...GeneralStore.threadsList]

      console.log(res)
 }
      return useObserver(() =>
      <ScrollView >
        <View style={[s.center,s.titleHeader]}>

          <Text style={{fontWeight:'bold',fontSize:20}}>Threads</Text>
          <TouchableOpacity  onPress={()=> setOpenCreate(!openCreate)} 
          style={{position:'absolute', right:15}}>
                 <Icon name={'add-comment'} size={22} color={'black'}/>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:55}}>
       {openCreate && <CreateThread  onPress={(title, color)=> create(title,color)}/> }
      <FlatList data={GeneralStore.threadsList}
      renderItem={({item})=>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Thread',{id:item._id,title:item.title})}
        style={[s.rowSpaceBetween,{borderBottomColor:"black",borderBottomWidth:0.5, padding:15,backgroundColor:item.color}]}>
            <Text style={{fontSize:16}}>{item.title}</Text>
            <Icon name={'keyboard-arrow-right'} size={22} color={'black'}/>
        </TouchableOpacity>
      }
      keyExtractor={(item, index) => index.toString()}
   />
   </View>
</ScrollView>
      );
    }
  


  export default HomeScreen



