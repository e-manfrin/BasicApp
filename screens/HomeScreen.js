import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen!</Text>
            <Button title='Sair' onPress={() => navigation.replace('Login')} />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;


