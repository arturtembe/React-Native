import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import estilo from '../../styles/style';
import {CalcularBoxDTO} from '../interfaces/calcularBox.interface';

export default function CalcularBox(props: CalcularBoxDTO): React.JSX.Element {
  const calcIMC = () => {
    //Verifique peso
    if (props.peso === 0 || !props.peso) {
      alert(`Imforme a peso`);
    }
    //Verifique altura
    if (Number(props.altura) === 0 || !props.altura) {
      alert(`Imforme a altura`);
    }
    const r = props.peso / Math.pow(Number(props.altura), 2);
    props.setResultado(Number(r.toFixed(1)));
  };

  return (
    <View style={estilo.viewBox}>
      <TouchableHighlight style={estilo.btnCalc} onPress={() => calcIMC()}>
        <Text style={estilo.txtBtn}>Calcular IMC</Text>
      </TouchableHighlight>
    </View>
  );
}
