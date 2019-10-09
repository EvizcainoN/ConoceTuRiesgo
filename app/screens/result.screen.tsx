import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { CustomHeader } from '../custom/custom.header'
import { Styles } from '../styles/style'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import FontIso from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { calcular } from '../services/calculo.service'
import { NavigationActions } from 'react-navigation'

export class ResultScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: <CustomHeader />
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            user: {
                ...this.props.navigation.getParam('user')
            },
            result: {}
        }
    }


    componentWillMount() {
        const { user, user: { sexo } } = this.state;
        if (sexo) {
            let result = calcular(user);
            //console.log(result)
            this.setState({
                result
            })
        }
    }

    render() {

        let { resultado, nivel } = this.state.result;
        // nivel= {
        //     min: 0, max: 9,
        //     desc: '¡Felicitaciones! Usted tiene un riesgo bajo de desarrollar diabetes.', type: 'success',
        //     recommendation: 'Le sugerimos que controle su peso regularmente, consuma frutas y verduras diariamente y practique al menos 30 minutos de actividad física con intensidad moderada por día, para así mantener y mejorar su salud.'
        // }
        let { type, desc } = nivel || {};

        // resultado = 20;
        // type = 'success';
        return (
            <View style={{
                flex: 1,
                backgroundColor: Styles.backgroundColor,
                justifyContent: 'space-evenly',
            }}>
                {
                    (resultado) ? null :
                        <View style={{
                            flex: 1,
                            paddingHorizontal: 16,
                        }}>
                            <Text style={customStyles.labels}>{'Cargando ...'}</Text>
                        </View>
                }
                {
                    !!resultado &&
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 16,
                        justifyContent:'space-evenly'
                    }}>

                        <View style={{
                            paddingHorizontal: 10,
                            justifyContent: 'center',
                            marginBottom: 20,
                            marginTop:10
                        }}>

                            <Text style={{
                                fontSize: 30,
                                color: Styles.input_label_color,
                                fontFamily: 'sans-serif'
                            }}>{` Nivel de Riesgo:`}</Text>


                        </View>
                        <View style={{
                            flex: 1,
                            paddingHorizontal: 16
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: Styles.header_title,
                                    marginRight: 10,
                                    width: 70 + '%',
                                    textAlign: 'justify',
                                }}>{desc}</Text>

                                <Image
                                    source={
                                        type === 'success' ?
                                            require('../../assets/success.png') :
                                            type === 'warning' ?
                                                require('../../assets/warning.png') :
                                                require('../../assets/danger.png')
                                    }
                                    style={{
                                        width: 50,
                                        height: 50
                                    }} />

                            </View>
                            <View style={{
                                marginTop: 10
                            }}>
                                <Text style={customStyles.recommentation_text}>
                                    {nivel.recommendation}
                                </Text>
                            </View>

                        </View>

                    </View>
                }

                {
                    !!type &&
                    <View style={{
                        flex: 1,
                        marginTop:10
                    }}>


                        <View style={{
                            flexDirection: 'row'
                        }}>

                            <View style={{
                                width: 60,
                                alignItems: 'flex-end'
                            }}>
                                <View style={{

                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    marginVertical: 10,
                                    height: 40,
                                }}>
                                    {
                                        type === 'success' &&
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <View style={[customStyles.arrow_style,
                                            {
                                                height: 20,
                                                backgroundColor: Styles.bottonColor,
                                                width: 30
                                            }
                                            ]}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontSize: 12,
                                                    fontWeight: 'bold'
                                                }}>
                                                    {resultado}
                                                </Text>
                                            </View>
                                            <View style={[
                                                customStyles.triangleSmall,
                                                { borderBottomColor: Styles.bottonColor }]}>

                                            </View>
                                        </View>
                                    }

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    marginVertical: 10,
                                    height: 40
                                }}>

                                    {
                                        type === 'warning' &&
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <View style={[customStyles.arrow_style,
                                            {
                                                height: 20,
                                                backgroundColor: Styles.bottonColor,
                                                width: 30
                                            }
                                            ]}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontSize: 12,
                                                    fontWeight: 'bold'
                                                }}>
                                                    {resultado}
                                                </Text>
                                            </View>
                                            <View style={[
                                                customStyles.triangleSmall,
                                                { borderBottomColor: Styles.bottonColor }]}>

                                            </View>
                                        </View>
                                    }

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    marginVertical: 10,
                                    height: 40
                                }}>

                                    {
                                        type === 'danger' &&
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <View style={[customStyles.arrow_style,
                                            {
                                                height: 20,
                                                backgroundColor: Styles.bottonColor,
                                                width: 30
                                            }
                                            ]}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontSize: 12,
                                                    fontWeight: 'bold'
                                                }}>
                                                    {resultado}
                                                </Text>
                                            </View>
                                            <View style={[
                                                customStyles.triangleSmall,
                                                { borderBottomColor: Styles.bottonColor }]}>

                                            </View>
                                        </View>
                                    }

                                </View>
                            </View>
                            <View>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View style={[customStyles.arrow_style, {
                                        width: 40 + '%',
                                        backgroundColor: Styles.success_color,
                                    }]}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}>
                                            {'< 10 Puntos'}
                                        </Text>
                                    </View>
                                    <View style={[
                                        customStyles.triangle,
                                        { borderBottomColor: Styles.success_color }]}>

                                    </View>

                                </View>

                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View style={[customStyles.arrow_style, {
                                        width: 60 + '%',
                                        backgroundColor: Styles.warning_color,
                                    }]}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}>
                                            {'10 - 12 Puntos'}
                                        </Text>
                                    </View>
                                    <View style={[
                                        customStyles.triangle,
                                        { borderBottomColor: Styles.warning_color }]}>

                                    </View>

                                </View>

                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View style={[customStyles.arrow_style, {
                                        width: 80 + '%',
                                        backgroundColor: Styles.danger_color,
                                    }]}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}>
                                            {'> 12 Puntos'}
                                        </Text>
                                    </View>
                                    <View style={[
                                        customStyles.triangle,
                                        { borderBottomColor: Styles.danger_color }]}>

                                    </View>

                                </View>
                            </View>
                        </View>


                    </View>
                }
                <View style={{
                    justifyContent: 'flex-end',
                    width: 100 + '%'
                }}>
                    <TouchableOpacity style={{
                        paddingHorizontal: 10,
                        paddingVertical: 15,
                        backgroundColor: Styles.bottonColor,
                        alignItems: 'center'
                    }}
                        onPress={this._finalize}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15
                        }}>{'Finalizar'}</Text>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }

    _finalize = () => {
        this.props.navigation.reset([
            NavigationActions.navigate({ routeName: 'BasicData' })
        ], 0)
    }

}

const customStyles = StyleSheet.create({
    labels: {
        color: Styles.input_label_color,
        fontSize: 20,
        fontFamily: 'monospace'
    },
    radios_labels: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Styles.input_label_color,
        marginLeft: 10,
        fontFamily: 'monospace'
    },
    button_text: {

    },
    recommentation_text: {
        color: '#bebebe',
        fontSize: 12,
        fontFamily: 'monospace',
        textAlign: 'justify'
    },
    triangle: {
        width: 0,
        height: 40,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        alignSelf: 'center',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [
            { rotate: '90deg' }
        ]
    },
    triangleSmall: {
        alignSelf: 'center',
        width: 0,
        height: 20,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [
            { rotate: '90deg' }
        ],
    },
    arrow_style: {
        height: 40,
        marginVertical: 10,
        justifyContent: 'center',
        paddingLeft: 10
    }
})