import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login Screen!</Text>
            <Button 
                title='Ir para Home'
                onPress={() => navigation.replace('Home', { username: 'Emily '})}    
            />
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

export default LoginScreen;