import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '@assets/images/kerjayuk.png';
import Icon from '@react-native-vector-icons/fontawesome6';
import IconAnt from '@react-native-vector-icons/ant-design';
import CarouselCards from '@src/components/Carousel';
import OnlineCard from '@src/components/Online';

function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imagesLogo} source={Logo} />
                <TouchableOpacity style={styles.buttonNotif} onPress={() => navigation.navigate('Notifications')}>
                    <View style={styles.notifRed} />
                    <Icon name="bell" size={20} />
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Text style={[styles.font15]}>Hi, Good Morning!</Text>
                </View>
                <View style={styles.profile}>
                    <View style={styles.profileImageAndText}>
                        <View style={styles.profileImage}>
                            <Icon name="user" size={20} color="white" />
                        </View>
                        <View style={styles.profileWrapperName}>
                            <View>
                                <Text style={[styles.textBold, styles.textWhite, styles.font20]}>Abay</Text>
                                <Text style={styles.profileText}>UI / UX Designer</Text>
                            </View>
                            <View>
                                <Text style={styles.profileText}>Member Since</Text>
                                <Text style={[styles.textBold, styles.textWhite, styles.font20]}>01 Juni 2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.profileImageAndTextLocation}>
                        <View>
                            <Text style={styles.profileText}>Location</Text>
                            <Text style={[styles.font15, styles.textWhite, styles.textBold]}>Kantor Sahid</Text>
                        </View>
                        <View>
                            <Text style={styles.profileText}>ICO</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.scheduleContainer}>
                <Text style={styles.titleActivity}>Today Activity</Text>
                <View style={styles.scheduleWrapper}>
                    <View style={styles.scheduleTime}>
                        <View>
                            <Icon name="clock" size={20} color="#F84331" />
                        </View>
                        <View>
                            <Text style={styles.scheduleTimer}>08.00</Text>
                        </View>
                        <View>
                            <Text>Check In</Text>
                        </View>
                    </View>
                    <View style={styles.scheduleTime}>
                        <View justifyContent="center" alignItems="center">
                            <IconAnt name="reload" size={25} color="#F84331" />
                            <Text style={styles.text8}>8</Text>
                        </View>
                        <View>
                            <Text style={styles.scheduleTotalTimer}>03:00:00</Text>
                        </View>
                        <View>
                            <Text>Working Hours</Text>
                        </View>
                    </View>
                    <View style={styles.scheduleTime}>
                        <View>
                            <IconAnt name="logout" size={20} color="#F84331" />
                        </View>
                        <View>
                            <Text style={styles.scheduleTimer}>--:--</Text>
                        </View>
                        <View>
                            <Text>Check Out</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerNews}>
                <Text style={styles.titleNews}>PCS News</Text>
                <CarouselCards />
            </View>
            <View style={styles.containerOnline}>
                <Text style={styles.titleNews}>Online</Text>
                <OnlineCard />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        fontFamily: 'IstokWeb-Bold',
        fontSize: 16,
        flex: 1,
        gap: 10,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonNotif: {
        cursor: 'pointer',
    },
    font20: {
        fontSize: 20,
    },
    font15: {
        fontSize: 15,
    },
    textBold: {
        fontWeight: 'bold',
    },
    textWhite: {
        color: 'white',
    },
    notifRed: {
        backgroundColor: 'red',
        color: 'white',
        padding: 2,
        width: 8,
        height: 8,
        position: 'absolute',
        zIndex: 1,
        left: 10,
        top: 2,
        borderRadius: '50%',
    },
    imagesLogo: {
        objectFit: 'contain',
        maxWidth: '100%',
        width: 150,
        height: 100,
    },
    profile: {
        backgroundColor: '#C6115E',
        marginTop: 10,
        padding: 12,
        borderRadius: 10,
        color: 'white',
    },
    profileImage: {
        borderRadius: '50%',
        backgroundColor: '#A0A0A0',
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 10,
    },
    profileImageAndText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    profileImageAndTextLocation: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileWrapperName: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 0,
        flex: 1,
        alignItems: 'center',
    },
    textRed: {
        color: '#F84331',
    },
    profileText: {
        color: 'white',
        fontStyle: 'italic',
    },
    profileTextLocation: {
        color: 'white',
    },
    titleActivity: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    titleNews: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scheduleContainer: {
        padding: 10,
        marginBottom: 20,
        gap: 10,
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        width: 300,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerOnline: {
        padding: 10,
    },
    imageCarousell: {
        width: 100,
        height: 100,
        objectFit: 'contain',
    },
    scheduleWrapper: {
        paddingHorizontal: 15,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    scheduleTime: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 70,
        flexDirection: 'column',
        alignItems: 'center',
    },
    text8: {
        position: 'absolute',
        zIndex: 1,
        color: 'red',
    },
    scheduleTimer: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    scheduleTotalTimer: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F84331',
    },
    containerNews: {
        display: 'flex',
        flexDirection: 'column',
    },
});

export default Home;
