import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
//import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';


const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                onPress={ () => navigation.navigate('List') } 
                title="Go ListScreen"
            />
            <Button
                onPress={ () => navigation.navigate('Image') } 
                title="Go Image Demo"
            />
            <Button
                onPress={ () => navigation.navigate('Counter') } 
                title="Go Counter Demo"
            />
            <Button
                onPress={ () => navigation.navigate('Color') } 
                title="Go Color Demo"
            />
            <Button
                onPress={ () => navigation.navigate('Square') } 
                title="Go Square Demo"
            />
            <TouchableOpacity 
                onPress={ () => console.log('pressed') }>
                <Text>Go other screens</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;
