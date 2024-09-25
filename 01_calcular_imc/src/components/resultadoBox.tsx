import React from 'react';
import {Text, View} from 'react-native';
import estilo from '../../styles/style';
import {ResultadoBoxDTO} from '../interfaces/resultadoBox.interface';

export default function ResultadoBox(
  props: ResultadoBoxDTO,
): React.JSX.Element {
  return (
    <View style={estilo.viewBox}>
      <Text>Resultado: {props.resultado}</Text>
    </View>
  );
}
