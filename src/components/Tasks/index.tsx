import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';

type Props = {
    task: string;
    isChecked: boolean;
    onRemove: () => void;
    onCheck: () => void;
}

export function Tasks({ task, isChecked, onRemove, onCheck }: Props) {
    return (
        <View style={styles.container}>
            <CheckBox
                checked={isChecked}
                style={styles.checkbox}
                checkedIcon={
                    <View style={styles.iconContainer}>
                        <Icon name="check" size={10} color="white" />
                    </View>
                }
                uncheckedIcon={
                    <View>
                        <Icon name="radio-button-unchecked" size={18} color="#4EA8DE" />
                    </View>
                }
                onPress={onCheck}
            />
            <Text style={isChecked ? styles.checkedTask : styles.uncheckedTask}>{task}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Icon name="delete" size={18} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}