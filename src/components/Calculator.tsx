import React, { memo, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Calculator = () => {
  const [calText, setCalText] = useState('');

  const pressButton = (value) => {
    let splitText = calText.split(/[+/*-]/)
    let currentNumber = splitText[splitText.length-1]

    // Conditions to prevent two decimals and or two operations in a row and or starting with multiply/divide
    let hasDecimal = (value === '.' && currentNumber.includes('.'));
    let hasOperation = (['+','/','*','-'].includes(value) && ['+','/','*','-'].includes(calText.charAt(calText.length-1)))
    let firstValueOperation = (['*','/'].includes(value) && calText === '')

    if (hasDecimal || hasOperation || firstValueOperation) {
      return
    }
    let temp = calText + value
    if (temp === ".") {
      temp = "0."
    }
    setCalText(temp)
  }

  const clear = () => {
    setCalText("");
  }

  const calculate = () => {
    setCalText(eval(calText).toString());
  }

  return (
    <View style={styles.container}>
      <View style={styles.calculationBox}>
        <Text style={[styles.calculationText,styles.white,{textAlign: 'right'}]}>{calText}</Text>
      </View>
      <View style={styles.buttonPad}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            {['7','8','9'].map(n => (
              <TouchableOpacity
                key={n}
                style={styles.button}
                onPress={() => pressButton(n)}>
                <Text style={styles.buttonText}>{n}</Text>
              </TouchableOpacity>))}
          </View>
          <View style={styles.row}>
            {['4','5','6'].map(n => (
              <TouchableOpacity
                key={n}
                style={styles.button}
                onPress={() => pressButton(n)}>
                <Text style={styles.buttonText}>{n}</Text>
              </TouchableOpacity>))}
          </View>
          <View style={styles.row}>
            {['1','2','3'].map(n => (
              <TouchableOpacity
                key={n}
                style={styles.button}
                onPress={() => pressButton(n)}>
                <Text style={styles.buttonText}>{n}</Text>
              </TouchableOpacity>))}
          </View>
          <View style={styles.row}>
            {['.',0].map(n => (
              <TouchableOpacity
                key={n}
                style={styles.button}
                onPress={() => pressButton(n)}>
                <Text style={styles.buttonText}>{n}</Text>
              </TouchableOpacity>))}
            <TouchableOpacity
              style={styles.equalsButton}
              onPress={() => calculate()}>
              <Text style={[styles.buttonText, styles.white]}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => clear()}>
            <Text style={[styles.buttonText, styles.white]}>C</Text>
          </TouchableOpacity>
          {['/','*','-','+'].map(n => (
            <TouchableOpacity
              key={n}
              style={styles.button}
              onPress={() => pressButton(n)}>
              <Text style={[styles.buttonText,styles.white]}>{n}</Text>
            </TouchableOpacity>))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  white: {
    color: 'white'
  },
  clearButton: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  equalsButton: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  calculationBox: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'black'
  },
  calculationText: {
    fontSize: 60,
  },
  buttonPad: {
    flex: 7,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'dimgrey'
  },
  buttonText: {
    fontSize: 30
  },
  numbers: {
    flex: 3,
    backgroundColor: 'aliceblue'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  operations: {
    flex: 1,
    backgroundColor: 'orange'
  }
});

export default memo(Calculator);
