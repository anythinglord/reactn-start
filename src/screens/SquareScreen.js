import React, { useState }   from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ColorCounter from '../components/ColorCounter'
 
const SquareScreen = ({navigation}) => {
 
    
    return(
        <View>
            <Text style={Styles.text}> Square Screen</Text>
            <ColorCounter title="Red"/>
            <ColorCounter title="Green"/>
            <ColorCounter title="Blue"/>
            <View 
                style={{ marginTop: 20,height: 100, width: 100, backgroundColor: 'rgb(0,255,15)'}}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {
        paddingTop: 12,
        fontSize: 20,
        textAlign: 'center'
    },
});
 
export default SquareScreen ;