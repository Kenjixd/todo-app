import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#333',
        marginTop: 20
    },
    image: {
        marginTop: 48,
        marginBottom: 16
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#808080'
    },
    description: {
        fontSize: 14,
        fontWeight: 'regular',
        color: '#808080'
    }
});