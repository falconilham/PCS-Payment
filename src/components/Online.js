import { View, StyleSheet, Text } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';

const mockOnline = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Mark', lastName: 'Johnson' },
    { firstName: 'Emily', lastName: 'Davis' },
    { firstName: 'Chris', lastName: 'Brown' },
    { firstName: 'Emma', lastName: 'Wilson' },
    { firstName: 'David', lastName: 'Taylor' },
    { firstName: 'Sophia', lastName: 'Anderson' },
    { firstName: 'Davis', lastName: 'Wilson' },
];

function Online() {
    return (
        <View style={styles.cardOnline}>
            <View style={styles.listOnline}>
                {mockOnline.map(({ firstName, lastName }, index) => (
                    <View
                        key={index}
                        style={[
                            styles.wrapperProfile,
                            {
                                zIndex: mockOnline.length + index,
                                left: index * 33,
                            },
                        ]}
                    >
                        <View style={styles.onlineImage}>
                            <Icon name="user" size={15} color="white" />
                        </View>
                        <View style={styles.wrapperName}>
                            <Text style={styles.firstName}>{firstName}</Text>
                            <Text style={styles.lastName}>{lastName}</Text>
                        </View>
                    </View>
                ))}
                <View style={[styles.wrapperProfile, { left: 9 * 33 }]}>
                    <View style={[styles.onlineImage, styles.counterImage]}>
                        <Text style={styles.counterText}>10</Text>
                        <Text style={styles.counterText}>More</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    wrapperName: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperProfile: {
        width: '10%',
        alignItems: 'center',
        left: '-50%',
        position: 'absolute',
    },
    onlineImage: {
        borderRadius: 25,
        backgroundColor: '#A0A0A0',
        borderColor: 'white',
        width: 40,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    counterText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    },
    firstName: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    lastName: {
        fontSize: 8,
    },
    cardOnline: {
        padding: 10,
        borderRadius: 10,
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    justifyContentCenter: {
        flexDirection: 'row',
    },
    listOnline: {
        width: '100%',
        display: 'flex',
        height: '100%',
        alignContent: 'center',
    },
});

export default Online;
