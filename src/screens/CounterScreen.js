import React, { useState } from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';
//import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';


const CounterScreen = ({navigation}) => {
    
    let [count, setCount] = useState(0);
    const decrease = () => {
        if ( count < 0 ) setCount(0)
        else setCount(count--)
    }

    return (
        <View>
            <Button
                style={styles.button}
                onPress={ () => setCount(count++) } 
                title="Increase"
            />
            <Button
                style={styles.button}
                onPress={ decrease } 
                title="Decrease"
            />
            <Text style={styles.text}>Current Count:</Text>
            <Text style={styles.text}>{count}</Text>
        </View>
    );
};

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

export default CounterScreen;