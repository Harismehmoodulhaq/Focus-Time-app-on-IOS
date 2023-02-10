import React, { useState } from 'react'
import { View, StyleSheet, Text, Vibration  } from 'react-native'
import { Countdown } from '../../Components/CountDown/CountDown'
import { spacing } from '../../Utils/Sizes/Sizes';
import {useKeepAwake} from 'expo-keep-awake'; 
import { RoundedButton } from '../../Components/RoundedButton/RoundedButton';
import { Colors } from '../../Utils/Colors/Colors';
import { ProgressBar } from 'react-native-paper';
import Timing from '../Timing/Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
]

const Timer = ( { focusSubject, clearSubject, onTimerEnd } ) => {
  useKeepAwake()
  const [ isStarted, setIsStarted ] = useState(false)
  const [ progress, setProgress ] = useState(1)
  const [ minutes, setMinutes ] = useState(0.1)

  const onEnd = (resetTime) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    onTimerEnd(focusSubject)
    resetTime()
  }

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown minutes={minutes} onProgress={setProgress} isPaused={!isStarted} onEnd={onEnd}/> 
        <View style={{paddingTop: spacing.xxl}}>
        <Text style={styles.title}>Focusing On:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar 
          color={Colors.progressBar}
          progress={progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
          <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
        <RoundedButton title='Start' onPress={() => setIsStarted(true)} /> 
        ) : (
        <RoundedButton title='Pause' onPress={() => setIsStarted(false)} />)}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="🧹" onPress={clearSubject} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: spacing.md,
  },
  title: {
    color: Colors.textColor,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task: {
    color: Colors.textColor,
    textAlign: 'center',
  }
})
 
export default Timer
