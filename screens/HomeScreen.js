import React , {useState,useEffect} from "react";
import {FlatList, Text, View,TouchableOpacity,ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useObserver } from "mobx-react-lite";
import { GeneralStore } from "../stores";
import CreateThread from "../components/CreateThread";
import ThreadTitle from "../components/ThreadTitle";
import { SIZES } from "../constants";

var s = require('../style')

 const HomeScreen = ({navigation,route })=> {
  const [openCreate, setOpenCreate] = useState(false)


  useEffect(() => {
    GeneralStore.getThreads()
  }, [])

  const  create = async (title,color)=> {
    setOpenCreate(false)

    let data = {title,color}
    let res = await GeneralStore.create(data)
    GeneralStore.threadsList = [res,...GeneralStore.threadsList]
 }
      return useObserver(() =>
      <ScrollView >
        <View style={[s.center,s.titleHeader]}>

          <Text style={{fontWeight:'bold',fontSize:20}}>Threads</Text>
          <TouchableOpacity  onPress={()=> setOpenCreate(!openCreate)} 
          style={{position:'absolute', right:15}}>
                 <Icon name={'add-comment'} size={22} color={"black"}/>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:SIZES.marginTop}}>
       {openCreate && <CreateThread  onPress={(title, color)=> create(title,color)}/> }
          <FlatList data={GeneralStore.threadsList} renderItem={(e)=><ThreadTitle {...e} key={e.index}/>}
                      keyExtractor={(item, index) => index.toString()}/>
       </View>
    </ScrollView>
      );
    }
  


  export default HomeScreen



  const styles = StyleSheet.create({
   
  })