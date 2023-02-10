import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Utils/Colors/Colors';
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../Components/RoundedButton/RoundedButton';
import { spacing } from '../../Utils/Sizes/Sizes';

const Focus = ({ addSubject }) => {
  const [subject, setSubjct] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput} onChangeText={setSubjct} label="What would you like to focus on?" />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  ) 
}

export default Focus

const styles = StyleSheet.create({
  container: {
    
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  button : {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  }
})