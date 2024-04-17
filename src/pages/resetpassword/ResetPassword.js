import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CommonStyles } from '../../components/commonstyles/CommonStyles'
import Header from '../../components/header/Header'
import { ResetPassData } from '../../constants/Constants'
import { TextInput } from 'react-native-paper'
import CommonButton from '../../components/commonbutton/CommonButton'
import { useNavigation } from '@react-navigation/native'
import themeContext from '../../components/theme/themeContext'

const ResetPassword = () => {

    const navigation = useNavigation();

    const handleSuccess = () => {
        navigation.navigate("Success")
    }

    const theme = useContext(themeContext);

  return (
    <View style={[CommonStyles.container , {backgroundColor:theme.background}]}>
        <Header title="Reset Password"/>
        <View>
            <Image source={require('../../../assets/png/resetpass.png')} style={styles.image}/>

            {ResetPassData.map((item) => (
            <View key={item.id}>
              <TextInput
                placeholder={item.placeholder}
                style={styles.input}
                left={<TextInput.Icon icon={item.icon} />}
                right={<TextInput.Icon icon={item.righticon} />}
                underlineColor="transparent"
                theme={{
                  colors: {
                    primary: "transparent",
                    underlineColor: "transparent",
                  },
                }}
              secureTextEntry={item.securetext}
              />
            </View>
          ))}
          <CommonButton label="Continue" onPress={handleSuccess}/>

          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"70%",
        height:"55%",
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:"5%"
    },
    input: {
        // width:"100%",
        borderWidth: 0.5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: "grey",
        marginBottom: "5%",
        backgroundColor: "white",
      },
})

export default ResetPassword