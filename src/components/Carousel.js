import { Dimensions, View, Text, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useRef } from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

const SLIDER_WIDTH = Dimensions.get('window').width - 100;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const data = [
    {
        name: 'Anna Riswati',
        date: '30 Mei 2021',
        hari: 'Senin',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Anna',
        date: '30 Juni 2021',
        hari: 'Rabu',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Anna',
        date: '30 Agustus 2021',
        hari: 'Kamis',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const CarouselCards = () => {
    const [index, setIndex] = useState(1);
    const isCarousel = useRef(null);

    return (
        <View style={styles.carousel}>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={(item) => CarouselCardItem(item)}
                sliderWidth={1000}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(i) => setIndex(i)}
                useScrollView
                autoplay
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    );
};

const CarouselCardItem = ({ item, ...props }) => {
    return (
        <View key={props.index} style={styles.cardCarousell}>
            <View style={styles.cardCarousellHeader}>
                <View style={styles.cardCarousellHeaderLeft}>
                    <View style={styles.cardCarousellHeaderLeftImage}>
                        <Icon name="user" size={20} color="white" />
                    </View>
                    <View>
                        <Text style={[styles.textBold, styles.textRed, styles.font15]}>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.cardCarousellHeaderRight}>
                    <Text>{item.hari}</Text>
                    <Text>{item.date}</Text>
                </View>
            </View>
            <View>
                <Text>{item.body}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardCarousell: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    cardCarousellHeaderRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    cardCarousellHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    cardCarousellHeaderLeft: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    cardCarousellHeaderLeftImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#A0A0A0',
        display: 'flex',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: '#F84331',
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
    textRed: {
        color: '#F84331',
    },
});

export default CarouselCards;
