import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Keyboard} from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    const clearInput = () => {
        setText('')
        Keyboard.dismiss()
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New Todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button 
                onPress={() => {submitHandler(text), clearInput()}}
                title="Add Todo"
                color='#51bbfe'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD' 
    }
})