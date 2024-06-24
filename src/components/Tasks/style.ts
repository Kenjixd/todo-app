import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 64,
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    checkbox: {
        borderRadius: 999,
    },
    iconContainer: {
        width: 18,
        height: 18,
        borderRadius: 12,
        backgroundColor: '#5E60CE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uncheckedTask: {
        color: '#F2F2F2',
        fontSize: 14,
        flex: 1,
        marginLeft: 8,
    },
    checkedTask: {
        color: '#808080',
        fontSize: 14,
        flex: 1,
        marginLeft: 8,
        textDecorationLine: 'line-through'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 32,
        height: 32,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
});