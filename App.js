import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Colors } from './src/Utils/Colors/Colors';
import Focus from './src/Features/Focus/Focus';
import Timer from './src/Features/Timer/Timer';
import FocusHistory from './src/Features/FocusHistory/FocusHistory';

export default function App() {
  const [ currentSubject, setCurrentSubject ] = useState(null);
  const [ history, setHistory ] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (

        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} clearHistory={() => setHistory([])}  />
        </>

      ) : (
      
      <Timer 
      focusSubject={currentSubject} 
      onTimerEnd={(subject) => setHistory([...history, subject]) } 
      clearSubject={() => setCurrentSubject(null)} 
      />
      
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currnetHight : 0,
    backgroundColor: Colors.appThemeBackground,
  },
  text: {
    color: Colors.textColor
  }
});
