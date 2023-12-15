import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Spacing from '../../../components/Spacing'
import Color from '../../../style/Color'
const width =Dimensions.get('window').width
const HomeGridListItem = ({item , onPress}) => {
    console.log('render' )
  return (
    <TouchableOpacity onPress={onPress} style ={styles.mainBox}>
    <Image
    resizeMode='cover'
    style = {styles.imageStyle}
    source={{uri:item?.image}}

    />
    <Spacing val={15}/>
      <Text>{item?.title}</Text>
      <Spacing val={10}/>
    </TouchableOpacity>
  )
}

export default memo(HomeGridListItem)

const styles = StyleSheet.create({

    mainBox:{
        width:width/2.5,
       
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems:'center',
        backgroundColor:Color.white,
        borderRadius:15,
        marginHorizontal:15, 
        overflow:'hidden',
        marginVertical:15
    },
    imageStyle:{
        
        height:100,
        width:'100%',
        
        
        
    }
})