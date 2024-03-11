import { StyleSheet, useWindowDimensions,Dimensions, PixelRatio } from 'react-native'
import React from 'react'
import { COLOR } from './Theme'

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const scaleWidth = windowWidth / 375;
const scaleHeight = windowHeight / 667;

// Tính toán kích thước dựa trên tỷ lệ
const scaleSize = size =>
    Math.round(PixelRatio.roundToNearestPixel(size * scaleWidth));
const scaleHeightSize = size =>
    Math.round(PixelRatio.roundToNearestPixel(size * scaleHeight));

const widthScaled = scaleSize(100);
const heightScaled = scaleHeightSize(200);


export const appStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15

    },
    main: {
        flex: 1,
        paddingHorizontal: 12
    },

    circle:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor: COLOR.secondary,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLOR.primary
    },

    hcn:{
        width: 360,
        height: 120,
        borderRadius: 10,
        backgroundColor: COLOR.primary,  
        margin:6,
        justifyContent: 'center',
    
    },

    hcnn:{
            width: 70,
            height: 40,
            borderRadius: 8,
            backgroundColor: '#FFFF',
            margin: 5,
    },

    //---------ICON-----------------//
    iconSmall: {
        width: 16,
        height: 16,
    },
    iconMedium: {
        width: 20,
        height: 20,
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconBig: {
        width: 28,
        height: 28,
    },

    //---------IMAGE-----------------//

    imageMedium: {
        width: windowWidth*0.35,
        windowHeight: windowHeight*0.2
    },

    //----------TEXT----------------//
    text14: {
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        color: COLOR.text,
    },
    
    text14Bold: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        color: COLOR.text,
    },

    text16: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        // letterSpacing: 0.3,
        color: COLOR.text,
    },
    text16Bold: {
        fontSize: 16,
        fontWeight: 'bold',
        // fontStyle: 'normal',
        // letterSpacing: 0.5,
        color: COLOR.text,
    },

    text18: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        color: COLOR.primary,
    },
    text18Bold: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        color: COLOR.text,
    },

    text20: {
        fontSize: 20,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        color: COLOR.text,
    },
    text20Bold: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        color: COLOR.text,
    },

    text22: {
        fontSize: 22,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        color: COLOR.text,
    },
    text22Bold: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        color: COLOR.text,
    },

    text24: {
        fontSize: 28,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        color: COLOR.text,
    },
    text24Bold: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        color: COLOR.text,
    },
})