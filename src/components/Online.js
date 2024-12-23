import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';

const mockOnline = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
    },
    {
        firstName: 'Mark',
        lastName: 'Johnson',
    },
    {
        firstName: 'Emily',
        lastName: 'Davis',
    },
    {
        firstName: 'Chris',
        lastName: 'Brown',
    },
    {
        firstName: 'Emma',
        lastName: 'Wilson',
    },
    {
        firstName: 'David',
        lastName: 'Taylor',
    },
    {
        firstName: 'Sophia',
        lastName: 'Anderson',
    },
];

function Online() {
    return (
        <View style={styles.cardOnline}>
            <View>
                <Image style={styles.imageCarousell} />
                <View style={styles.listOnline}>
                    {mockOnline.map(({ firstName, lastName }, index) => (
                        <View key={index} style={styles.wrapperProfile}>
                            <View style={styles.profileImage}>
                                <Icon name="user" size={20} color="white" />
                            </View>
                            <View style={styles.wrapperName}>
                                <Text key={index}>{firstName}</Text>
                                <Text key={index}>{lastName}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperName: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperProfile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileImage: {
        borderRadius: '50%',
        backgroundColor: '#A0A0A0',
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardOnline: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        width: '100%',
        height: 150,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    listOnline: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginTop: 10,
        position: 'relative',
        zIndex: 1,
    },
});

export default Online;
