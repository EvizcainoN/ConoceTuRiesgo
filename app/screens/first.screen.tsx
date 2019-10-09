import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { CustomHeader } from '../custom/custom.header'
import { Styles } from '../styles/style'
import moment from 'moment';
import FontIso from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'

export class BasicDataScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: <CustomHeader />
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            month: '',
            year: '',
            day: '',
            fecha_nac: moment().format('DD/MM/YYYY'),
            today: moment().format('DD/MM/YYYY'),
            sexo: 'M',
            identificacion: null
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: Styles.backgroundColor,
                justifyContent: 'center',
            }}>

                <View style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                }}>
                    <View style={{
                        paddingVertical: 20,
                        paddingHorizontal: 16,
                        justifyContent: 'center',
                    }}>

                        <Text style={customStyles.labels}>{'Identificación'}</Text>
                        <TextInput
                            value={this.state.identificacion}
                            style={{
                                borderBottomColor: Styles.input_border_color,
                                borderBottomWidth: 1
                            }}
                            keyboardType={'number-pad'}
                            placeholder={'Número de Documento'}
                            onChangeText={(identificacion) => {
                                this.setState({
                                    identificacion
                                })
                            }}
                        />
                    </View>
                    <View style={{
                        paddingVertical: 20,
                        paddingHorizontal: 16,
                        justifyContent: 'center',
                    }}>

                        <Text style={customStyles.labels}>{'Fecha de Nacimiento'}</Text>
                        <View style={{
                            flexDirection: 'row',
                            borderBottomColor: Styles.input_border_color,
                            borderBottomWidth: 1,
                            alignItems: 'center'
                        }}>
                            <TextInput
                                ref='dia'
                                value={this.state.day}
                                style={{
                                    width: 30
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'DD'}
                                maxLength={2}
                                onChangeText={(day) => {
                                    this.setState({
                                        day
                                    }, () => {
                                        if (day && day.length === 2) {
                                            this.refs.month.focus()
                                        }
                                    })
                                }}
                            />
                            <Text style={{
                                marginHorizontal: 10,
                                color: Styles.input_border_color
                            }}>{'/'}</Text>
                            <TextInput
                                ref='month'
                                value={this.state.month}
                                style={{
                                    width: 30
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'MM'}
                                maxLength={2}
                                onChangeText={(month) => {
                                    this.setState({
                                        month
                                    }, () => {
                                        if (month && month.length === 2) {
                                            this.refs.year.focus()
                                        }
                                    })
                                }}
                            />
                            <Text style={{
                                marginHorizontal: 10,
                                color: Styles.input_border_color
                            }}>{'/'}</Text>
                            <TextInput
                                ref='year'
                                value={this.state.year}
                                style={{
                                    width: 60
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'YYYY'}
                                maxLength={4}
                                onChangeText={(year) => {
                                    this.setState({
                                        year
                                    })
                                }}
                            />

                        </View>
                    </View>
                    <View style={{
                        paddingVertical: 20,
                        paddingHorizontal: 16,
                        justifyContent: 'center',
                    }}>

                        <Text style={customStyles.labels}>{'Sexo'}</Text>
                        <View style={{
                            flexDirection: 'row'
                        }}>

                            <TouchableOpacity style={{
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                                onPress={() => {
                                    this.setState({
                                        sexo: 'M'
                                    })
                                }}>
                                <FontIso name={this.state.sexo === 'M' ?
                                    'md-radio-button-on' :
                                    'md-radio-button-off'} size={20} />
                                <Text style={customStyles.radios_labels}>{'M'}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                                onPress={() => {
                                    this.setState({
                                        sexo: 'F'
                                    })
                                }}>
                                <FontIso name={this.state.sexo === 'F' ?
                                    'md-radio-button-on' :
                                    'md-radio-button-off'} size={20} />
                                <Text style={customStyles.radios_labels}>{'F'}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    width: 100 + '%',
                    opacity: !this._validateForm() ? 0.5 : 1
                }}>
                    <TouchableOpacity style={{
                        paddingHorizontal: 10,
                        paddingVertical: 15,
                        backgroundColor: Styles.bottonColor,
                        alignItems: 'center',
                    }}
                        disabled={!this._validateForm()}
                        onPress={this._go}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15
                        }}>{'Enviar'}</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    _validateForm = () => {
        return this.state.identificacion &&
            this._validDate() &&
            this.state.sexo;
    }

    _validDate = () => {
        let { day, month, year } = this.state;
        let date = `${day}/${month}/${year}`;
        return moment(date, 'DD/MM/YYYY').isValid()
    }

    _go = () => {

        let object: any = Object.assign({}, this.state);
        let { day, month, year } = object;

        let date = `${day}/${month}/${year}`;
        let years = moment().diff(moment(date, 'DD/MM/YYYY'), 'years');
        object.edad = years;
        //object.edad = 42;

        this.props.navigation.navigate('Adicional', {
            user: object
        })

    }

}

const customStyles = StyleSheet.create({
    labels: {
        color: Styles.input_label_color,
        fontSize: 25,
        fontFamily: 'monospace'
    },
    radios_labels: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Styles.input_label_color,
        marginLeft: 10
    }
})