import React from "react";
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#BBB',
        borderWidth: 1,
        borderRadius: 10
    },
    itemText: {
        marginLeft: 20
    }
})