import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';

export function EmptyList() {
    return (
        <View style={styles.container}>
            <Icon name="assignment" size={56} color="#333" style={styles.image} />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas </Text>
            <Text style={styles.description}>Crie tarefas e organize seus itens a fazer </Text>
        </View>
    )
}