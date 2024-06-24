import { View, Image } from 'react-native';

import { styles } from './style';

export function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        </View>
    )
}