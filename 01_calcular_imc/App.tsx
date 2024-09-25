import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import estilo from './styles/style';
import PesoBox from './src/components/pesoBox';
import AlturaBox from './src/components/alturaBox';
import CalcularBox from './src/components/calcularBox';
import ResultadoBox from './src/components/resultadoBox';

export default function App(): React.JSX.Element {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState('0');
  const [resultado, setResultado] = useState(0);

  return (
    <SafeAreaView style={estilo.container}>
      <Text>Calculador de IMC</Text>
      {/* Peso */}
      <PesoBox peso={peso} setPeso={setPeso} />
      {/* Altura */}
      <AlturaBox altura={altura} setAltura={setAltura} />
      {/* Calcular */}
      <CalcularBox peso={peso} altura={altura} setResultado={setResultado} />
      {/* Resultado */}
      <ResultadoBox resultado={resultado} />
    </SafeAreaView>
  );
}
