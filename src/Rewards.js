import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Rewards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Rewards</Text>

            <View style={styles.view}>
                <View style={styles.view1}>
                    <View style={styles.textview}>
                        <Text style={styles.text1}>Loyalty card</Text>
                        <Text style={styles.text1}>4/8</Text>
                    </View>
                    <View style={styles.view2}>
                  <Image source={require('./img/cafe.png')} style={styles.image}></Image>
                    </View>
                </View>
            </View>

            <View>
                <View style={styles.view1}>
                    <View style={styles.textview2}>
                        <Text style={styles.text1}>My points:</Text>
                        <Text style={styles.text1}>2345</Text>

                    </View>

                   
                </View>
            </View>
        </View>
    )
}

export default Rewards

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    view:{
        marginBottom: 15
    },

    text: {
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        color: 'black'
    },

    text1: {
        fontSize: 20,
        color: '#D8D8D8',
        justifyContent: 'space-around',
        textAlign: 'left'

    },
    textview: {
        fontSize: 20,
        justifyContent: "space-around",
        flexDirection: 'row',
    },

    textview2: {
        fontSize: 20,
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },

    view1: {
        width: 360,
        height: 120,
        borderRadius: 10,
        backgroundColor: '#324A59',
       

    },

    view2: {
        width: 330,
        height: 55,
        borderRadius: 8,
        backgroundColor: '#FFFF',
        margin: 5,
    },

    textImage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    frame: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 330,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },



})