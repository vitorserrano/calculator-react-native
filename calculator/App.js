import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const x = parseFloat(first);
  const y = parseFloat(second);

  const sum = x + y;
  const subtraction = parseInt(x - y);
  const division = Number(x / y).toFixed(2);
  const multiplication = x * y;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        keyboardType="decimal-pad" 
        style={styles.input} 
        value={first} 
        onChangeText={setFirst} 
      />

      <TextInput 
        keyboardType="decimal-pad"
        style={styles.input} 
        value={second} 
        onChangeText={setSecond} 
      />
      
      <View style={styles.result}>
        <Text style={styles.subtitle}>Resultado:</Text>

        <Text style={styles.operation}>{`Soma: ${sum}`}</Text>
        <Text style={styles.operation}>{`Subtração: ${subtraction}`}</Text>
        <Text style={styles.operation}>{`Divisão: ${division}`}</Text>
        <Text style={styles.operation}>{`Multiplicação: ${multiplication}`}</Text>
      </View>
    </View>
  );
}

