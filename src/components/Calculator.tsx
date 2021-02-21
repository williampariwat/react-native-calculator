import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Calculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculation}></View>
      <View style={styles.buttonPad}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            {[7,8,9].map(n => (<TouchableOpacity key={n} style={styles.button}><Text style={styles.buttonText}>{n}</Text></TouchableOpacity>))}
          </View>
          <View style={styles.row}>
            {[4,5,6].map(n => (<TouchableOpacity key={n} style={styles.button}><Text style={styles.buttonText}>{n}</Text></TouchableOpacity>))}
          </View>
          <View style={styles.row}>
            {[1,2,3].map(n => (<TouchableOpacity key={n} style={styles.button}><Text style={styles.buttonText}>{n}</Text></TouchableOpacity>))}
          </View>
          <View style={styles.row}>
            {['.',0,'='].map(n => (<TouchableOpacity key={n} style={styles.button}><Text style={styles.buttonText}>{n}</Text></TouchableOpacity>))}
          </View>
        </View>
        <View style={styles.operations}>
          {['C','/','*','-','+'].map(n => (<TouchableOpacity key={n} style={styles.button}><Text style={[styles.buttonText,styles.white]}>{n}</Text></TouchableOpacity>))}
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
  result: {
    flex: 2,
    backgroundColor: 'red'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
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
  },
  buttonText: {
    fontSize: 30
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default memo(Calculator);
