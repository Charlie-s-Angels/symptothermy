import React from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';
import I18n from '../../tools/i18n/locales';

import config from "../../config";

const Button = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} >
                <Text style={styles.button}>{I18n.t(text)}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Button;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },    
    button: {
        fontSize: 18,
        color: config.DARK_GRAY,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: config.LIGHT_GRAY,
        width: 300,
        paddingVertical: 20,
        borderRadius: 10,    
    }
});