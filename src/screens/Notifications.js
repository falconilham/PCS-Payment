import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import IconMaterialDesign from '@react-native-vector-icons/material-design-icons';
import IconIonicons from '@react-native-vector-icons/ionicons';

const notifications = [
    {
        id: '1',
        type: 'Reimbursement',
        message: 'Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been paid, please check your BRIMO application, Thank you',
        status: 'approved',
        date: 'Today',
        alreadyRead: false,
    },
    {
        id: '2',
        type: 'Reimbursement',
        message: 'Your submission "description" has been rejected, please click for details.',
        status: 'rejected',
        date: 'Yesterday',
        alreadyRead: true,
    },
    {
        id: '3',
        type: 'Reimbursement',
        message: 'Your submission will be processed according to the reimbursement schedule. Please wait.',
        status: 'pending',
        date: '2022-10-06',
        alreadyRead: false,
    },
    {
        id: '4',
        type: 'Sickness',
        message: 'Your submission has been approved by the Superior.',
        status: 'approved',
        date: '2022-10-05',
        alreadyRead: true,
    },
    {
        id: '5',
        type: 'Sickness',
        message: 'Your submission has been rejected, please confirm with your Superior.',
        status: 'rejected',
        date: '2022-10-05',
        alreadyRead: true,
    },
    {
        id: '6',
        type: 'Sickness',
        message: 'Your submission is being reviewed by the Superior for the approval process, please wait.',
        status: 'pending',
        date: '2022-10-05',
        alreadyRead: true,
    },
    {
        id: '7',
        type: 'Overtime',
        message: 'Your submission has been approved by the Superior.',
        status: 'approved',
        date: '2022-10-05',
        alreadyRead: true,
    },
    {
        id: '8',
        type: 'Overtime',
        message: 'Your submission has been rejected, please confirm with your Superior.',
        status: 'rejected',
        date: '2022-10-05',
        alreadyRead: true,
    },
    {
        id: '9',
        type: 'Overtime',
        message: 'Your submission is being reviewed by the Superior for the approval process, please wait.',
        status: 'pending',
        date: '2022-10-05',
        alreadyRead: true,
    },
];

const NotificationItem = ({ id, type, status, date, message, alreadyRead, setReadNotification }) => {
    const getTypeIcon = {
        Reimbursement: <IconMaterialDesign name="cash" color="white" size={30} />,
        Sickness: <IconMaterialDesign name="pill" color="white" size={20} />,
        Overtime: <IconMaterialDesign name="timer" color="white" size={20} />,
    };
    const getStatusIcon = {
        approved: <IconMaterialDesign name="check" color="white" size={15} />,
        rejected: <IconMaterialDesign name="close" color="white" size={15} />,
        pending: <IconIonicons name="arrow-forward-outline" color="white" size={15} />,
    };
    const statusColor = {
        approved: styles.positionIconApproved,
        rejected: styles.positionIconRejected,
        pending: styles.positionIconPending,
    };
    return (
        <TouchableOpacity style={alreadyRead ? styles.notificationsRead : styles.notificationsUnread} onPress={() => setReadNotification(id)}>
            <View style={styles.statusIcon}>
                {getTypeIcon[type]}
                <View style={statusColor[status]} >
                    {getStatusIcon[status]}
                </View>
            </View>
            <View style={styles.notificationContent}>
                <View style={styles.notificationsHeader}>
                    <Text style={styles.notificationType}>{type}</Text>
                    <Text style={styles.notificationDate}>{date}</Text>
                </View>
                <Text style={styles.notificationMessage}>{message}</Text>
            </View>
        </TouchableOpacity>
    );
};

const NotificationScreen = () => {
    const [listNotifications, setListNotifications] = useState(notifications);
    const setReadNotification = (id) => {
        const newListNotifications = listNotifications.map((notification) => ({
            ...notification,
            alreadyRead: notification.id === id ? true : notification.alreadyRead,
        }));
        setListNotifications(newListNotifications);
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={listNotifications}
                renderItem={({ item }) => <NotificationItem {...item} setReadNotification={setReadNotification} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notificationsRead: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: 'white',
    },
    notificationsUnread: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: '#D7E5FF',
    },
    statusIcon: {
        marginRight: 10,
        backgroundColor: '#F84331',
        borderRadius: 5,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    positionIconRejected: {
        position: 'absolute',
        borderRadius: '50%',
        borderWidth: 0.5,
        borderColor: 'white',
        padding: 2,
        bottom: -5,
        right: -5,
        backgroundColor: '#F8301B',
    },
    positionIconApproved: {
        position: 'absolute',
        borderRadius: '50%',
        padding: 2,
        bottom: -5,
        right: -5,
        backgroundColor: '#31AF85',
    },
    positionIconPending: {
        position: 'absolute',
        borderRadius: '50%',
        padding: 2,
        bottom: -5,
        right: -5,
        backgroundColor: '#387CFF',
    },
    notificationsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    notificationContent: {
        flex: 1,
    },
    notificationType: {
        fontWeight: 'bold',
    },
    notificationDate: {
        color: 'gray',
        fontSize: 12,
    },
    notificationMessage: {
        fontSize: 14,
    },
});

export default NotificationScreen;
