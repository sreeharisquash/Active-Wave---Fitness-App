import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { CommonStyles } from '../commonstyles/CommonStyles'
import themeContext from '../theme/themeContext'

const Photo = () => {
    const theme = useContext(themeContext);

  return (
    <ScrollView style={[CommonStyles.container , {backgroundColor:theme.background}]}>
        <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
            <Text style={{color:theme.color}}>Photo component</Text>
        </View>
    </ScrollView>
  )
}

export default Photo