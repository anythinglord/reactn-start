import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList} from 'react-native';
//import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';


const ColorScreen = ({navigation}) => {
    
    let [colors, setColors] = useState([])

    return (
        <View>
            <Button  
                onPress={ () =>  { setColors([...colors,randomRgb()]) } }  
                title="Add color">
            </Button>
            
            <FlatList 
                keyExtractor={ item => item}
                data={colors}
                renderItem={ ({item}) => {
                    return  (
                        <View 
                            style={{ height: 100, width: 100, backgroundColor: item }}
                        />
                    )
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    button:{
        marginTop: 12,
    },
    text: {
        paddingTop: 12,
        fontSize: 20,
        textAlign: 'center'
    }
});

export default ColorScreen;