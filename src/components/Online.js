import { View, StyleSheet, Image, Text } from 'react-native';
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
];

function Online() {
    return (
        <View style={styles.cardOnline}>
            <Image style={styles.imageCarousell} />
            <View style={styles.listOnline}>
                {mockOnline.map(({ firstName, lastName }, index) => (
                    <View
                        key={index}
                        style={[
                            styles.wrapperProfile,
                            {
                                zIndex: mockOnline.length + index, // Higher zIndex for earlier items
                                left: index * 40, // Adjust spacing for visibility
                            },
                        ]}
                    >
                        <View style={styles.onlineImage}>
                            <Icon name="user" size={15} color="white" />
                        </View>
                        <View style={styles.wrapperName}>
                            <Text>{firstName}</Text>
                            <Text style={styles.lastName}>{lastName}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperName: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperProfile: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
    },
    onlineImage: {
        borderRadius: 25,
        backgroundColor: '#A0A0A0',
        width: 50,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstName: {
        fontSize: 5,
    },
    lastName: {
        fontSize: 10,
    },
    cardOnline: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    listOnline: {
        width: '100%',
        height: 100,
        position: 'relative',
    },
    imageCarousell: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
});

export default Online;
