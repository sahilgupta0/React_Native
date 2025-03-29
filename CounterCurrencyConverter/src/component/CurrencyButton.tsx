import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string,
    value: number,
    flag: string,
    symbol: string,
}>



const CurrencyButton = (props: CurrencyButtonProps) => {
    return (
        <View style={styles.bottonContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text>{props.name} : {props.symbol}</Text>
            </View>
        </View>
    )
}

export default CurrencyButton

const styles = StyleSheet.create({
    bottonContainer: {
        // flex: 1,
        // alignItems:'center',
        // justifyContent: 'center', 
        // flexDirection:'row',
        
    },
    subContainer:{
        backgroundColor:'#99AAAB',
        padding:10,
        margin:10,
        width:110,
        height:110,
        borderWidth:3,
        borderRadius: 10,
        borderColor:"#616C6F"

    },
    flag:{
        fontSize:40,

    },
})