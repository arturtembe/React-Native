import React from 'react';
import {Text, TextInput, View} from 'react-native';
import estilo from '../../styles/style';
import {PesoBoxDTO} from '../interfaces/pesoBox.interface';

export default function PesoBox(props: PesoBoxDTO): React.JSX.Element {
  return (
    <View style={estilo.viewBox}>
      <Text>Imforme o seu peso: </Text>
      <TextInput
        style={estilo.txtInput}
        autoFocus={true}
        keyboardType={'numeric'}
        value={`${props.peso}`}
        onChangeText={text => props.setPeso(Number(text))}
      />
    </View>
  );
}
