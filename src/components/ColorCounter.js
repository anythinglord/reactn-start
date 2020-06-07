import React, { useState }   from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
 
 
const ColorCounter = (props) => {
 
    let [value, setValue] = useState(0);
    
    return(
        
        <View>
            <Text style={Styles.text}>{props.title}</Text>
            <Button title="increse"></Button>
            <Button title="decrease"></Button>
        </View>
        
    )
}
 
const Styles = StyleSheet.create({
    text:{
        fontSize: 20,
        paddingTop: 18,
        textAlign: 'center',
    }
})
 
export default ColorCounter ;