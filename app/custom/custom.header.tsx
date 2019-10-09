import React from 'react'
import { View, Text, Image } from 'react-native'
import { Styles } from '../styles/style'

export class CustomHeader extends React.Component {

    render() {
        return (
            <View style={{
                backgroundColor: Styles.backgroundColor,
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: 5,
                paddingTop: 10,
                paddingHorizontal: 16
            }}>

                <Image source={require('../../assets/header_icon.png')}
                    style={{
                        width: 70,
                        height: 70
                    }} />


                <Text style={{
                    fontSize: 25,
                    color: Styles.header_title,
                    fontWeight: 'bold',
                    fontFamily: 'monospace'
                }}>
                    {'CONOCE TU RIESGO'}
                </Text>

            </View>
        )
    }

}