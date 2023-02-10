import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { RoundedButton } from '../../Components/RoundedButton/RoundedButton'
import { Colors } from '../../Utils/Colors/Colors'
import { fontSizes, spacing } from '../../Utils/Sizes/Sizes'

const FocusHistory = ({ history, clearHistory }) => {

    if (!history || !history.length) return <Text style={styles.title} >We haven't focused on anything yet!</Text>

    const items = ({ item }) => <Text style={styles.item} > 👉🏻 {item}</Text>;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title} >Things we've Focused on:</Text>
            <RoundedButton size={35} title='🧹' onPress={clearHistory} />
            </View>
            <FlatList
                data={history}
                renderItem={items}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        flex: 1
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    item: {
        color: Colors.textColor,
        fontSize: fontSizes.md,
        paddingTop: spacing.sm
    },

    title: {
        color: Colors.textColor,
        fontSize: fontSizes.md,
        fontWeight: 'bold'
    }
})

export default FocusHistory