import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RoundedButton } from '../../Components/RoundedButton/RoundedButton'

const Timing = ({ onChangeTime }) => {
    return (
        <>
            <View style={styles.timingButton}>
                <RoundedButton size={45} title="10" onPress={() => { onChangeTime(10) }} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton size={45} title="15" onPress={() => { onChangeTime(15) }} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton size={45} title="20" onPress={() => { onChangeTime(20) }} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton size={45} title="30" onPress={() => { onChangeTime(30) }} />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton size={45} title="60" onPress={() => { onChangeTime(59.9) }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
    }
})

export default Timing