import React from 'react';
import {Text, TextInput, View} from 'react-native';
import estilo from '../../styles/style';
import {AlturaBoxDTO} from '../interfaces/alturaBox.interface';

export default function AlturaBox(props: AlturaBoxDTO): React.JSX.Element {
  return (
    <View style={estilo.viewBox}>
      <Text>Imforme a sua altura: </Text>
      <TextInput
        style={estilo.txtInput}
        autoFocus={true}
        keyboardType={'numeric'}
        value={props.altura}
        onChangeText={text => props.setAltura(text)}
      />
    </View>
  );
}
