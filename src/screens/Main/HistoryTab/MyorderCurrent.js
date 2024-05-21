import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const MyorderCurrent = ({ route, navigation }) => {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataChanged, setDataChanged] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://10.0.2.2:3000/apiMyCart/listcart');
                setCarts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [route, dataChanged]); // Listen for changes in route param and dataChanged to trigger fetching new data

    const handleDataChange = () => {
        setDataChanged(!dataChanged); // Toggle dataChanged to trigger re-render
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <FastImage resizeMode='stretch' source={{ uri: item.image }} style={styles.image} />
            <View>
                <Text style={styles.name}>{item.name} x {item.quantity}</Text>
                <Text style={styles.title3}>{item.price}đ</Text>
                {item.createdAt && (
                    <Text>Ordered at: {item.createdAt}</Text>
                )}
            </View>
        </View> 
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>My Order</Text>
                <TouchableOpacity onPress={handleDataChange}>
                    <Image style={{ width: 15, height: 15, marginTop: 25 }} source={require('../../../media/icons/loading.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.rectangle2}>
                <Text></Text>
            </View>

            <View style={styles.form2}>
                <View>
                    <View style={styles.form1}>
                        <FlatList
                            data={carts}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.rectangle3}>
                <Text></Text>
            </View>
        </View>
    );
}

export default MyorderCurrent;

const styles = StyleSheet.create({
    butOrder: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        marginTop: 10
    },
    rectangle4: {
        width: 76,
        height: 42,
        backgroundColor: '#324A59',
        marginTop: 20,
        borderRadius: 20
    },
    form3: {
        marginLeft: 'auto'
    },
    rectangle3: {
        width: '100%',
        height: 1,
        backgroundColor: '#F4F5F7',
        marginTop: 20
    },
    form2: {
        flexDirection: 'row',
        marginTop: 40
    },
    title3: {
        color: '#324A59',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24
    },
    image: {
        width: 50,
        height: 50
    },
    form1: {
        flexDirection: 'row',
        marginTop: 20
    },
    name: {
        color: '#324A59',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 15,
        marginLeft: 8
    },
    title1: {
        color: 'rgba(50, 74, 89, 0.22)',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15
    },
    rectangle2: {
        width: 375,
        height: 1,
        backgroundColor: '#F4F5F7',
        marginTop: 1
    },
    rectangle1: {
        width: 93,
        height: 2,
        backgroundColor: '#fff',
        marginTop: 20
    },
    history: {
        color: '#001833',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        marginTop: 20,
        textAlign: 'center'
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    rectangle: {
        width: 93,
        height: 2,
        backgroundColor: '#324A59',
        marginTop: 20
    },
    ongoing: {
        color: '#D8D8D8',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        marginTop: 20,
        textAlign: 'center'
    },
    title: {
        color: '#001833',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24,
        marginTop: 20,
        marginLeft: 150
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 500,
    }
})
