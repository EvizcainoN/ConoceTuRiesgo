import React from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { CustomHeader } from '../custom/custom.header'
import { Styles } from '../styles/style'
import FontIso from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

export class AditionalDataScreen extends React.Component {

    static navigationOptions = () => {
        return {
            header: <CustomHeader />
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            ...props.navigation.getParam('user', {}),
            hipertension: 'N',
            freq_frutas: 'T',
            diabetes: 'N',
            glucosa: 'N',
            ejercicios: 'N',
            peso: null,
            talla: null,
            perimetro: null,
            tension: null
        }

    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: Styles.backgroundColor,
                justifyContent: 'center',
            }}>

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'Peso:'}</Text>
                            <TextInput
                                value={this.state.peso}
                                style={{
                                    borderBottomColor: Styles.input_border_color,
                                    borderBottomWidth: 1
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'Peso en Kg'}
                                onChangeText={(peso) => {
                                    peso = peso.replace(/[^0-9]/g, '');
                                    this.setState({
                                        peso
                                    }, () => {
                                        if (+this.state.peso > 255) {
                                            Alert.alert('Atención!', 'Peso no debe ser mayor de 255.',
                                                [
                                                    {
                                                        text: 'Ok', onPress: () => {
                                                            this.setState({
                                                                peso: '255'
                                                            })
                                                        }
                                                    }
                                                ]);
                                        }
                                    })
                                }} />
                        </View>
                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'Talla:'}</Text>
                            <TextInput
                                value={this.state.talla}
                                style={{
                                    borderBottomColor: Styles.input_border_color,
                                    borderBottomWidth: 1
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'Talla en cm'}
                                onChangeText={(talla) => {
                                    talla = talla.replace(/[^0-9]/g, '');
                                    this.setState({
                                        talla
                                    }, () => {
                                        if (+this.state.talla > 225) {
                                            Alert.alert('Atención!', 'Talla no debe ser mayor de 225.',
                                                [
                                                    {
                                                        text: 'Ok', onPress: () => {
                                                            this.setState({
                                                                talla: '225'
                                                            })
                                                        }
                                                    }
                                                ]);
                                        }
                                    })
                                }} />

                        </View>
                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'Perímetro Abdominal:'}</Text>
                            <TextInput
                                value={this.state.perimetro}
                                style={{
                                    borderBottomColor: Styles.input_border_color,
                                    borderBottomWidth: 1
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'Medida en cm'}
                                onChangeText={(perimetro) => {
                                    perimetro = perimetro.replace(/[^0-9]/g, '');
                                    this.setState({
                                        perimetro
                                    })
                                }} />
                        </View>

                        {/* <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'Tensión Arterial:'}</Text>
                            <TextInput
                                value={this.state.tension}
                                style={{
                                    borderBottomColor: Styles.input_border_color,
                                    borderBottomWidth: 1
                                }}
                                keyboardType={'number-pad'}
                                placeholder={'Valor Tensión Arterial'}
                                onChangeText={(tension) => {
                                    this.setState({
                                        tension
                                    })
                                }} />
                        </View> */}

                        {/* <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'Colesterol'}</Text>
                            <TextInput
                                style={{
                                    borderBottomColor: Styles.input_border_color,
                                    borderBottomWidth: 1
                                }}
                                placeholder={'Valor Colesterol'}>

                            </TextInput>
                        </View> */}

                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>
                                {'¿Realiza diariamente al menos 30 min de Ejercicios?'}</Text>
                            <View style={{
                                paddingTop: 10,
                                flexDirection: 'row'
                            }}>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            ejercicios: 'S'
                                        })
                                    }}>
                                    <FontIso name={this.state.ejercicios === 'S' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'SI'}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            ejercicios: 'N'
                                        })
                                    }}>

                                    <FontIso name={this.state.ejercicios === 'N' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'NO'}</Text>

                                </TouchableOpacity>
                            </View>
                        </View>



                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>
                                {'¿Con que frecuencia consume verduras o frutas?'}</Text>
                            <View style={{
                                paddingTop: 10
                            }}>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            freq_frutas: 'T'
                                        })
                                    }}>

                                    <FontIso name={this.state.freq_frutas === 'T' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'Todos los días'}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            freq_frutas: 'O'
                                        })
                                    }}>

                                    <FontIso name={this.state.freq_frutas === 'O' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'Ocasionalmente'}</Text>

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'Hipertensión:'}</Text>
                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 10
                            }}>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            hipertension: 'S'
                                        })
                                    }}>

                                    <FontIso name={this.state.hipertension === 'S' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'SI'}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            hipertension: 'N'
                                        })
                                    }}>

                                    <FontIso name={this.state.hipertension === 'N' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'NO'}</Text>

                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>
                                {'¿Le han encontrado alguna vez valores de Glucosa altos?'}</Text>
                            <View style={{
                                paddingTop: 10,
                                flexDirection: 'row'
                            }}>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            glucosa: 'S'
                                        })
                                    }}>
                                    <FontIso name={this.state.glucosa === 'S' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'SI'}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            glucosa: 'N'
                                        })
                                    }}>

                                    <FontIso name={this.state.glucosa === 'N' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'NO'}</Text>

                                </TouchableOpacity>
                            </View>
                        </View>





                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 16,
                            justifyContent: 'center',
                        }}>

                            <Text style={customStyles.labels}>{'¿Se ha diagnosticado Diabetes tipo (1 o 2) a familiares allegados u otros parientes?'}</Text>
                            <View style={{
                                paddingTop: 10
                            }}>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            diabetes: 'S1'
                                        })
                                    }}>
                                    <FontIso name={this.state.diabetes === 'S1' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'Sí: en abuelos, tía, tío, primo hermano'}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            diabetes: 'S2'
                                        })
                                    }}>
                                    <FontIso name={this.state.diabetes === 'S2' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'Sí: en padres, hermanos o hijos'}</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({
                                            diabetes: 'N'
                                        })
                                    }}>
                                    <FontIso name={this.state.diabetes === 'N' ?
                                        'md-radio-button-on' :
                                        'md-radio-button-off'} size={20} />
                                    <Text style={customStyles.radios_labels}>{'NO'}</Text>

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
                            alignItems: 'center'
                        }}
                            disabled={!this._validateForm()}
                            onPress={this._go}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 15
                            }}>{'Calcular'}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        )
    }

    _validateForm = () => {
        return this.state.peso &&
            this.state.talla &&
            this.state.perimetro
        // &&
        // this.state.tension;
    }

    _go = () => {

        let object = Object.assign({}, this.state);


        this.props.navigation.navigate('Result', {
            user: object
        })
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
    }

})