import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Flex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
            <View style={styles.view4}></View>
        </View>
    )
}

export default Flex

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        
    },

    text:{
    fontSize: 20,
    },

    view1:{
        width: 50,
        height: 50,
         backgroundColor:'red',
    }, 

    view2:{
        width: 50,
        height: 50,
         backgroundColor:'blue'
    },

    view3:{
        width: 50,
        height: 50,
         backgroundColor:'green'
    },

    view4:{
        width: 50,
        height: 50,
         backgroundColor:'red'
    },

})