import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CommonButton = ({label , onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={{color:"white"}}>{label}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"#C1063D",
        paddingLeft:25,
        paddingRight:25,
        paddingTop:12,
        paddingBottom:12,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    }
})
export default CommonButton