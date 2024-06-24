import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 42,
        marginTop: -50,
        zIndex: 1
    },
    input: {
        backgroundColor: '#262626',
        height: 54,
        borderRadius: 6,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 4
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTaskText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    taskText: {
        flexDirection: 'row',
    },
    taskCreated: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8
    },
    taskConcluded: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8
    },
    number: {
        height: 19,
        width: 25,
        color: '#D9D9D9',
        backgroundColor: '#333333',
        borderRadius: 999,
        textAlign: 'center',
    },
    taskList: {
        marginTop: 20
    }
});